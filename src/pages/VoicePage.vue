<template>
  <div class="voice-page">

    <!-- White panel -->
    <div class="voice-panel">

      <!-- Top bar -->
      <div class="voice-topbar">
        <!-- Close icon (always left) -->
        <img :src="$img('images/Icons/Close_header.svg')" alt="Close" width="20" height="20">

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

      <!-- Recent quick scroll (shown when items selected) -->
      <div v-if="selectedCount > 0" class="voice-recent-row">
        <div class="voice-recent-pill">Recent</div>
        <img
          :src="$img('images/Icons/Scroll.svg')"
          alt="Scroll"
          width="24"
          height="24"
          class="voice-scroll-btn"
          draggable="false"
          @mousedown.prevent="onScrollDragStart"
          @touchstart.prevent="onScrollDragStart"
        >
      </div>

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
      <button class="voice-discover-btn" :class="{ 'voice-discover-btn--active': selectedCount > 0 }">Discover Recipes</button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { visibleGroups, hiddenGroups } from '../data/ingredientGroups.js'

const categories = [...visibleGroups, ...hiddenGroups]
const selected = ref(new Set())
const selectedCount = ref(0)
const contentEl = ref(null)
const isScrolled = ref(false)

function onContentScroll() {
  isScrolled.value = (contentEl.value?.scrollTop ?? 0) > 0
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

function onScrollDragStart(e) {
  const content = document.querySelector('.voice-content')
  if (!content) return

  const startY = e.touches ? e.touches[0].clientY : e.clientY
  const startScrollTop = content.scrollTop

  function onMove(ev) {
    ev.preventDefault()
    const currentY = ev.touches ? ev.touches[0].clientY : ev.clientY
    content.scrollTop = startScrollTop + (startY - currentY) * 3
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
