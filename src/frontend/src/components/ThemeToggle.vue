<script setup>
import { Sun, Moon, Monitor } from 'lucide-vue-next'
import { theme, setTheme } from '../theme.js'
</script>

<template>
  <div class="bar" role="group" aria-label="Tema da interface">
    <button
      type="button"
      class="btn"
      :class="{ ativo: theme === 'light' }"
      :aria-pressed="theme === 'light'"
      title="Tema claro"
      @click="setTheme('light')"
    >
      <Sun class="ico" aria-hidden="true" />
      <span class="lbl">Claro</span>
    </button>
    <button
      type="button"
      class="btn"
      :class="{ ativo: theme === 'dark' }"
      :aria-pressed="theme === 'dark'"
      title="Tema escuro"
      @click="setTheme('dark')"
    >
      <Moon class="ico" aria-hidden="true" />
      <span class="lbl">Escuro</span>
    </button>
    <button
      type="button"
      class="btn"
      :class="{ ativo: theme === 'system' }"
      :aria-pressed="theme === 'system'"
      title="Seguir o sistema"
      @click="setTheme('system')"
    >
      <Monitor class="ico" aria-hidden="true" />
      <span class="lbl">Sistema</span>
    </button>
  </div>
</template>

<style scoped>
.bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  justify-content: center;
  padding: 0.65rem 1rem;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.75rem;
  font: inherit;
  font-size: 0.8125rem;
  color: var(--text);
  background: var(--social-bg);
  border: 1px solid var(--border);
  border-radius: 999px;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s, color 0.2s;
}

.btn:hover {
  box-shadow: var(--shadow);
}

.btn:focus-visible {
  outline: 2px solid var(--accent-border);
  outline-offset: 2px;
}

.btn.ativo {
  color: var(--text-h);
  border-color: var(--accent-border);
  background: var(--accent-bg);
}

.ico {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .lbl {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .btn {
    padding: 0.5rem;
  }
}
</style>
