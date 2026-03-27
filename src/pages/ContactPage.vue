<template>
  <body class="contact-page">
    <main class="contact-shell">
      <div class="contact-card">
        <header class="privacy-header">
          <a href="index.html" class="privacy-brand">Mild</a>
          <a href="index.html" class="privacy-app-badge-link" aria-label="Download on the App Store">
            <img :src="$img('images/App_Store_Badge.svg')" alt="Download on the App Store" class="app-store-badge">
          </a>
        </header>

        <section class="contact-hero">
          <h1 class="contact-title">Get in touch</h1>
          <div class="contact-copy">
            <p class="contact-text">
              If you have questions, experience issues, or need help using the Mild app, feel free to contact us.
              We're happy to assist with technical problems, feedback, suggestions, or general questions about the app,
              its features, and how to use them properly to get the most out of everyday cooking with Mild.
            </p>
            <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#97;&#115;&#116;&#101;&#64;&#109;&#105;&#108;&#100;&#99;&#111;&#111;&#107;&#46;&#97;&#112;&#112;" class="contact-email">Say hello</a>
          </div>
        </section>

        <section class="contact-feedback">
          <h2 class="contact-section-title">Help us improve</h2>
          <p class="contact-text">
            We would be very happy if you could share with us what you like about our app and which features you find
            most useful. Your feedback helps us understand what works well and what could be improved. If you have ideas,
            suggestions, or features you would like to see added, we would be glad to hear them.
          </p>
          <a href="https://tally.so/r/w75N4P" class="contact-link" target="_blank" rel="noopener noreferrer">Feedback form</a>
        </section>
      </div>

      <section class="founder-section">
        <div class="founder-content">
          <h2 class="founder-title">Hi, I'm Taras -- founder of Mild 👋</h2>
          <div class="founder-avatar-wrap">
            <img :src="$img('images/foto.svg')" alt="Taras, founder of Mild" class="founder-avatar">
          </div>
          <div class="founder-copy">
            <p class="contact-text">You're one of the rare people who truly care about helping a product grow -- and I really appreciate that ❤</p>
            <p class="contact-text">I'm the founder of Mild, an art director and product designer with 20 years of experience.</p>
            <p class="contact-text">The idea for Mild started five years ago from one simple thought: open the fridge, take a photo of the ingredients, and cook something from them.</p>
            <p class="contact-text">If you'd like to discuss Mild, share ideas, collaborate, or talk about MVP design for yourself or investors, feel free to book a short friendly call with me on Google Meet.</p>
            <a href="https://calendly.com/mitaras/30min" class="contact-link" target="_blank" rel="noopener noreferrer">Book a call</a>
          </div>
        </div>
      </section>
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
