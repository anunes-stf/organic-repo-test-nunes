import { ref } from 'vue'

const STORAGE_KEY = 'theme'

const VALID = ['light', 'dark', 'pink', 'system']

const stored =
  typeof localStorage !== 'undefined'
    ? localStorage.getItem(STORAGE_KEY) || 'system'
    : 'system'

export const theme = ref(VALID.includes(stored) ? stored : 'system')

function resolveDark() {
  if (theme.value === 'dark') return true
  if (theme.value === 'light' || theme.value === 'pink') return false
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function applyTheme() {
  if (typeof document === 'undefined') return
  const el = document.documentElement
  el.classList.toggle('dark', theme.value === 'dark')
  el.classList.toggle('pink', theme.value === 'pink')
}

export function setTheme(mode) {
  if (!VALID.includes(mode)) return
  theme.value = mode
  try {
    localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    /* ignore */
  }
  applyTheme()
}

let mediaListener

export function initTheme() {
  applyTheme()
  if (typeof window === 'undefined') return
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  mediaListener = () => {
    if (theme.value === 'system') applyTheme()
  }
  mql.addEventListener('change', mediaListener)
}
