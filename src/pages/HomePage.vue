<template>
  <div class="home-page">

    <!-- Try Pro -->
    <div class="home-try-pro-wrap">
      <button class="home-try-pro-btn">Try Pro</button>
    </div>

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
      <button class="home-btn">Find Recipe</button>
    </div>

    <!-- Latest Request -->
    <div class="home-history">
      <div class="home-history-header">Latest request</div>

      <div class="home-history-tabs">
        <div class="home-tab-item" :class="{ 'home-tab-item--active': historyTab === 'input' }" @click="historyTab = 'input'">Input</div>
        <div class="home-tab-item" :class="{ 'home-tab-item--active': historyTab === 'viewed' }" @click="historyTab = 'viewed'">Viewed</div>
        <div class="home-tab-item" :class="{ 'home-tab-item--active': historyTab === 'cooked' }" @click="historyTab = 'cooked'">Cooked</div>
      </div>

      <!-- Input tab -->
      <div v-if="historyTab === 'input'" class="home-history-cards">
        <div class="home-history-card">
          <div class="home-history-card-time">Yesterday at 1pm</div>
          <div class="home-history-tags-row">
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Chicken.jpg')" class="home-ing-pill-img" alt="Chicken"><span>Chicken</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Potatoes.jpg')" class="home-ing-pill-img" alt="Potatoes"><span>Potatoes</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Onions.jpg')" class="home-ing-pill-img" alt="Onions"><span>Onions</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Garlic.jpg')" class="home-ing-pill-img" alt="Garlic"><span>Garlic</span></div>
          </div>
        </div>
        <div class="home-history-card">
          <div class="home-history-card-time">Yesterday at 1pm</div>
          <div class="home-history-tags-row">
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Beef.jpg')" class="home-ing-pill-img" alt="Beef"><span>Beef</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Tomatoes.jpg')" class="home-ing-pill-img" alt="Tomatoes"><span>Tomatoes</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Bell Peppers.jpg')" class="home-ing-pill-img" alt="Bell Peppers"><span>Bell Peppers</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Onions.jpg')" class="home-ing-pill-img" alt="Onions"><span>Onions</span></div>
          </div>
          <div class="home-history-tags-row">
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Salmon.jpg')" class="home-ing-pill-img" alt="Salmon"><span>Salmon</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Garlic.jpg')" class="home-ing-pill-img" alt="Garlic"><span>Garlic</span></div>
          </div>
        </div>
        <div class="home-history-card">
          <div class="home-history-card-time">Yesterday at 1pm</div>
          <div class="home-history-tags-row">
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Chicken.jpg')" class="home-ing-pill-img" alt="Chicken"><span>Chicken</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Peas.jpg')" class="home-ing-pill-img" alt="Peas"><span>Peas</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Corn.jpg')" class="home-ing-pill-img" alt="Corn"><span>Corn</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Onions.jpg')" class="home-ing-pill-img" alt="Onions"><span>Onions</span></div>
          </div>
          <div class="home-history-tags-row">
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Potatoes.jpg')" class="home-ing-pill-img" alt="Potatoes"><span>Potatoes</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Garlic.jpg')" class="home-ing-pill-img" alt="Garlic"><span>Garlic</span></div>
          </div>
        </div>
        <div class="home-history-card">
          <div class="home-history-card-time">Yesterday at 1pm</div>
          <div class="home-history-tags-row">
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Shrimp.jpg')" class="home-ing-pill-img" alt="Shrimp"><span>Shrimp</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Salmon.jpg')" class="home-ing-pill-img" alt="Salmon"><span>Salmon</span></div>
            <div class="home-ing-pill"><img :src="$img('images/ingridients/Garlic.jpg')" class="home-ing-pill-img" alt="Garlic"><span>Garlic</span></div>
          </div>
        </div>
      </div>

      <!-- Viewed / Cooked tabs -->
      <div v-else class="home-history-cards">
        <div class="home-recipe-card" v-for="recipe in recipeCards" :key="recipe.title">
          <div class="home-recipe-card-top">
            <div class="home-recipe-card-meta">
              <div class="home-recipe-card-time-wrap">
                <img :src="$img('images/Icons/time.svg')" width="20" height="20" alt="Time">
                <span class="home-recipe-duration">20min</span>
              </div>
              <span class="home-recipe-date">Yesterday at 1pm</span>
            </div>
            <img :src="$img('images/Icons/remove.svg')" width="20" height="20" alt="Remove" class="home-recipe-remove">
          </div>
          <div class="home-recipe-card-body">
            <img src="https://placehold.co/80x80" class="home-recipe-img" alt="Recipe">
            <span class="home-recipe-title">{{ recipe.title }}</span>
          </div>
        </div>
      </div>
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
import { ref } from 'vue'

const historyTab = ref('input')

const recipeCards = [
  { title: 'Zesty Carrot Salad with Lemon Vinaigrette' },
  { title: 'Cherry Kale Smoothie' },
  { title: 'Omelet Caprese' },
  { title: 'Spinach and Egg Breakfast Taco' },
]
</script>
