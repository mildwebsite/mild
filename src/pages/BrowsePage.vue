<template>
  <main class="recipes-shell">
    <!-- Header -->
    <header class="header" style="width:100%; padding-top:32px; box-sizing:border-box;">
      <div class="header-container">
        <a href="index.html" class="header-back-mobile" style="text-decoration:none;">
          <div class="logo">Mild</div>
        </a>
        <div class="logo-section">
          <a href="index.html" style="text-decoration:none;"><div class="logo">Mild</div></a>
        </div>
        <div class="actions-section">
          <img :src="$img('images/svg/App_Store_Badge.svg')" alt="Download on the App Store" class="app-store-badge" style="cursor:pointer;">
          <div class="header-icons-mobile">
            <a href="#" style="display:flex;align-items:center;" aria-label="Favorites">
              <img :src="$img('images/Icons/save.svg')" alt="Favorites" width="20" height="20">
            </a>
            <a href="#" style="display:flex;align-items:center;color:black;text-decoration:none;" aria-label="Filter" @click.prevent="filterModalOpen = true">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h20"/><path d="M6 12h12"/><path d="M9 19h6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Mobile toolbar -->
    <div class="recipes-toolbar recipes-toolbar-mobile">
      <div class="recipes-toolbar-left">
        <a href="index.html" style="display:flex;align-items:center;">
          <img :src="$img('images/Icons/back.svg')" alt="Back" width="32" height="32">
        </a>
      </div>
      <div class="recipes-toolbar-right">
        <a href="#" style="display:flex;align-items:center;" aria-label="Favorites">
          <img :src="$img('images/Icons/save.svg')" alt="Favorites" width="24" height="24">
        </a>
        <a href="#" style="display:flex;align-items:center;color:black;" aria-label="Filter" @click.prevent="filterModalOpen = true">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h20"/><path d="M6 12h12"/><path d="M9 19h6"/></svg>
        </a>
      </div>
    </div>

    <!-- Hero -->
    <div class="recipes-hero-block">
      <div class="recipes-hero-card">
        <div class="recipes-hero-left">
          <div class="recipes-hero-img-wrap">
            <img :src="$img('images/meal/meal.png')" alt="Dish" class="recipes-hero-img">
          </div>
          <span class="recipes-hero-meta">30 min  •  290 kcal  •  Easy</span>
          <span class="recipes-hero-name">Wholemeal Penne with Pesto and Spinach</span>
        </div>
        <div class="recipes-hero-right">
          <h2 class="recipes-hero-title">Cook from what<br class="title-br-1440"> you already have!</h2>
          <div class="recipes-hero-content">
            <div class="recipes-hero-tags">
              <div class="ing-tag"><img :src="$img('images/ingridients/Chicken.jpg')" alt=""><span>Chicken</span></div>
              <div class="ing-tag"><img :src="$img('images/ingridients/Beef.jpg')" alt=""><span>Beef</span></div>
              <div class="ing-tag"><img :src="$img('images/ingridients/Pork.jpg')" alt=""><span>Pork</span></div>
              <div class="ing-tag"><img :src="$img('images/ingridients/Other.jpg')" alt=""><span>Fish</span></div>
            </div>
            <p class="recipes-hero-text">Take a photo of your ingredients, add them by voice, or type them in. Mild finds matching recipes from what you already have, shows missing ingredients, and guides you step by step with built-in timers. Use smart filters for time, calories, or cuisine, save favorite recipes, and quickly access recent ingredients — all in one place.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section tabs -->
    <div class="recipes-section-header" style="margin-top:120px;">
      <div class="recipes-section-tabs">
        <a href="recipes.html" style="text-decoration:none;">
          <h2 class="recipes-section-title recipes-tab" style="opacity:0.4;">Find by Ingredients</h2>
        </a>
        <h2 class="recipes-section-title recipes-tab active" style="opacity:1;">Browse Recipes</h2>
      </div>
    </div>

    <!-- Browse filter -->
    <div ref="browseFilterRef" class="browse-filter">
      <div class="browse-filter-inner">
        <div class="browse-filter-left">
          <span class="browse-filter-left-label">Course</span>
          <div class="browse-meal-tags">
            <div
              v-for="meal in mealTypes"
              :key="meal.type"
              :class="['browse-meal-tag', activeMealTypes.has(meal.type) ? 'active' : '']"
              @click="toggleMealType(meal.type)"
            >
              <img :src="$img(meal.img)" :alt="meal.label" width="24" height="24">
              <span>{{ meal.label }}</span>
            </div>
          </div>
        </div>
        <div class="browse-filter-right">
          <div class="browse-calories-left">
            <span class="browse-calories-label">Up to calories</span>
            <div class="browse-calories-tags">
              <div
                v-for="cal in calOptions"
                :key="cal"
                :class="['browse-cal-tag', activeCalMax === cal ? 'active' : '']"
                @click="toggleCalMax(cal)"
              >{{ cal }} Kcal</div>
            </div>
          </div>
          <a href="#" class="browse-icon-btn" aria-label="Favorites" style="margin-left:10px;">
            <img :src="$img('images/Icons/save.svg')" alt="Favorites" width="24" height="24">
            <span class="browse-tooltip">Show saved recipes</span>
          </a>
          <a href="#" class="browse-icon-btn" aria-label="Filter" @click.prevent="filterModalOpen = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h20"/><path d="M6 12h12"/><path d="M9 19h6"/></svg>
            <span class="browse-tooltip">Sort by time, allergies, diet &amp; cuisine</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Recipe grid -->
    <div class="recipes-grid-wrap">
      <template v-for="(row, ri) in rows" :key="ri">
        <div v-if="row.type === 'row'" class="recipes-row">
          <RecipeCard
            v-for="card in row.cards"
            :key="card._id"
            :recipe="toRecipeFormat(card)"
          />
        </div>
        <div
          v-else-if="row.type === 'featured'"
          :class="['recipes-row-featured', row.side === 'right' ? 'reversed' : '']"
        >
          <RecipeCard :recipe="toRecipeFormat(row.bigCard)" :big="true" />
          <div class="recipes-row-stack">
            <RecipeCard
              v-for="r in row.stackCards"
              :key="r._id"
              :recipe="toRecipeFormat(r)"
              :stack="true"
            />
          </div>
          <div class="rcard-big-clone">
            <RecipeCard :recipe="toRecipeFormat(row.bigCard)" :big="true" />
          </div>
        </div>
      </template>

      <!-- Lazy load sentinel -->
      <div v-show="!allLoaded" ref="lazyLoaderRef" class="recipes-lazy-loader">
        <div class="recipes-lazy-spinner"></div>
      </div>
    </div>

    <div style="height: 140px;"></div>

    <!-- Sticky browse bar -->
    <div :class="['browse-sticky-bar', stickyVisible ? 'visible' : '']">
      <div class="browse-sticky-pill">
        <div class="browse-sticky-tags">
          <div
            v-for="meal in mealTypes"
            :key="meal.type"
            :class="['browse-sticky-tag', activeMealTypes.has(meal.type) ? 'active' : '']"
            @click="toggleMealType(meal.type)"
          >
            <img :src="$img(meal.img)" :alt="meal.label" width="20" height="20">
            <span>{{ meal.label }}</span>
          </div>
        </div>
        <div class="browse-sticky-divider"></div>
        <div class="browse-sticky-cals">
          <div
            v-for="cal in calOptions"
            :key="cal"
            :class="['browse-sticky-cal', activeCalMax === cal ? 'active' : '']"
            @click="toggleCalMax(cal)"
          >{{ cal }}</div>
        </div>
        <a href="#" class="browse-sticky-filter-btn" aria-label="Filter" @click.prevent="filterModalOpen = true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 5h20"/><path d="M6 12h12"/><path d="M9 19h6"/></svg>
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
  <FilterModal v-model:open="filterModalOpen" :hide-course="true" :hide-calories="true" />
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import RecipeCard from '../components/RecipeCard.vue'
import FilterModal from '../components/FilterModal.vue'

