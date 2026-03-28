<template>
  <body class="recipe-page">
    <main class="recipe-shell">
      <div class="recipe-card-wrap">
        <header class="privacy-header">
          <a href="index.html" class="header-back-mobile" style="text-decoration:none;">
            <div class="logo">Mild</div>
          </a>
          <div class="logo-section">
            <a href="index.html" style="text-decoration:none;"><div class="logo">Mild</div></a>
          </div>
          <div class="actions-section">
            <img :src="$img('images/App_Store_Badge.svg')" alt="Download on the App Store" class="app-store-badge" style="cursor:pointer;">
          </div>
        </header>

        <div class="recipe-hero">
          <div class="recipe-image-block">
            <div class="recipe-toolbar">
              <div class="recipe-toolbar-left">
                <a href="recipes.html" style="display:flex;align-items:center;">
                  <img :src="$img('images/Icons/back.svg')" alt="Back" width="32" height="32">
                </a>
              </div>
              <div class="recipe-toolbar-center">
                <div class="toolbar-icon"><img :src="$img('images/meal/whole-wheat bread_1.jpg')" alt="Bread"></div>
                <div class="toolbar-icon"><img :src="$img('images/meal/Olive oil.jpg')" alt="Olive Oil"></div>
                <div class="toolbar-icon"><img :src="$img('images/meal/sea salt flakes (1).jpg')" alt="Salt"></div>
                <div class="toolbar-icon"><img :src="$img('images/meal/Lemon juice_2.jpg')" alt="Lemon"></div>
              </div>
              <div class="recipe-toolbar-right">
                <img :src="$img('images/Icons/save.svg')" alt="Save" width="32" height="32">
              </div>
            </div>
            <div class="recipe-img-wrapper">
              <img :src="$img('images/meal/meal.png')" alt="Wholemeal Penne with Pesto and Spinach" class="recipe-img">
            </div>
          </div>

          <div class="recipe-meta">400 kcal  •  Vegetarian  •  Easy</div>
          <h1 class="recipe-title">Wholemeal Penne with<br>Pesto and Spinach</h1>
          <div class="recipe-share-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="15" cy="3" r="2" stroke="black" stroke-width="2"/>
              <circle cx="10" cy="10" r="2" stroke="black" stroke-width="2"/>
              <circle cx="5" cy="17" r="2" stroke="black" stroke-width="2"/>
            </svg>
          </div>
        </div>

        <div class="recipe-body">
          <div class="recipe-card">
            <h2 class="recipe-card-title">Description</h2>
            <p class="recipe-description">A succulent and herb-infused chicken breast poached to perfection with fresh vegetables and herbs. This versatile preparation is ideal for enhancing your salads, enriching soups, or creating delicious sandwiches</p>
          </div>

          <div class="recipe-card">
            <h2 class="recipe-card-title recipe-card-title-centered">Ingredients</h2>
            <div class="ingredients-list">
              <div class="ingredient-row"><span class="ingredient-amount">4.4 oz</span><span class="ingredient-name available">Feta</span></div>
              <div class="ingredient-row"><span class="ingredient-amount">2 medium</span><span class="ingredient-name missing">Bell Pepper</span></div>
              <div class="ingredient-row"><span class="ingredient-amount" style="opacity:0;">-</span><span class="ingredient-name"><span class="ingredient-or">or</span> <span class="available">Pepper</span></span></div>
              <div class="ingredient-row"><span class="ingredient-amount">1 small</span><span class="ingredient-name missing">Red Onion</span></div>
              <div class="ingredient-row"><span class="ingredient-amount" style="opacity:0;">-</span><span class="ingredient-name"><span class="ingredient-or">or</span> <span class="available">Onion</span></span></div>
              <div class="ingredient-row"><span class="ingredient-amount">1 medium</span><span class="ingredient-name missing">Cucumber</span></div>
              <div class="ingredient-row"><span class="ingredient-amount">5 ripe</span><span class="ingredient-name missing">Tomato</span></div>
              <div class="ingredient-row"><span class="ingredient-amount">1 oz</span><span class="ingredient-name missing">Olives</span></div>
              <div class="ingredient-row"><span class="ingredient-amount">1 tsp</span><span class="ingredient-name missing">Dried Oregano</span></div>
            </div>
            <div class="optional-section">
              <h2 class="recipe-card-title recipe-card-title-centered">Optional</h2>
              <div class="ingredients-list">
                <div class="ingredient-row"><span class="ingredient-amount">3-4 tbsp</span><span class="ingredient-name available">Olive Oil</span></div>
                <div class="ingredient-row"><span class="ingredient-amount">3-4 tbsp</span><span class="ingredient-name available">Red Wine Vinegar</span></div>
              </div>
            </div>
            <div class="servings-control">
              <button class="servings-btn"><svg viewBox="0 0 20 20" fill="none"><path d="M4 10H16" stroke="black" stroke-width="2" stroke-linecap="round"/></svg></button>
              <span class="servings-count">1</span>
              <button class="servings-btn"><svg viewBox="0 0 20 20" fill="none"><path d="M10 4V16M4 10H16" stroke="black" stroke-width="2" stroke-linecap="round"/></svg></button>
            </div>
          </div>

          <div class="recipe-card">
            <h2 class="recipe-card-title" style="margin-bottom:28px;">Tools</h2>
            <div class="tools-list">
              <span class="tool-tag">Saucepan</span>
              <span class="tool-tag">Strainer</span>
            </div>
          </div>

          <div class="recipe-card">
            <h2 class="recipe-card-title recipe-card-title-centered">Health benefits</h2>
            <div class="nutrition-list">
              <div class="nutrition-row"><span class="nutrition-label">Calories</span><span class="nutrition-value">222 Cal</span></div>
              <div class="nutrition-row"><span class="nutrition-label">Protein</span><span class="nutrition-value">5.5 grm</span></div>
              <div class="nutrition-row"><span class="nutrition-label">Carbohydrates</span><span class="nutrition-value">9 grm</span></div>
              <div class="nutrition-row"><span class="nutrition-label">Fat</span><span class="nutrition-value">15 grm</span></div>
            </div>
            <button class="see-all-btn">See all</button>
          </div>

          <div class="recipe-card" style="margin-bottom: 80px;">
            <h2 class="recipe-card-title" style="margin-bottom:28px;">Allergens</h2>
            <div class="allergens-content">
              <div class="allergen-icon">7</div>
              <span class="allergen-name">Milk</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <div class="footer-container">
        <a href="index.html" class="footer-brand">Mild</a>
        <div class="footer-right">
          <a href="recipes.html" class="footer-link">Recipes</a>
          <a href="privacy.html" class="footer-link">Privacy</a>
          <a href="collaboration.html" class="footer-link">Collaboration</a>
          <a href="contact.html" class="footer-link footer-link-contact">Get in touch</a>
        </div>
      </div>
    </footer>

    <button class="cook-button">
      <span class="cook-button-text">Let's cook</span>
      <div class="cook-button-time">
        <span>45min</span>
        <img :src="$img('images/Icons/timer.svg')" alt="Timer" width="20" height="20">
      </div>
    </button>

    <button class="scroll-to-top" :class="{ visible: scrollVisible }" @click="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Scroll to top">
      <svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"></polyline></svg>
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
