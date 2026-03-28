<template>
  <div class="cook-page">
    <!-- Header -->
    <header class="header" style="width:100%; padding-top:32px; box-sizing:border-box;">
      <div class="header-container">
        <a href="index.html" class="header-back-mobile" style="text-decoration:none;">
          <div class="logo">Mild</div>
        </a>
        <div class="logo-section">
          <a href="index.html" style="text-decoration:none;"><div class="logo">Mild</div></a>
        </div>
        <div class="actions-section">
          <img :src="$img('images/App_Store_Badge.svg')" alt="Download on the App Store" class="app-store-badge" style="cursor:pointer;">
        </div>
      </div>
    </header>

    <div class="cook-container">
      <!-- Progress bar -->
      <div class="cook-progress-bar">
        <div class="cook-progress-bar-inner"></div>
      </div>

      <!-- Steps -->
      <div class="cook-steps">
        <!-- Step 1 -->
        <div class="cook-step">
          <div class="cook-step-time">
            <div class="cook-step-time-icon"></div>
            <span class="cook-step-time-text">20 min</span>
          </div>
          <h2 class="cook-step-title">Cook Quinoa</h2>
          <div class="cook-step-content">
            <div class="cook-step-cards">
              <div class="cook-step-ingredients">
                <div class="cook-step-ingredient">
                  <span class="cook-step-ingredient-amount">600 g</span>
                  <span class="cook-step-ingredient-name">Cooked Brussels<br>Sprouts</span>
                </div>
                <div class="cook-step-ingredient">
                  <span class="cook-step-ingredient-amount">15-30 ml</span>
                  <span class="cook-step-ingredient-name">Maple Syrup</span>
                </div>
              </div>
              <div class="cook-step-tools">
                <span class="cook-step-tool">Saucepan</span>
                <span class="cook-step-tool">Strainer</span>
              </div>
            </div>
            <p class="cook-step-instructions">
              If the Brussels sprouts are already cooked, heat them in a skillet over medium heat by adding 15-30 ml of maple syrup. Cook for <span class="cook-step-timer-tag" @click="openTimer">2-3 min</span> until they become caramelized and glossy. Once done, set them aside to cool.
            </p>
          </div>
          <div class="cook-step-enlarge">
            <button class="cook-step-enlarge-btn">Tap to enlarge the text</button>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="cook-step">
          <div class="cook-step-time">
            <div class="cook-step-time-icon"></div>
            <span class="cook-step-time-text">20 min</span>
          </div>
          <h2 class="cook-step-title">Cook Quinoa</h2>
          <div class="cook-step-content">
            <div class="cook-step-cards">
              <div class="cook-step-ingredients">
                <div class="cook-step-ingredient">
                  <span class="cook-step-ingredient-amount">600 g</span>
                  <span class="cook-step-ingredient-name">Cooked Brussels<br>Sprouts</span>
                </div>
                <div class="cook-step-ingredient">
                  <span class="cook-step-ingredient-amount">15-30 ml</span>
                  <span class="cook-step-ingredient-name">Maple Syrup</span>
                </div>
              </div>
              <div class="cook-step-tools">
                <span class="cook-step-tool">Saucepan</span>
                <span class="cook-step-tool">Strainer</span>
              </div>
            </div>
            <p class="cook-step-instructions">
              If the Brussels sprouts are already cooked, heat them in a skillet over medium heat by adding 15-30 ml of maple syrup. Cook for <span class="cook-step-timer-tag" @click="openTimer">2-3 min</span> until they become caramelized and glossy. Once done, set them aside to cool.
            </p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="cook-step">
          <div class="cook-step-time">
            <div class="cook-step-time-icon"></div>
            <span class="cook-step-time-text">20 min</span>
          </div>
          <h2 class="cook-step-title">Cook Quinoa</h2>
          <div class="cook-step-content">
            <div class="cook-step-cards">
              <div class="cook-step-ingredients">
                <div class="cook-step-ingredient">
                  <span class="cook-step-ingredient-amount">600 g</span>
                  <span class="cook-step-ingredient-name">Cooked Brussels<br>Sprouts</span>
                </div>
                <div class="cook-step-ingredient">
                  <span class="cook-step-ingredient-amount">15-30 ml</span>
                  <span class="cook-step-ingredient-name">Maple Syrup</span>
                </div>
              </div>
              <div class="cook-step-tools">
                <span class="cook-step-tool">Saucepan</span>
                <span class="cook-step-tool">Strainer</span>
              </div>
            </div>
            <p class="cook-step-instructions">
              If the Brussels sprouts are already cooked, heat them in a skillet over medium heat by adding 15-30 ml of maple syrup. Cook for <span class="cook-step-timer-tag" @click="openTimer">2-3 min</span> until they become caramelized and glossy. Once done, set them aside to cool.
            </p>
          </div>
        </div>

        <!-- Step 4 with image -->
        <div class="cook-step">
          <div class="cook-step-time">
            <div class="cook-step-time-icon"></div>
            <span class="cook-step-time-text">20 min</span>
          </div>
          <h2 class="cook-step-title">Cook Quinoa</h2>
          <img :src="$img('images/recipes/step-4.jpg')" alt="Step 4" class="cook-step-image">
          <div class="cook-step-content">
            <div class="cook-step-cards">
              <div class="cook-step-ingredients">
                <div class="cook-step-ingredient">
                  <span class="cook-step-ingredient-amount">600 g</span>
                  <span class="cook-step-ingredient-name">Cooked Brussels<br>Sprouts</span>
                </div>
                <div class="cook-step-ingredient">
                  <span class="cook-step-ingredient-amount">15-30 ml</span>
                  <span class="cook-step-ingredient-name">Maple Syrup</span>
                </div>
              </div>
              <div class="cook-step-tools">
                <span class="cook-step-tool">Saucepan</span>
                <span class="cook-step-tool">Strainer</span>
              </div>
            </div>
            <p class="cook-step-instructions">
              If the Brussels sprouts are already cooked, heat them in a skillet over medium heat by adding 15-30 ml of maple syrup. Cook for <span class="cook-step-timer-tag" @click="openTimer">2-3 min</span> until they become caramelized and glossy. Once done, set them aside to cool.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Complete Button -->
    <button class="cook-complete-btn">Complete</button>

    <!-- Timer Modal -->
    <div class="timer-modal" :class="{ active: timerModalActive }" @keydown.esc="timerModalActive = false">
      <div class="timer-modal-overlay" @click="timerModalActive = false"></div>
      <div class="timer-modal-content">
        <div class="timer-modal-hint">
          <span>Pick up between <strong>1-5 minutes</strong></span>
        </div>
        <div class="timer-modal-picker">
          <div class="timer-picker-wrapper">
            <div class="timer-picker-list">
              <div
                v-for="n in 5"
                :key="n"
                class="timer-picker-item"
                :class="{ selected: selectedMinutes === n }"
                @click="selectedMinutes = n"
              >{{ n }} <span class="min-label">min</span></div>
            </div>
          </div>
        </div>
        <button class="timer-modal-btn" @click="setTimer">Set up</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timerModalActive = ref(false)
const selectedMinutes = ref(3)
let currentTimerTag = null

function openTimer(event) {
  currentTimerTag = event.target
  timerModalActive.value = true
}

function setTimer() {
  timerModalActive.value = false
  if (currentTimerTag) {
    startTimer(selectedMinutes.value, currentTimerTag)
  }
}

function startTimer(minutes, tagElement) {
  let totalSeconds = minutes * 60
  tagElement.dataset.originalText = tagElement.textContent

  const interval = setInterval(function () {
    const mins = Math.floor(totalSeconds / 60)
    const secs = totalSeconds % 60
    tagElement.textContent = `${mins}:${secs.toString().padStart(2, '0')}`

    if (totalSeconds <= 0) {
      clearInterval(interval)
      tagElement.textContent = 'Done!'
      const audio = new Audio('sounds/timer-done.mp3')
      audio.play()

      setTimeout(() => {
        tagElement.textContent = tagElement.dataset.originalText
      }, 3000)
    }
    totalSeconds--
  }, 1000)
}

function onKeydown(e) {
  if (e.key === 'Escape' && timerModalActive.value) {
    timerModalActive.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>
