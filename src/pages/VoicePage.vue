<template>
  <div class="voice-page">

    <!-- White panel -->
    <div class="voice-panel">

      <!-- Top bar -->
      <div class="voice-topbar">
        <!-- Close icon (always left) -->
        <img :src="$img('images/Icons/Close_header.svg')" alt="Close" width="20" height="20" @click="goToCamera" style="cursor:pointer">

        <!-- Center: count when selected -->
        <div v-if="selectedCount > 0" class="voice-selected-label">
          <span class="voice-selected-count">{{ selectedCount }}</span><span class="voice-selected-text"> selected</span>
        </div>
        <div v-else></div>

        <!-- Right: clear icon when selected, empty otherwise -->
        <img v-if="selectedCount > 0" :src="$img('images/Icons/clear.svg')" alt="Clear" width="20" height="20" class="voice-clear-btn" @click="clearSelection">
        <div v-else></div>
      </div>

      <!-- iOS 26 header gradient (visible on scroll) -->
      <div v-show="isScrolled" class="voice-header-fade"></div>

      <!-- Ingredients list -->
      <div class="voice-content" ref="contentEl" @scroll="onContentScroll">

        <div v-for="category in categories" :key="category.title" class="voice-category">
          <div class="voice-category-title">{{ category.title }}</div>
          <div class="voice-pills">
            <div
              v-for="item in category.items"
              :key="category.title + item.name"
              class="voice-pill"
              :class="{ 'voice-pill--selected': selected.has(category.title + item.name) }"
              @click="toggleItem(category.title + item.name)"
            >
              <img :src="$img(item.img)" :alt="item.name" class="voice-pill-img">
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Recent pill (shown only when frequent items exist) -->
      <div v-if="frequentItems.length > 0" class="voice-recent-row">
        <div class="voice-recent-pill" @click="showRecent = true">Recent</div>
      </div>

      <!-- Scroll icon (always visible, moves with finger) -->
      <img
        :src="$img('images/Icons/Scroll.svg')"
        alt="Scroll"
        width="24"
        height="24"
        class="voice-scroll-btn"
        :style="{ bottom: scrollBtnBottom + 'px' }"
        draggable="false"
        @mousedown.prevent="onScrollDragStart"
        @touchstart.prevent="onScrollDragStart"
      >

    </div>

    <!-- Bottom bar -->
    <div class="voice-bottom">
      <div class="voice-bottom-icons">
        <!-- Voice -->
        <div class="voice-icon-btn">
          <img :src="$img('images/Icons/voice.svg')" alt="Voice" width="24" height="24">
        </div>
        <!-- Camera -->
        <div class="voice-icon-btn">
          <img :src="$img('images/Icons/camera-bottom.svg')" alt="Camera" width="44" height="33">
        </div>
      </div>

      <!-- Discover Recipes button -->
      <button class="voice-discover-btn" :class="{ 'voice-discover-btn--active': selectedCount > 0 }" @click="onDiscover">Discover Recipes</button>
    </div>

    <!-- Recent popover -->
    <div v-if="showRecent" class="voice-recent-overlay" @click.self="showRecent = false">
      <div class="voice-recent-sheet">
        <div class="voice-recent-sheet-handle"></div>
        <div class="voice-recent-sheet-header">
          <span class="voice-recent-sheet-title">Recent</span>
          <img :src="$img('images/Icons/clear.svg')" alt="Clear" width="20" height="20" class="voice-recent-sheet-clear" @click="clearRecent">
        </div>
        <div class="voice-recent-sheet-pills">
          <div
            v-for="item in frequentItems"
            :key="item.key"
            class="voice-pill"
            :class="{ 'voice-pill--selected': selected.has(item.key) }"
            @click="toggleItem(item.key)"
          >
            <img :src="$img(item.img)" :alt="item.name" class="voice-pill-img">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { visibleGroups, hiddenGroups } from '../data/ingredientGroups.js'

const categories = [...visibleGroups, ...hiddenGroups]

// Build key → item lookup for Recent popover
const itemMap = {}
categories.forEach(cat => {
  cat.items.forEach(item => {
    itemMap[cat.title + item.name] = { ...item, key: cat.title + item.name }
  })
})

const selected = ref(new Set())
const selectedCount = ref(0)
const contentEl = ref(null)
const isScrolled = ref(false)
const scrollBtnBottom = ref(32)
const showRecent = ref(false)

const FREQUENT_THRESHOLD = 3
const recentCounts = ref(JSON.parse(localStorage.getItem('mild_recent_counts') || '{}'))

const frequentItems = computed(() =>
  Object.entries(recentCounts.value)
    .filter(([, count]) => count >= FREQUENT_THRESHOLD)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => itemMap[key])
    .filter(Boolean)
)

const KNOB_MIN_BOTTOM = 32   // distance from bottom (matches bottom bar)
const KNOB_TOP_OFFSET = 20   // gap from top boundary (header fade)

function onContentScroll() {
  const c = contentEl.value
  if (!c) return
  isScrolled.value = c.scrollTop > 0
  // sync knob position with scroll
  const panel = document.querySelector('.voice-panel')
  if (!panel) return
  const trackH = panel.clientHeight - 93 - 24 - KNOB_MIN_BOTTOM - KNOB_TOP_OFFSET
  const ratio = c.scrollTop / (c.scrollHeight - c.clientHeight) || 0
  scrollBtnBottom.value = KNOB_MIN_BOTTOM + ratio * trackH
}

function toggleItem(name) {
  const s = new Set(selected.value)
  if (s.has(name)) {
    s.delete(name)
  } else {
    s.add(name)
  }
  selected.value = s
  selectedCount.value = s.size
}

function clearSelection() {
  selected.value = new Set()
  selectedCount.value = 0
}

function onDiscover() {
  if (selectedCount.value === 0) return
  const counts = { ...recentCounts.value }
  selected.value.forEach(key => {
    counts[key] = (counts[key] || 0) + 1
  })
  recentCounts.value = counts
  localStorage.setItem('mild_recent_counts', JSON.stringify(counts))
}

function goToCamera() {
  window.location.href = 'camera.html'
}

function clearRecent() {
  recentCounts.value = {}
  localStorage.removeItem('mild_recent_counts')
  showRecent.value = false
}

function onScrollDragStart(e) {
  const content = document.querySelector('.voice-content')
  const panel = document.querySelector('.voice-panel')
  if (!content || !panel) return

  const startY = e.touches ? e.touches[0].clientY : e.clientY
  const startBottom = scrollBtnBottom.value
  const trackH = panel.clientHeight - 93 - 24 - KNOB_MIN_BOTTOM - KNOB_TOP_OFFSET

  function onMove(ev) {
    ev.preventDefault()
    const currentY = ev.touches ? ev.touches[0].clientY : ev.clientY
    const delta = startY - currentY
    const newBottom = Math.min(KNOB_MIN_BOTTOM + trackH, Math.max(KNOB_MIN_BOTTOM, startBottom + delta))
    scrollBtnBottom.value = newBottom

    const ratio = (newBottom - KNOB_MIN_BOTTOM) / trackH
    content.scrollTop = ratio * (content.scrollHeight - content.clientHeight)
  }

  function onEnd() {
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseup', onEnd)
    document.removeEventListener('touchmove', onMove)
    document.removeEventListener('touchend', onEnd)
  }

  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseup', onEnd)
  document.addEventListener('touchmove', onMove, { passive: false })
  document.addEventListener('touchend', onEnd)
}
</script>
