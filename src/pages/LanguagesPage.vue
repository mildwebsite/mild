<template>
  <div class="lang-page">
    <div class="lang-sheet">
      <div class="lang-handle"></div>
      <div class="lang-list">
        <div
          v-for="lang in languages"
          :key="lang"
          class="lang-item"
          :class="{ 'lang-item--active': selected === lang }"
          @click="select(lang)"
        >
          {{ lang }}
        </div>
      </div>
    </div>
    <div class="lang-home-indicator"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const languages = [
  'English', 'Español', 'Italiano', 'Deutsch', 'Français',
  'Português', 'Čeština', 'Polski', 'Українська', 'Magyar',
  'Dansk', 'Suomi', 'Svenska', 'Türkçe', 'Русский', '中文', '日本語',
]

const selected = ref('English')

function select(lang) {
  selected.value = lang
  window.history.back()
}
</script>
