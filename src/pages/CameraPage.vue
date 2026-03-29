<template>
  <div class="cam-page">

    <!-- Live camera / frozen photo -->
    <video v-show="!capturedImage" ref="videoEl" class="cam-viewfinder" autoplay muted playsinline></video>
    <img v-if="capturedImage" :src="capturedImage" class="cam-viewfinder" alt="">
    <canvas ref="canvasEl" style="display:none"></canvas>

    <!-- Analyzing overlay -->
    <div v-if="analyzing" class="cam-analyzing">Analyzing...</div>

    <!-- API Key prompt -->
    <div v-if="showApiKeyPrompt" class="cam-apikey-overlay">
      <div class="cam-apikey-box">
        <p class="cam-apikey-label">Enter OpenAI API Key</p>
        <input v-model="apiKeyInput" type="password" placeholder="sk-..." class="cam-apikey-input" @keyup.enter="saveApiKey">
        <button class="cam-apikey-btn" @click="saveApiKey">Save</button>
      </div>
    </div>

    <!-- Bottom section -->
    <div class="cam-bottom">
      <div class="cam-label">Speak, Snap, or Select</div>
      <div class="cam-bar">
        <div class="cam-bar-inner">

          <!-- Thumbnail (left slot) — shown after capture -->
          <div class="cam-thumb-slot">
            <div v-if="capturedImage" class="cam-thumb" @click="deletePhoto">
              <img :src="capturedImage" class="cam-thumb-img" alt="Captured">
              <div class="cam-thumb-delete">×</div>
            </div>
            <button v-else class="cam-ctrl-btn" aria-label="Voice" @click="goToVoice">
              <img :src="$img('images/Icons/voice.svg')" alt="Voice" width="24" height="24">
            </button>
          </div>

          <!-- Shutter -->
          <button class="cam-shutter" aria-label="Take photo" @click="onShutter">
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
import { ref, onMounted } from 'vue'
import { visibleGroups, hiddenGroups } from '../data/ingredientGroups.js'

const videoEl = ref(null)
const canvasEl = ref(null)
const capturedImage = ref(null)
const analyzing = ref(false)
const showApiKeyPrompt = ref(false)
const apiKeyInput = ref('')

// Build lowercase name → key map from all ingredient groups
const allCategories = [...visibleGroups, ...hiddenGroups]
const nameToKey = {}
allCategories.forEach(cat => {
  cat.items.forEach(item => {
    nameToKey[item.name.toLowerCase()] = cat.title + item.name
  })
})

onMounted(async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    })
    videoEl.value.srcObject = stream
  } catch {}

  if (!localStorage.getItem('mild_openai_key')) {
    showApiKeyPrompt.value = true
  }
})

function saveApiKey() {
  const key = apiKeyInput.value.trim()
  if (key) {
    localStorage.setItem('mild_openai_key', key)
    showApiKeyPrompt.value = false
  }
}

function onShutter() {
  const apiKey = localStorage.getItem('mild_openai_key')
  if (!apiKey) {
    showApiKeyPrompt.value = true
    return
  }

  if (capturedImage.value) {
    // Second tap → analyze existing photo
    analyzePhoto(capturedImage.value)
  } else {
    // First tap → capture photo
    const video = videoEl.value
    const canvas = canvasEl.value
    canvas.width = video.videoWidth || 640
    canvas.height = video.videoHeight || 480
    canvas.getContext('2d').drawImage(video, 0, 0)
    capturedImage.value = canvas.toDataURL('image/jpeg', 0.8)
    analyzePhoto(capturedImage.value)
  }
}

function deletePhoto() {
  capturedImage.value = null
}

async function analyzePhoto(dataUrl) {
  const apiKey = localStorage.getItem('mild_openai_key')
  const base64 = dataUrl.split(',')[1]
  analyzing.value = true

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{
          role: 'user',
          content: [
            { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${base64}` } },
            { type: 'text', text: 'Identify all food ingredients visible in this image. Return ONLY a JSON array of ingredient names in English. Example: ["chicken","tomatoes","onion"]. No explanations, no markdown.' }
          ]
        }],
        max_tokens: 300
      })
    })

    const data = await res.json()
    const text = data.choices[0].message.content.trim()
    let detected = []
    try {
      const match = text.match(/\[[\s\S]*\]/)
      if (match) detected = JSON.parse(match[0])
    } catch {}

    localStorage.setItem('mild_detected_ingredients', JSON.stringify(matchIngredients(detected)))
  } catch {
    localStorage.setItem('mild_detected_ingredients', JSON.stringify([]))
  }

  analyzing.value = false
  location.href = 'voice.html'
}

function matchIngredients(detected) {
  const result = new Set()
  detected.forEach(name => {
    const lower = name.toLowerCase().trim()
    if (nameToKey[lower]) { result.add(nameToKey[lower]); return }
    for (const [key, val] of Object.entries(nameToKey)) {
      if (lower.includes(key) || key.includes(lower)) { result.add(val); return }
    }
  })
  return [...result]
}

function goToVoice() {
  location.href = 'voice.html'
}
</script>
