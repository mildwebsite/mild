<template>
  <div class="cam-page">

    <!-- Viewfinder -->
    <img class="cam-viewfinder" src="https://placehold.co/393x844" alt="">

    <!-- Bottom section -->
    <div class="cam-bottom">

      <!-- Label pill -->
      <div class="cam-label">Speak, Snap, or Select</div>

      <!-- Controls bar -->
      <div class="cam-bar">
        <div class="cam-bar-inner">

          <!-- Voice -->
          <button class="cam-ctrl-btn" aria-label="Voice" @click="goToVoice">
            <img :src="$img('images/Icons/voice.svg')" alt="Voice" width="24" height="24">
          </button>

          <!-- Shutter -->
          <button class="cam-shutter" aria-label="Take photo">
            <img :src="$img('images/Icons/camera.svg')" alt="Camera" width="80" height="60">
          </button>

          <!-- Keyboard -->
          <button class="cam-ctrl-btn" aria-label="Keyboard" @click="goToVoice">
            <img :src="$img('images/Icons/keyboard.svg')" alt="Keyboard" width="24" height="24">
          </button>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
function goToVoice() {
  location.href = 'voice.html'
}
</script>
