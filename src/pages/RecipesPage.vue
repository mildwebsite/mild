<template>
  <main class="recipes-shell">
    <!-- Header -->
    <header class="header" style="width:100%; padding-top:32px; box-sizing:border-box;">
      <div class="header-container">
        <div class="logo-section">
          <a href="index.html" style="text-decoration:none;"><div class="logo">Mild</div></a>
        </div>
        <div class="actions-section">
          <img src="/images/App_Store_Badge.svg" alt="Download on the App Store" class="app-store-badge" style="cursor:pointer;">
        </div>
      </div>
    </header>

    <!-- Mobile toolbar -->
    <div class="recipes-toolbar recipes-toolbar-mobile">
      <div class="recipes-toolbar-left">
        <a href="index.html" style="display:flex;align-items:center;">
          <img src="/images/Icons/back.svg" alt="Back" width="32" height="32">
        </a>
      </div>
      <div class="recipes-toolbar-right">
        <a href="#" style="display:flex;align-items:center;" aria-label="Filter" @click.prevent="filterModalOpen = true">
          <img src="/images/Icons/filter.svg" alt="Filter" width="32" height="32">
        </a>
      </div>
    </div>

    <!-- Hero -->
    <div class="recipes-hero-block">
      <div class="recipes-hero-card">
        <div class="recipes-hero-left">
          <div class="recipes-hero-img-wrap">
            <img src="/images/meal/meal.png" alt="Dish" class="recipes-hero-img">
          </div>
          <span class="recipes-hero-meta">30 min  •  290 kcal  •  Easy</span>
          <span class="recipes-hero-name">Wholemeal Penne with Pesto and Spinach</span>
        </div>
        <div class="recipes-hero-right">
          <h2 class="recipes-hero-title">Cook from what<br class="title-br-1440"> you already have!</h2>
          <div class="recipes-hero-content">
            <div class="recipes-hero-tags">
              <div class="ing-tag"><img src="/images/ingridients/Chicken.jpg" alt=""><span>Chicken</span></div>
              <div class="ing-tag"><img src="/images/ingridients/Beef.jpg" alt=""><span>Beef</span></div>
              <div class="ing-tag"><img src="/images/ingridients/Pork.jpg" alt=""><span>Pork</span></div>
              <div class="ing-tag"><img src="/images/ingridients/Other.jpg" alt=""><span>Fish</span></div>
            </div>
            <p class="recipes-hero-text">Take a photo of your ingredients, add them by voice, or type them in. Mild finds matching recipes from what you already have, shows missing ingredients, and guides you step by step with built-in timers. Use smart filters for time, calories, or cuisine, save favorite recipes, and quickly access recent ingredients — all in one place.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section tabs -->
    <div class="recipes-section-header" style="margin-top:120px;">
      <div class="recipes-section-tabs">
        <h2 class="recipes-section-title recipes-tab active" style="opacity:1;">Find by Ingredients</h2>
        <a href="browse.html" style="text-decoration:none;">
          <h2 class="recipes-section-title recipes-tab" style="opacity:0.4;">Browse Recipes</h2>
        </a>
      </div>
      <a href="#" class="recipes-section-link" @click.prevent="showAllGroups = !showAllGroups">
        {{ showAllGroups ? 'Hide' : 'Show all' }}
      </a>
    </div>

    <!-- Selection toolbar -->
    <div class="ing-toolbar">
      <div class="ing-toolbar-left" :style="{ visibility: selected.size > 0 ? 'visible' : 'hidden' }">
        <span class="ing-count">{{ selected.size }}</span>
        <span class="ing-count-label"> Selected</span>
      </div>
      <a
        href="#"
        class="ing-clear"
        :style="{ visibility: selected.size > 0 ? 'visible' : 'hidden' }"
        aria-label="Clear selection"
        @click.prevent="clearAll"
      >
        <img src="/images/Icons/clear.svg" alt="Clear" width="20" height="20">
      </a>
    </div>

    <!-- Ingredients filter -->
    <div ref="filterCardRef" :class="['ingredients-filter', filterVisible ? '' : 'collapsed']">
      <div class="ingredients-filter-card">
        <template v-for="group in visibleGroups" :key="group.title">
          <div :class="['ing-group', group.wide ? 'ing-group-wide' : '']">
            <div class="ing-group-title">{{ group.title }}</div>
            <div class="ing-tags">
              <div
                v-for="item in group.items"
                :key="item.name"
                :class="['ing-tag', selected.has(item.name) ? 'selected' : '']"
                @click="toggleIngredient(item)"
              >
                <img :src="'/' + item.img" :alt="item.name">
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </template>

        <!-- Hidden groups -->
        <div :class="['ing-hidden-groups', showAllGroups ? 'visible' : '']">
          <template v-for="group in hiddenGroups" :key="group.title">
            <div class="ing-group">
              <div class="ing-group-title">{{ group.title }}</div>
              <div class="ing-tags">
                <div
                  v-for="item in group.items"
                  :key="group.title + item.name"
                  :class="['ing-tag', selected.has(item.name) ? 'selected' : '']"
                  @click="toggleIngredient(item)"
                >
                  <img :src="'/' + item.img" :alt="item.name">
                  <span>{{ item.name }}</span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- Floating selected pill -->
    <div class="ing-selected-pill" v-show="selected.size > 0">
      <span class="ing-selected-text">{{ selected.size }} Selected</span>
      <a href="#" class="ing-selected-clear" aria-label="Clear" @click.prevent="clearAll">
        <img src="/images/Icons/clear.svg" alt="Clear" width="29" height="26">
      </a>
    </div>

    <!-- Title + filter button -->
    <div class="recipes-header">
      <h1 class="recipes-title">Found 305 receipts</h1>
      <a href="#" class="recipes-filter-btn" aria-label="Filter" @click.prevent="filterModalOpen = true">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 5h20"/><path d="M6 12h12"/><path d="M9 19h6"/>
        </svg>
      </a>
    </div>

    <!-- Recipe grid -->
    <div class="recipes-grid-wrap">
      <!-- Regular rows -->
      <div v-for="(row, ri) in mainRows" :key="ri" class="recipes-row">
        <RecipeCard v-for="recipe in row" :key="recipe.id" :recipe="recipe" />
      </div>

      <!-- Featured row -->
      <div class="recipes-row-featured">
        <RecipeCard :recipe="featuredRecipe" :big="true" />
        <div class="recipes-row-stack">
          <RecipeCard v-for="r in stackRecipes" :key="r.id" :recipe="r" :stack="true" />
        </div>
        <!-- Clone for ≤1280px -->
        <div class="rcard-big-clone">
          <RecipeCard :recipe="featuredRecipe" :big="true" />
        </div>
      </div>

      <!-- Last row -->
      <div class="recipes-row">
        <RecipeCard v-for="recipe in lastRow" :key="recipe.id" :recipe="recipe" />
      </div>
    </div>

    <!-- Sticky bar -->
    <div :class="['ing-sticky-bar', stickyVisible ? 'visible' : '']">
      <div class="ing-sticky-pill">
        <div class="ing-sticky-tags">
          <div
            v-for="name in selectedArray"
            :key="name"
            class="ing-sticky-tag"
            @click="removeIngredient(name)"
          >
            <img :src="'/' + getIngredientImg(name)" :alt="name" width="24" height="24">
            <span>{{ name }}</span>
          </div>
        </div>
        <a href="#" class="ing-sticky-viewall" @click.prevent="scrollToFilter">
          {{ selected.size > 0 ? 'View all' : 'View all Ingredients' }}
        </a>
      </div>
    </div>
  </main>

  <!-- Footer -->
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

  <!-- Scroll to top -->
  <button
    :class="['scroll-to-top', scrollTopVisible ? 'visible' : '']"
    aria-label="Scroll to top"
    @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
  >
    <svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>
  </button>

  <!-- Filter modal -->
  <FilterModal v-model:open="filterModalOpen" />
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import RecipeCard from '../components/RecipeCard.vue'
import FilterModal from '../components/FilterModal.vue'
import { visibleGroups, hiddenGroups } from '../data/ingredientGroups.js'
import { recipeRows, featuredRecipe, stackRecipes } from '../data/recipesList.js'

