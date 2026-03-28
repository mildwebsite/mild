<template>
  <div class="home-page">

    <!-- Hey there -->
    <div class="home-greeting">Hey there</div>

    <!-- Avatar -->
    <div class="home-avatar-wrap">
      <img class="home-avatar" src="https://placehold.co/50x50" alt="Avatar">
    </div>

    <!-- Name -->
    <div class="home-name">Oliver Thompson</div>

    <!-- Card -->
    <div class="home-card">
      <p class="home-card-title">Few ingredients? AI finds <br>recipes. Snap, speak, or type.</p>
      <div class="home-card-img-wrap">
        <img src="https://placehold.co/264x238" alt="Recipe" class="home-card-img">
      </div>
      <span class="home-card-meta">260 kcal • Vegetarian • Easy</span>
    </div>

    <!-- Button -->
    <div class="home-btn-wrap">
      <button class="home-btn">Lets Start</button>
    </div>

    <!-- Bottom navigation -->
    <nav class="bottom-nav">
      <div class="bottom-nav-inner">
        <a href="home.html" class="bottom-nav-item active">
          <img :src="$img('images/Icons/home.svg')" alt="Home" width="24" height="24">
        </a>
        <a href="#" class="bottom-nav-item">
          <img :src="$img('images/Icons/save.svg')" alt="Saved" width="24" height="24">
        </a>
      </div>
      <div class="bottom-nav-safe"></div>
    </nav>

  </div>
</template>

<script setup>
</script>
