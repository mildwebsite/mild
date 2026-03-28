<template>
  <div class="fav-page">

    <!-- Header -->
    <div class="fav-header">
      <h1 class="fav-title">My<br>favourites</h1>

      <!-- Sort button -->
      <div class="fav-sort-btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="3" r="2" fill="black"/>
          <circle cx="9" cy="10" r="2" fill="black"/>
          <circle cx="2" cy="17" r="2" fill="black"/>
        </svg>
      </div>
    </div>

    <!-- Recipe cards -->
    <div class="fav-list">
      <div v-for="(recipe, i) in recipes" :key="i" class="fav-card">
        <div class="fav-card-top">
          <div class="fav-card-time">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8.5" stroke="#A1A09F" stroke-width="1.5"/>
            </svg>
            <span>{{ recipe.time }}</span>
          </div>
          <div class="fav-card-heat">
            <img :src="$img('images/Icons/heat.svg')" alt="Heat" width="20" height="20">
          </div>
          <div style="width:140px;"></div>
        </div>
        <div class="fav-card-body">
          <img :src="recipe.img" :alt="recipe.name" class="fav-card-img">
          <div class="fav-card-info">
            <span class="fav-card-meta">{{ recipe.meta }}</span>
            <span class="fav-card-name" v-html="recipe.name"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom navigation -->
    <nav class="bottom-nav">
      <div class="bottom-nav-inner">
        <a href="home.html" class="bottom-nav-item">
          <img :src="$img('images/Icons/home.svg')" alt="Home" width="24" height="24">
        </a>
        <a href="favorites.html" class="bottom-nav-item active">
          <img :src="$img('images/Icons/save.svg')" alt="Saved" width="24" height="24">
        </a>
      </div>
      <div class="bottom-nav-safe"></div>
    </nav>

  </div>
</template>

<script setup>
const recipes = [
  {
    time: '26 min',
    meta: '400 kcal  •  Vegetarian  •  Easy',
    name: 'Wholemeal Penne with Pesto<br/>and Spinach',
    img: 'https://placehold.co/237x235',
  },
  {
    time: '26 min',
    meta: '400 kcal  •  Vegetarian  •  Easy',
    name: 'Wholemeal Penne with Pesto<br/>and Spinach',
    img: 'https://placehold.co/237x235',
  },
]
</script>