// Last row is the 3rd item in recipeRows
const lastRow = recipeRows[2]
const mainRows = recipeRows.slice(0, 2)

// Ingredient selection
const selected = reactive(new Set())
const selectedArray = computed(() => [...selected])

function toggleIngredient(item) {
  if (selected.has(item.name)) selected.delete(item.name)
  else selected.add(item.name)
}
function removeIngredient(name) { selected.delete(name) }
function clearAll() { selected.clear() }

// Build a name→img map for the sticky bar
const imgMap = {}
;[...visibleGroups, ...hiddenGroups].forEach(g =>
  g.items.forEach(i => { imgMap[i.name] = i.img })
)
function getIngredientImg(name) { return imgMap[name] || 'images/ingridients/Other.jpg' }

// Filter card visibility
const filterVisible = ref(true)
const showAllGroups = ref(false)
const filterCardRef = ref(null)

// Sticky bar (shows when filter card is out of view)
const stickyVisible = ref(false)
let observer = null

onMounted(() => {
  if (filterCardRef.value) {
    observer = new IntersectionObserver(
      ([entry]) => { stickyVisible.value = !entry.isIntersecting },
      { threshold: 0 }
    )
    observer.observe(filterCardRef.value)
  }
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
})

// Scroll to top button
const scrollTopVisible = ref(false)
function onScroll() {
  scrollTopVisible.value = window.scrollY > 300
}

// Scroll back to filter
function scrollToFilter() {
  filterVisible.value = true
  filterCardRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Filter modal
const filterModalOpen = ref(false)

// Expose window for template
const window = globalThis
</script>
