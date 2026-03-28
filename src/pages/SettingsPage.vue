<template>
  <div class="settings-page">

    <div class="settings-content">

      <!-- Avatar -->
      <div class="settings-avatar-wrap">
        <div class="settings-avatar">
          <div class="settings-avatar-circle"></div>
        </div>
      </div>

      <div class="settings-main">

        <div class="settings-section">

          <!-- Name -->
          <div class="settings-row settings-row--name">
            <span class="settings-label">Lara Thomson</span>
          </div>

          <div class="settings-list">

            <!-- Notifications -->
            <div class="settings-row">
              <span class="settings-label">Notifications</span>
              <div class="settings-toggle" :class="{ 'settings-toggle--on': notifications }" @click="notifications = !notifications">
                <div class="settings-toggle-knob"></div>
              </div>
            </div>

            <!-- Timer signal -->
            <div class="settings-row">
              <span class="settings-label">Timer signal</span>
              <div class="settings-toggle" :class="{ 'settings-toggle--on': timerSignal }" @click="timerSignal = !timerSignal">
                <div class="settings-toggle-knob"></div>
              </div>
            </div>

            <!-- Units -->
            <div class="settings-row settings-row--units">
              <span class="settings-label">Units</span>
              <div class="settings-segment">
                <div class="settings-segment-item" :class="{ 'settings-segment-item--active': units === 'metric' }" @click="units = 'metric'">Metric</div>
                <div class="settings-segment-item" :class="{ 'settings-segment-item--active': units === 'imperial' }" @click="units = 'imperial'">Imperial</div>
              </div>
            </div>

            <!-- Languages -->
            <div class="settings-row settings-row--name" style="cursor:pointer" @click="showLanguages = true">
              <span class="settings-label">Languages</span>
              <span class="settings-value">{{ selectedLang }}</span>
            </div>

            <!-- Improve Mild -->
            <div class="settings-row settings-row--name">
              <span class="settings-label">Improve Mild</span>
            </div>

          </div>
        </div>

        <!-- Log out -->
        <div class="settings-row settings-row--name">
          <span class="settings-label">log out</span>
        </div>

      </div>
    </div>

    <!-- Languages sheet -->
    <div v-if="showLanguages" class="settings-lang-overlay" @click.self="showLanguages = false">
      <div class="settings-lang-sheet">
        <div class="settings-lang-handle"></div>
        <div class="settings-lang-list">
          <div
            v-for="lang in languages"
            :key="lang"
            class="settings-lang-item"
            :class="{ 'settings-lang-item--active': selectedLang === lang }"
            @click="selectLang(lang)"
          >{{ lang }}</div>
        </div>
      </div>
    </div>

    <!-- Bottom button -->
    <div class="settings-bottom">
      <div class="settings-bottom-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="1" stroke="white" stroke-width="2"/>
        </svg>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const notifications = ref(false)
const timerSignal = ref(false)
const units = ref('imperial')
const showLanguages = ref(false)
const selectedLang = ref('English')

const languages = [
  'English', 'Español', 'Italiano', 'Deutsch', 'Français',
  'Português', 'Čeština', 'Polski', 'Українська', 'Magyar',
  'Dansk', 'Suomi', 'Svenska', 'Türkçe', 'Русский', '中文', '日本語',
]

function selectLang(lang) {
  selectedLang.value = lang
  showLanguages.value = false
}
</script>