// ── Filter state ──────────────────────────────────────────────────────────────
const mealTypes = [
  { type: 'salads',   label: 'Salads',   img: 'images/types of meal/salads.jpg' },
  { type: 'main',     label: 'Main',     img: 'images/types of meal/main.jpg' },
  { type: 'soups',    label: 'Soups',    img: 'images/types of meal/soups.jpg' },
  { type: 'side',     label: 'Side',     img: 'images/types of meal/side.jpg' },
  { type: 'sauces',   label: 'Sauces',   img: 'images/types of meal/sauces.jpg' },
  { type: 'snacks',   label: 'Snacks',   img: 'images/types of meal/snacks.jpg' },
  { type: 'desserts', label: 'Desserts', img: 'images/types of meal/desserts.jpg' },
  { type: 'other',    label: 'Other',    img: 'images/types of meal/other.jpg' },
]
const calOptions = [300, 400, 600, 800]

const activeMealTypes = reactive(new Set())
const activeCalMax = ref(null)

function toggleMealType(type) {
  if (activeMealTypes.has(type)) activeMealTypes.delete(type)
  else activeMealTypes.add(type)
  resetAndReload()
}

function toggleCalMax(cal) {
  activeCalMax.value = activeCalMax.value === cal ? null : cal
  resetAndReload()
}

