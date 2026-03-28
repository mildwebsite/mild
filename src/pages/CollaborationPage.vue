<template>
  <body class="collaboration-page">
    <main class="collaboration-shell">
      <div class="collaboration-card">
        <header class="header">
          <div class="header-container">
            <div class="logo-section">
              <a href="index.html" style="text-decoration:none;"><div class="logo">Mild</div></a>
            </div>
            <div class="icons-section">
              <div class="icons-wrapper">
                <button class="icon-button" aria-label="iOS">
                  <img :src="$img('images/ios.svg')" alt="iOS" class="icon-image">
                </button>
                <button class="icon-button" aria-label="Android">
                  <img :src="$img('images/android.svg')" alt="Android" class="icon-image">
                  <span class="android-tooltip">🤖 Soon</span>
                </button>
              </div>
            </div>
            <div class="actions-section">
              <img :src="$img('images/App_Store_Badge.svg')" alt="Download on the App Store" class="app-store-badge" style="cursor: pointer;">
            </div>
          </div>
        </header>

        <section class="collaboration-hero">
          <h1 class="collaboration-title">Collaboration</h1>
          <p class="collaboration-intro">
            If you have questions, experience issues, or need help using the Mild app, feel free to contact us.
            We're happy to assist with technical problems, feedback, suggestions, or general questions about the app,
            its features, and how to use them properly to get the most out of everyday cooking with Mild.
          </p>
        </section>

        <div class="collaboration-content">
          <!-- Phone Mockup with Video -->
          <video class="collab-phone-video" autoplay muted loop playsinline>
            <source :src="$img('Video/colaboration.mp4')" type="video/mp4">
          </video>

          <!-- Feature Cards -->
          <div class="collab-features">
            <div class="collab-feature-card">
              <div class="collab-feature-icon">
                <!-- Globe -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <div class="collab-feature-text">
                <h3 class="collab-feature-title">Your Recipes in the App</h3>
                <p class="collab-feature-desc">Simple meals with up to 10 ingredients and up to 1 hour of cooking, with ingredients available in 17 languages worldwide!</p>
              </div>
            </div>

            <div class="collab-feature-card">
              <div class="collab-feature-icon">
                <!-- Infinity -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"/></svg>
              </div>
              <div class="collab-feature-text">
                <h3 class="collab-feature-title">Lifetime Access</h3>
                <p class="collab-feature-desc">Get lifetime access to photo-based ingredient recognition, guides, filters, timers, and favorites. Enjoy fast recipe tools anytime.</p>
              </div>
            </div>

            <div class="collab-feature-card">
              <div class="collab-feature-icon">
                <!-- Megaphone -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"/><path d="M8 6v8"/></svg>
              </div>
              <div class="collab-feature-text">
                <h3 class="collab-feature-title">Promote Your Products</h3>
                <p class="collab-feature-desc">Share and actively promote your cookbooks, courses, or our guides to reach more people and grow your audience.</p>
              </div>
            </div>

            <div class="collab-feature-card">
              <div class="collab-feature-icon">
                <!-- Scan Heart -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z"/></svg>
              </div>
              <div class="collab-feature-text">
                <h3 class="collab-feature-title">Health-Focused Tools</h3>
                <p class="collab-feature-desc">Use built-in calorie and macro tracking to tailor your recipes for better nutrition and support healthier everyday meal choices.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="collab-contact">
          <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#97;&#115;&#116;&#101;&#64;&#109;&#105;&#108;&#100;&#99;&#111;&#111;&#107;&#46;&#97;&#112;&#112;" class="collab-email">Say hello</a>
          <a href="https://calendly.com/mitaras/30min" class="collab-call" target="_blank" rel="noopener noreferrer">Book a call</a>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="footer-container">
        <a href="index.html" class="footer-brand">Mild</a>

        <div class="footer-right">
          <a href="privacy.html" class="footer-link">Privacy</a>
          <a href="collaboration.html" class="footer-link">Collaboration</a>
          <a href="contact.html" class="footer-link">Get in touch</a>
        </div>
      </div>
    </footer>

    <!-- Scroll to top button -->
    <button class="scroll-to-top" :class="{ visible: scrollVisible }" @click="window.scrollTo({top: 0, behavior: 'smooth'})" aria-label="Scroll to top">
      <svg viewBox="0 0 24 24">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </body>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const window = globalThis
const scrollVisible = ref(false)

function onScroll() {
  scrollVisible.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
