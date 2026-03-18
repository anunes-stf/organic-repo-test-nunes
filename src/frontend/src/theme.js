import { ref } from 'vue'

const STORAGE_KEY = 'theme'

const stored =
  typeof localStorage !== 'undefined'
    ? localStorage.getItem(STORAGE_KEY) || 'system'
    : 'system'

export const theme = ref(
  stored === 'light' || stored === 'dark' || stored === 'system'
    ? stored
    : 'system',
)

function resolveDark() {
  if (theme.value === 'dark') return true
  if (theme.value === 'light') return false
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function applyTheme() {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('dark', resolveDark())
}

export function setTheme(mode) {
  if (mode !== 'light' && mode !== 'dark' && mode !== 'system') return
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
