<template>
  <div class="auth-page">

    <!-- Background: blurred home screen -->
    <iframe src="home.html" class="auth-bg-frame" tabindex="-1" aria-hidden="true"></iframe>
    <div class="auth-bg-overlay"></div>

    <!-- Card -->
    <div class="auth-card">

      <div class="auth-card-top">
        <!-- Logo icon only (no text) -->
        <img :src="$img('images/svg/logo.svg')" alt="Mild" class="auth-logo-icon">

        <!-- Description -->
        <p class="auth-desc">Press continue with and start using<br>all features of app without limitations</p>
      </div>

      <div class="auth-buttons">
        <!-- Continue with Gmail -->
        <button class="auth-btn auth-btn--gmail" @click="onGmail">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="auth-icon-bw">
            <path d="M18.6 10.2c0-.6-.1-1.3-.2-1.9H10v3.6h4.8c-.2 1.1-.9 2-1.8 2.6v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.5z" fill="#4285F4"/>
            <path d="M10 19c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.5-1.9.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H1.9v2.3C3.4 17.1 6.5 19 10 19z" fill="#34A853"/>
            <path d="M4.9 11.7A5.4 5.4 0 0 1 4.9 8.3V6H1.9A9 9 0 0 0 1 10c0 1.4.3 2.8.9 4l3-2.3z" fill="#FBBC05"/>
            <path d="M10 4.4c1.3 0 2.5.5 3.4 1.3L16 3.1C14.5 1.7 12.4 1 10 1 6.5 1 3.4 2.9 1.9 5.8l3 2.3C5.6 6 7.6 4.4 10 4.4z" fill="#EA4335"/>
          </svg>
          <span>Continue with Gmail</span>
        </button>

        <!-- Continue with Apple -->
        <button class="auth-btn auth-btn--apple" @click="onApple">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14.5 10.5c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.5-1.7-3-1.7-1.3-.1-2.5.7-3.1.7-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.7 1.1 0 1.9-1.1 2.6-2.1.8-1.2 1.1-2.3 1.1-2.4-.1-.1-2.2-.9-2.2-3.4z" fill="white"/>
            <path d="M12.5 4.3c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.6-1 1.6-.9 2.5.9.1 1.9-.4 2.5-1.1z" fill="white"/>
          </svg>
          <span>Continue with Apple</span>
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
function onGmail() {
  // OAuth Google flow
}

function onApple() {
  // OAuth Apple flow
}
</script>