// ── Card data helpers ─────────────────────────────────────────────────────────
const DIFFICULTY_LABELS = ['', 'Easy', 'Easy', 'Medium', 'Difficult', 'Difficult']
const mediaCache = {}

function formatTime(est_total) {
  if (!est_total?.length) return ''
  return (est_total[1] || est_total[0] || 0) + ' min'
}

function buildMeta(recipe) {
  const parts = [recipe.calories + ' kcal']
  if (recipe.tags?.includes('vegetarian')) parts.push('Vegetarian')
  else if (recipe.tags?.includes('vegan')) parts.push('Vegan')
  const diff = DIFFICULTY_LABELS[recipe.difficulty] || ''
  if (diff) parts.push(diff)
  return parts.join('  •  ')
}

function toRecipeFormat(r) {
  return {
    id: r._id,
    time: formatTime(r.est_total),
    meta: buildMeta(r),
    name: r.name,
    img: (r.media?.length && mediaCache[r.media[0]]) ? mediaCache[r.media[0]] : 'images/meal/meal.png',
    imgAlt: r.name,
    hot: r.difficulty >= 3,
    ingredients: [],
    description: r.description || '',
  }
}

// ── API / simulation ──────────────────────────────────────────────────────────
const DEMO_RECIPES = [
  { _id: '1',  name: 'Grilled Chicken Breasts with Pesto and Cherry Tomatoes', calories: 478, difficulty: 3, est_total: [20, 26], type_id: 'main',    media: [], tags: [],              description: 'A succulent and herb-infused chicken breast grilled to perfection with fresh pesto and sweet cherry tomatoes. Perfect for a hearty dinner.' },
  { _id: '2',  name: 'Wholemeal Penne with Pesto and Spinach',                 calories: 400, difficulty: 1, est_total: [25, 30], type_id: 'main',    media: [], tags: ['vegetarian'], description: 'A wholesome pasta dish with fresh basil pesto and tender spinach leaves. Quick, nutritious, and full of flavor.' },
  { _id: '3',  name: 'Tomato Avocado Pepper Salad',                            calories: 150, difficulty: 1, est_total: [10, 15], type_id: 'salads',  media: [], tags: ['vegetarian'], description: 'A vibrant mix of ripe tomatoes, creamy avocado, and crunchy bell peppers, tossed with olive oil and fresh herbs.' },
  { _id: '4',  name: 'Creamy Pumpkin Soup with Croutons',                      calories: 280, difficulty: 2, est_total: [35, 45], type_id: 'soups',   media: [], tags: [],              description: 'Rich and velvety pumpkin soup topped with golden croutons. The ultimate comfort food for chilly evenings.' },
  { _id: '5',  name: 'Roasted Sweet Potato Wedges',                            calories: 190, difficulty: 1, est_total: [15, 18], type_id: 'side',    media: [], tags: ['vegan'],      description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '6',  name: 'Hummus with Veggie Sticks',                              calories: 180, difficulty: 1, est_total: [10, 12], type_id: 'snacks',  media: [], tags: ['vegetarian'], description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '7',  name: 'Berry Oat Crumble with Yogurt',                          calories: 320, difficulty: 2, est_total: [30, 40], type_id: 'desserts',media: [], tags: [],              description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '8',  name: 'Classic Basil Pesto Sauce',                              calories: 120, difficulty: 1, est_total: [8,  10], type_id: 'sauces',  media: [], tags: ['vegan'],      description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '9',  name: 'Pan-Seared Salmon with Asparagus',                       calories: 520, difficulty: 3, est_total: [25, 35], type_id: 'main',    media: [], tags: [],              description: 'Perfectly seared salmon fillet served with tender asparagus spears. A restaurant-quality dish ready in under 35 minutes.' },
  { _id: '10', name: 'Fresh Cucumber Dill Salad',                              calories: 130, difficulty: 1, est_total: [5,  8],  type_id: 'salads',  media: [], tags: ['vegan'],      description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '11', name: 'Beef Stir-Fry with Bell Peppers',                        calories: 610, difficulty: 3, est_total: [40, 50], type_id: 'main',    media: [], tags: [],              description: 'A sizzling stir-fry with tender beef strips and colorful bell peppers in a savory sauce. Fast and satisfying.' },
  { _id: '12', name: 'Roasted Tomato Basil Soup',                              calories: 310, difficulty: 2, est_total: [40, 55], type_id: 'soups',   media: [], tags: ['vegetarian'], description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '13', name: 'Chocolate Avocado Mousse',                               calories: 280, difficulty: 1, est_total: [15, 25], type_id: 'desserts',media: [], tags: [],              description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '14', name: 'Garlic Roasted Broccoli',                                calories: 160, difficulty: 1, est_total: [15, 20], type_id: 'side',    media: [], tags: ['vegan'],      description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '15', name: 'Lemon Herb Roasted Chicken Thighs',                      calories: 480, difficulty: 3, est_total: [35, 40], type_id: 'main',    media: [], tags: [],              description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '16', name: 'Mediterranean Quinoa Bowl',                              calories: 170, difficulty: 1, est_total: [8,  10], type_id: 'salads',  media: [], tags: ['vegetarian'], description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '17', name: 'Bruschetta with Fresh Tomatoes',                         calories: 200, difficulty: 1, est_total: [10, 15], type_id: 'snacks',  media: [], tags: ['vegetarian'], description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '18', name: 'Slow-Cooked Lamb with Rosemary',                         calories: 550, difficulty: 4, est_total: [50, 60], type_id: 'main',    media: [], tags: [],              description: 'Tender slow-cooked lamb infused with rosemary and garlic. Fall-off-the-bone perfection for special occasions.' },
  { _id: '19', name: 'Coconut Lentil Curry Soup',                              calories: 240, difficulty: 1, est_total: [25, 35], type_id: 'soups',   media: [], tags: ['vegan'],      description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
  { _id: '20', name: 'Baked Cinnamon Apple Slices',                            calories: 350, difficulty: 2, est_total: [25, 30], type_id: 'desserts',media: [], tags: [],              description: 'A delicious dish crafted with fresh ingredients and simple techniques. Perfect for any occasion and ready in minutes.' },
]
const PAGE_SIZE = 20

async function fetchRecipes(page) {
  const body = { page, page_size: PAGE_SIZE }
  const typeIds = [...activeMealTypes]
  if (typeIds.length) body.type_ids = typeIds
  if (activeCalMax.value) body.calories_range = [0, activeCalMax.value]
  return simulateApiResponse(body)
}

function simulateApiResponse(body) {
  let filtered = DEMO_RECIPES
  if (body.type_ids?.length) {
    filtered = filtered.filter(r => body.type_ids.includes(r.type_id))
  }
  if (body.calories_range) {
    filtered = filtered.filter(r => r.calories <= body.calories_range[1])
  }
  const total = 2000
  const start = (body.page - 1) * body.page_size
  const pageRecipes = Array.from({ length: body.page_size }, (_, i) => ({
    ...filtered[(start + i) % (filtered.length || 1)],
    _id: 'r_' + (start + i),
  }))
  return {
    recipes: pageRecipes,
    media: [],
    total,
    page: body.page,
    pages: Math.ceil(total / body.page_size),
  }
}

// ── Layout engine ─────────────────────────────────────────────────────────────
/**
 * Layout pattern (repeating cycle of 6 steps):
 *   0: row of 4
 *   1: row of 4
 *   2: featured LEFT  (1 big + 2 stack)
 *   3: row of 4
 *   4: row of 4
 *   5: featured RIGHT (1 big + 2 stack)
 */
const rows = reactive([])
let cardBuffer = []
let blockStep = 0
let currentPage = 0
let totalPages = Infinity
let isLoading = false
const allLoaded = ref(false)

function flushBuffer() {
  while (cardBuffer.length > 0) {
    const step = blockStep % 6

    if (step === 0 || step === 1 || step === 3 || step === 4) {
      if (cardBuffer.length < 4) break
      rows.push({ type: 'row', cards: cardBuffer.splice(0, 4) })
      blockStep++
    } else if (step === 2) {
      if (cardBuffer.length < 5) break
      const cards = cardBuffer.splice(0, 5)
      rows.push({ type: 'featured', side: 'left', bigCard: cards[0], stackCards: [cards[1], cards[2], cards[3], cards[4]] })
      blockStep++
    } else if (step === 5) {
      if (cardBuffer.length < 5) break
      const cards = cardBuffer.splice(0, 5)
      rows.push({ type: 'featured', side: 'right', bigCard: cards[0], stackCards: [cards[1], cards[2], cards[3], cards[4]] })
      blockStep++
    }
  }
}

async function loadMoreCards() {
  if (isLoading || currentPage >= totalPages) return
  isLoading = true

  try {
    currentPage++
    const data = await fetchRecipes(currentPage)

    if (data.media?.length) {
      data.media.forEach(m => { mediaCache[m._id] = m.url })
    }

    totalPages = data.pages
    cardBuffer.push(...data.recipes)
    flushBuffer()

    if (currentPage >= totalPages) {
      if (cardBuffer.length > 0) {
        rows.push({ type: 'row', cards: cardBuffer.splice(0) })
      }
      allLoaded.value = true
    }
  } catch (err) {
    console.error('Failed to load recipes:', err)
  }

  isLoading = false
}

async function resetAndReload() {
  rows.splice(0)
  cardBuffer = []
  blockStep = 0
  currentPage = 0
  totalPages = Infinity
  isLoading = false
  allLoaded.value = false
  await loadMoreCards()
}

// ── Sticky bar (shows when browse filter leaves viewport) ─────────────────────
const browseFilterRef = ref(null)
const stickyVisible = ref(false)
let filterObserver = null

// ── Scroll to top ──────────────────────────────────────────────────────────────
const scrollTopVisible = ref(false)
function onScroll() {
  scrollTopVisible.value = window.scrollY > 300
}

// ── Filter modal ───────────────────────────────────────────────────────────────
const filterModalOpen = ref(false)

// ── Lazy loader sentinel ───────────────────────────────────────────────────────
const lazyLoaderRef = ref(null)
let lazyObserver = null

onMounted(() => {
  // Lazy load via IntersectionObserver
  if (lazyLoaderRef.value) {
    lazyObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) loadMoreCards() },
      { rootMargin: '600px' }
    )
    lazyObserver.observe(lazyLoaderRef.value)
  }

  // Sticky bar via IntersectionObserver
  if (browseFilterRef.value) {
    filterObserver = new IntersectionObserver(
      ([entry]) => { stickyVisible.value = !entry.isIntersecting },
      { threshold: 0 }
    )
    filterObserver.observe(browseFilterRef.value)
  }

  window.addEventListener('scroll', onScroll)

  // Initial load
  loadMoreCards()
})

onUnmounted(() => {
  lazyObserver?.disconnect()
  filterObserver?.disconnect()
  window.removeEventListener('scroll', onScroll)
})

// Expose window for template
const window = globalThis
</script>
