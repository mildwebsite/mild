<template>
  <body class="privacy-page">
    <main class="privacy-shell">
      <div class="privacy-card">
        <header class="header">
          <div class="header-container">
            <div class="logo-section">
              <a href="index.html" style="text-decoration:none;"><div class="logo">Mild</div></a>
            </div>
            <div class="icons-section">
              <div class="icons-wrapper">
                <button class="icon-button" aria-label="iOS">
                  <img :src="$img('images/svg/ios.svg')" alt="iOS" class="icon-image">
                </button>
                <button class="icon-button" aria-label="Android">
                  <img :src="$img('images/svg/android.svg')" alt="Android" class="icon-image">
                  <span class="android-tooltip">🤖 Soon</span>
                </button>
              </div>
            </div>
            <div class="actions-section">
              <img :src="$img('images/svg/App_Store_Badge.svg')" alt="Download on the App Store" class="app-store-badge" style="cursor: pointer;">
            </div>
          </div>
        </header>

        <section class="privacy-hero">
          <h1 class="privacy-title">Privacy Policy</h1>
          <p class="privacy-updated">Last updated: 2026</p>
        </section>

        <div class="privacy-content">
          <p class="privacy-intro">
            Mild ("we", "our", or "the app") respects your privacy and is committed to protecting your information.
            This Privacy Policy explains how information is collected, used, and protected when you use the Mild
            mobile application, website, and related online services provided by us.
          </p>

          <section class="privacy-section">
            <h2 class="privacy-section-title">Information We Collect</h2>
            <p class="privacy-text">Mild may collect limited information required to provide the functionality of the application, including:</p>
            <ul class="privacy-list">
              <li>Ingredients entered by text, voice, or photo</li>
              <li>Usage data related to how the application is used</li>
              <li>Device information such as device type, operating system, and app version</li>
              <li>Basic analytics data used to improve the application</li>
            </ul>
            <p class="privacy-text">Mild does not collect sensitive personal information such as contacts, personal files, or messages.</p>
          </section>

          <section class="privacy-section">
            <h2 class="privacy-section-title">AI Processing</h2>
            <p class="privacy-text">
              Ingredient recognition from photos and voice input may be processed using artificial intelligence
              services provided by OpenAI. Photos and voice inputs are used only to identify ingredients and
              generate recipe results within the application. These inputs are processed to analyze items and
              convert them into searchable ingredient data used to provide relevant recipe suggestions.
            </p>
          </section>

          <section class="privacy-section">
            <h2 class="privacy-section-title">How We Use Information</h2>
            <p class="privacy-text">Information collected may be used to:</p>
            <ul class="privacy-list">
              <li>Provide recipe search and ingredient recognition features</li>
              <li>Generate recipe suggestions based on ingredients</li>
              <li>Improve application performance and user experience</li>
              <li>Analyze usage patterns to enhance the functionality of the app</li>
              <li>Maintain security and fix technical issues</li>
            </ul>
          </section>

          <section class="privacy-section">
            <h2 class="privacy-section-title">Data Retention</h2>
            <p class="privacy-text">
              Information processed by the app is stored only as long as needed to provide and improve the service.
              We do not create or store personal user profiles and do not retain personal data long term. Technical
              or usage information is used only to operate and improve the service and may be removed when no longer required.
            </p>
          </section>

          <section class="privacy-section">
            <h2 class="privacy-section-title">Data Security</h2>
            <p class="privacy-text">
              We take reasonable technical and organizational measures to protect information from unauthorized access,
              misuse, alteration, or disclosure. These measures include secure infrastructure, controlled access to data,
              and industry-standard security practices designed to help safeguard the information processed by the application.
            </p>
          </section>

          <section class="privacy-section">
            <h2 class="privacy-section-title">Third-Party Services</h2>
            <p class="privacy-text">
              The application may use third-party services for analytics, cloud infrastructure, or AI processing.
              These services may process limited technical information required to operate and improve the functionality
              of the app. Any information handled by third-party providers is processed according to their own privacy
              policies and security practices.
            </p>
          </section>

          <section class="privacy-section">
            <h2 class="privacy-section-title">User Rights</h2>
            <p class="privacy-text">
              Users may request information about the data processed by the application or request deletion of their
              data by contacting us. We will review and respond to such requests in accordance with applicable data
              protection regulations and within a reasonable period of time as required by law.
            </p>
          </section>

          <section class="privacy-section">
            <h2 class="privacy-section-title">Children's Privacy</h2>
            <p class="privacy-text">
              Mild is not intended for children under the age of 13. We do not knowingly collect personal information
              from children. If we become aware that such information has been submitted through the application, we
              will take immediate steps to remove it from our records and systems as quickly as possible.
            </p>
          </section>

          <section class="privacy-section">
            <h2 class="privacy-section-title">Website Cookies</h2>
            <p class="privacy-text">
              Our website may use basic cookies to improve performance and understand how visitors use the site.
              These cookies help analyze traffic, improve functionality, remember basic preferences, and ensure the
              website operates properly, securely, and efficiently for all users and visitors.
            </p>
          </section>

          <section class="privacy-section">
            <h2 class="privacy-section-title">Changes to This Privacy Policy</h2>
            <p class="privacy-text">
              This Privacy Policy may be updated from time to time. Any updates will be posted on this page with the
              revised date. We encourage users to review this page periodically to stay informed about how information
              is protected and how the application handles user data.
            </p>
          </section>

          <section class="privacy-section">
            <h2 class="privacy-section-title">Contact</h2>
            <p class="privacy-text">If you have questions regarding this Privacy Policy, you may contact us:</p>
            <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#116;&#97;&#115;&#116;&#101;&#64;&#109;&#105;&#108;&#100;&#99;&#111;&#111;&#107;&#46;&#97;&#112;&#112;" class="privacy-email">Say hello</a>
          </section>
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
