<template>
<<<<<<< HEAD
  <div :class="['filter-modal', open ? 'active' : '']">
    <div class="filter-modal-overlay" @click="$emit('update:open', false)"></div>
    <div class="filter-modal-content">

      <!-- Course -->
      <template v-if="!props.hideCourse">
      <div class="fm-section-title">{{ props.courseTitle }}</div>
      <div class="fm-courses">
        <div
          v-for="course in courses"
          :key="course.type"
          :class="['fm-course-card', activeCourses.has(course.type) ? 'active' : '']"
          @click="toggleSet(activeCourses, course.type)"
        >
          <img :src="$img(course.img)" :alt="course.label" class="fm-course-img">
          <span class="fm-course-label">{{ course.label }}</span>
        </div>
      </div>
      </template>

      <!-- Filter tabs -->
      <div class="fm-filter-block">
        <div class="fm-filter-tabs">
          <div
            v-for="tab in filterTabs.filter(t => !(props.hideIngredients && t.key === 'ingredients') && !(props.hideCalories && t.key === 'calories'))"
            :key="tab.key"
            :class="['fm-filter-tab', activeFilterTab === tab.key ? 'active' : '']"
            @click="activeFilterTab = tab.key"
          >{{ tab.label }}</div>
        </div>
        <div class="fm-filter-options">
          <div
            v-for="opt in activeTabOptions"
            :key="opt"
            :class="['fm-filter-option', isOptionActive(opt) ? 'active' : '']"
            @click="toggleOption(opt)"
=======
  <div :class="['filter-modal', open ? 'active' : '']" @click.self="$emit('update:open', false)">
    <div class="filter-modal-overlay" @click="$emit('update:open', false)"></div>
    <div class="filter-modal-content">
      <button class="filter-modal-close" aria-label="Close" @click="$emit('update:open', false)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <div class="fm-header">
        <h2 class="fm-title">Filters</h2>
        <p class="fm-subtitle">Sort the meals using the filters that suit you</p>
      </div>

      <div class="fm-section">
        <div class="fm-section-label"><span>Sorted by</span></div>
        <div class="fm-sort-tabs">
          <div
            v-for="tab in sortTabs"
            :key="tab"
            :class="['fm-sort-tab', activeSortTab === tab ? 'active' : '']"
            @click="activeSortTab = tab"
          >{{ tab }}</div>
        </div>
        <div class="fm-sort-options">
          <div
            v-for="opt in sortOptions"
            :key="opt"
            :class="['fm-tag', activeSortOption === opt ? 'active' : '']"
            @click="activeSortOption = opt"
>>>>>>> 85339157ff2d18a3d5cf7daa3828c6825595a4f1
          >{{ opt }}</div>
        </div>
      </div>

<<<<<<< HEAD
      <!-- Allergies -->
      <div class="fm-section-title">Allergies</div>
      <div class="fm-allergens">
        <div
          v-for="allergen in allergens"
          :key="allergen.name"
          :class="['fm-allergen', activeAllergens.has(allergen.name) ? 'active' : '']"
          @click="toggleSet(activeAllergens, allergen.name)"
        >
          <span class="fm-allergen-num" :style="{ background: allergen.color }">{{ allergen.num }}</span>
          <span :class="['fm-allergen-name', allergen.small ? 'small' : '']">{{ allergen.name }}</span>
        </div>
      </div>

      <!-- Diet -->
      <div class="fm-section-title">Diet</div>
      <div class="fm-diets">
        <div
          v-for="diet in diets"
          :key="diet.name"
          :class="['fm-diet-tag', activeDiets.has(diet.name) ? 'active' : '']"
          @click="toggleSet(activeDiets, diet.name)"
        >
          <img :src="$img(diet.img)" :alt="diet.name" width="24" height="24">
          <span>{{ diet.name }}</span>
=======
      <div class="fm-section">
        <div class="fm-section-label"><span>Sorted by Allergies</span></div>
        <div class="fm-allergens">
          <div
            v-for="allergen in allergens"
            :key="allergen.name"
            :class="['fm-allergen', activeAllergens.has(allergen.name) ? 'active' : '']"
            @click="toggleSet(activeAllergens, allergen.name)"
          >
            <span class="fm-allergen-num" :style="{ background: allergen.color }">{{ allergen.num }}</span>
            <span>{{ allergen.name }}</span>
          </div>
        </div>
      </div>

      <div class="fm-section">
        <div class="fm-section-label"><span>Diet</span></div>
        <div class="fm-diets">
          <div
            v-for="diet in diets"
            :key="diet.name"
            :class="['fm-diet-tag', activeDiets.has(diet.name) ? 'active' : '']"
            @click="toggleSet(activeDiets, diet.name)"
          >
            <img :src="$img(diet.img)" :alt="diet.name" width="24" height="24">
            <span>{{ diet.name }}</span>
          </div>
>>>>>>> 85339157ff2d18a3d5cf7daa3828c6825595a4f1
        </div>
      </div>

      <button class="fm-show-btn" @click="$emit('update:open', false)">Show recipes</button>
    </div>
  </div>
</template>

<script setup>
<<<<<<< HEAD
import { ref, reactive, computed } from 'vue'

const props = defineProps({
  open: { type: Boolean, required: true },
  hideIngredients: { type: Boolean, default: false },
  hideCourse: { type: Boolean, default: false },
  hideCalories: { type: Boolean, default: false },
  courseTitle: { type: String, default: 'Type of meal' },
})
defineEmits(['update:open'])

// Course
const courses = [
  { type: 'salads',   label: 'Salads',   img: 'images/types of meal/salads.jpg' },
  { type: 'main',     label: 'Main',     img: 'images/types of meal/main.jpg' },
  { type: 'soups',    label: 'Soups',    img: 'images/types of meal/soups.jpg' },
  { type: 'side',     label: 'Side',     img: 'images/types of meal/side.jpg' },
  { type: 'sauces',   label: 'Sauces',   img: 'images/types of meal/sauces.jpg' },
  { type: 'snacks',   label: 'Snacks',   img: 'images/types of meal/snacks.jpg' },
  { type: 'desserts', label: 'Desserts', img: 'images/types of meal/desserts.jpg' },
  { type: 'other',    label: 'Other',    img: 'images/types of meal/other.jpg' },
]
const activeCourses = reactive(new Set())

// Filter tabs
const filterTabs = [
  { key: 'time',        label: 'Time',        options: ['Up to 20 min', 'Up to 40 min', 'Up to 1 hr'] },
  { key: 'calories',    label: 'Calories',    options: ['Up to 300 Kcal', 'Up to 400 Kcal', 'Up to 600 Kcal', 'Up to 800 Kcal'] },
  { key: 'mealtime',   label: 'Meal time',   options: ['Breakfast', 'Brunch', 'Lunch', 'Dinner'] },
  { key: 'difficulty',  label: 'Difficulty',  options: ['Easy', 'Medium', 'Hard'] },
  { key: 'cuisine',     label: 'Cuisine',     options: ['American', 'Asian', 'Chinese', 'European', 'Indian', 'Italian', 'Spanish', 'Jewish'] },
  { key: 'ingredients', label: 'Ingredients', options: ['Vegetables', 'Chicken', 'Beef', 'Pork', 'Pasta', 'Fruit', 'Cheese', 'Seafood'] },
]
const activeFilterTab = ref('time')
const activeOptions = reactive({})

const activeTabOptions = computed(() =>
  filterTabs.find(t => t.key === activeFilterTab.value)?.options ?? []
)

function isOptionActive(opt) {
  return activeOptions[activeFilterTab.value]?.has(opt) ?? false
}

function toggleOption(opt) {
  if (!activeOptions[activeFilterTab.value]) {
    activeOptions[activeFilterTab.value] = new Set()
  }
  const set = activeOptions[activeFilterTab.value]
  if (set.has(opt)) set.delete(opt)
  else set.add(opt)
}

// Allergens
const allergens = [
  { num: 1,  name: 'Celery',        color: '#CCEBE2' },
  { num: 2,  name: 'Gluten',        color: '#EBE2CC' },
  { num: 3,  name: 'Crustaceans',   color: '#EBCCD5' },
  { num: 4,  name: 'Eggs',          color: '#F9F7CB' },
  { num: 5,  name: 'Fish',          color: '#CCE4EB' },
  { num: 6,  name: 'Lupin',         color: '#EAEBCC', small: true },
  { num: 7,  name: 'Milk',          color: '#F4F5F0', small: true },
  { num: 8,  name: 'Molluscs',      color: '#D9C4B2' },
  { num: 9,  name: 'Mustard',       color: '#F6E5B9' },
  { num: 10, name: 'Nuts',          color: '#CCEBD1' },
  { num: 11, name: 'Peanuts',       color: '#DFCCEB' },
  { num: 12, name: 'Sesame seeds',  color: '#F5F2E1' },
  { num: 13, name: 'Soya',          color: '#EBCECC', small: true },
  { num: 14, name: 'Sulphites',     color: '#F6D3B9', small: true },
]
const activeAllergens = reactive(new Set())

// Diet
const diets = [
  { name: 'Meatless',     img: 'images/diet/meatless.jpg' },
  { name: 'Vegetarian',   img: 'images/diet/vegetarian.jpg' },
  { name: 'Vegan',        img: 'images/diet/vegan.jpg' },
  { name: 'Gluten-Free',  img: 'images/diet/gluten-free.jpg' },
  { name: 'Sugar-Free',   img: 'images/diet/sugar-free.jpg' },
=======
import { ref, reactive } from 'vue'

defineProps({ open: { type: Boolean, required: true } })
defineEmits(['update:open'])

const sortTabs = ['Time', 'Meal time', 'Cuisine', 'Main ingredients']
const activeSortTab = ref('Time')

const sortOptions = ['Up to 20 min', 'Up 40 min', 'Up 1 hr']
const activeSortOption = ref('Up to 20 min')

const allergens = [
  { num: 1, name: 'Celery', color: '#CCEBE2' },
  { num: 2, name: 'Gluten', color: '#EBE2CC' },
  { num: 3, name: 'Crustaceans', color: '#EBCCD5' },
  { num: 4, name: 'Eggs', color: '#F9F7CB' },
  { num: 5, name: 'Fish', color: '#CCE4EB' },
  { num: 6, name: 'Lupin', color: '#EAEBCC' },
  { num: 7, name: 'Milk', color: '#F4F5F0' },
  { num: 8, name: 'Molluscs', color: '#D9C4B2' },
  { num: 9, name: 'Mustard', color: '#F6E5B9' },
  { num: 10, name: 'Nuts', color: '#CCEBD1' },
  { num: 11, name: 'Peanuts', color: '#DFCCEB' },
  { num: 12, name: 'Sesame seeds', color: '#F5F2E1' },
  { num: 13, name: 'Soya', color: '#EBCECC' },
  { num: 14, name: 'Sulphites', color: '#F6D3B9' },
]
const activeAllergens = reactive(new Set())

const diets = [
  { name: 'Meatless', img: 'images/diet/meatless.jpg' },
  { name: 'Vegetarian', img: 'images/diet/vegetarian.jpg' },
  { name: 'Vegan', img: 'images/diet/vegan.jpg' },
  { name: 'Gluten-Free', img: 'images/diet/gluten-free.jpg' },
  { name: 'Sugar-Free', img: 'images/diet/sugar-free.jpg' },
>>>>>>> 85339157ff2d18a3d5cf7daa3828c6825595a4f1
  { name: 'Alcohol-Free', img: 'images/diet/alcohol-free.jpg' },
]
const activeDiets = reactive(new Set())

function toggleSet(set, value) {
  if (set.has(value)) set.delete(value)
  else set.add(value)
}
</script>

<style>
<<<<<<< HEAD
/* Overlay */
=======
>>>>>>> 85339157ff2d18a3d5cf7daa3828c6825595a4f1
.filter-modal {
    position: fixed; inset: 0; z-index: 2000;
    display: flex; justify-content: center; align-items: center;
    pointer-events: none; opacity: 0;
    transition: opacity 0.3s ease;
}
.filter-modal.active { pointer-events: auto; opacity: 1; }
.filter-modal-overlay {
<<<<<<< HEAD
    position: absolute; inset: 0; background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
}

/* Panel */
.filter-modal-content {
    position: relative; background: white;
    width: calc(100% - 40px); max-width: 1024px;
    border-radius: 20px;
    padding: 25px 20px 20px;
    box-sizing: border-box;
    max-height: 90vh; overflow-y: auto;
    transform: scale(0.95); transition: transform 0.3s ease;
}
.filter-modal.active .filter-modal-content { transform: scale(1); }


/* Section titles */
.fm-section-title {
    width: 100%; text-align: center;
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 22px; color: black;
    padding: 15px 20px 16px;
    box-sizing: border-box;
}

/* Course cards */
.fm-courses {
    display: flex; gap: 10px;
    justify-content: center;
    overflow-x: auto;
    padding-bottom: 4px;
    margin-top: 10px;
}
.fm-course-card {
    flex-shrink: 0;
    width: 110px; height: 110px;
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 20px;
    outline: 1px solid #CCCCCA;
    outline-offset: -1px;
    display: flex; flex-direction: column;
    justify-content: flex-end; align-items: center;
    gap: 18px;
    position: relative;
    cursor: pointer;
    transition: outline-color 0.2s;
}
.fm-course-card.active { outline: 1px solid black; }
.fm-course-img {
    width: 72px; height: 72px;
    position: absolute; top: 9px; left: 19px;
    object-fit: cover;
}
.fm-course-label {
    font-size: 14px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 14px;
    color: #7E7E7E; text-align: center;
    position: relative; z-index: 1;
}

/* Filter tabs block */
.fm-filter-block {
    display: flex; flex-direction: column;
    align-items: center;
    margin-top: 47px;
}
.fm-filter-block + .fm-section-title {
    margin-top: 33px;
}
.fm-allergens + .fm-section-title {
    margin-top: 40px;
}
.fm-filter-tabs {
    display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
    justify-content: center;
}
.fm-filter-tab {
    height: 36px; padding: 0 10px;
    border-radius: 10px; cursor: pointer;
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 22px; color: black;
    display: flex; align-items: center;
    transition: background 0.2s;
    white-space: nowrap;
}
.fm-filter-tab.active { background: #F4F5F0; }
.fm-filter-options {
    display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
    justify-content: center;
    width: 100%; padding: 0 20px; box-sizing: border-box;
    margin-top: 20px;
}
.fm-filter-option {
    height: 36px; padding: 0 10px;
    border-radius: 10px; cursor: pointer;
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 22px; color: black;
    display: flex; align-items: center;
    transition: background 0.2s;
    white-space: nowrap;
}
.fm-filter-option.active { background: #F4F5F0; }

/* Allergens */
.fm-allergens {
    display: flex; flex-wrap: wrap;
    justify-content: center; gap: 10px;
    padding: 0 20px;
    margin-top: 10px;
}
.fm-allergen {
    padding: 5px; border-radius: 10px;
    background: #F4F5F0;
    display: flex; align-items: center; gap: 6px;
    cursor: pointer;
    outline: 2px solid transparent; outline-offset: -2px;
    transition: outline-color 0.2s;
}
.fm-allergen.active { outline-color: black; }
.fm-allergen-num {
    width: 27px; height: 26px; border-radius: 100px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; font-family: 'Inter', sans-serif;
    font-weight: 600; line-height: 19.6px; color: black;
}
.fm-allergen-name {
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 22px; color: black;
    padding-left: 2px;
    padding-right: 4px;
}

/* Diet */
.fm-diets {
    display: flex; flex-wrap: wrap;
    justify-content: center; gap: 13px;
    padding: 0 20px;
    margin-top: 10px;
}
.fm-diet-tag {
    padding: 6px 7px; background: #F4F5F0; border-radius: 10px;
    display: flex; align-items: center; gap: 6px; cursor: pointer;
    outline: 2px solid transparent; outline-offset: -2px;
    transition: outline-color 0.2s;
}
.fm-diet-tag.active { outline-color: black; }
=======
    position: absolute; inset: 0; background: rgba(0,0,0,0.4);
}
.filter-modal-content {
    position: relative; background: white; width: 100%; max-width: 1100px;
    border-radius: 30px;
    padding: 48px 64px 40px; box-sizing: border-box;
    box-shadow: 0 4px 30px rgba(0,0,0,0.15);
    transform: scale(0.95); transition: transform 0.3s ease;
}
.filter-modal.active .filter-modal-content { transform: scale(1); }
.filter-modal-close {
    position: absolute; top: 24px; right: 24px;
    background: none; border: none; cursor: pointer; padding: 8px;
}
.filter-modal-close:hover { opacity: 0.6; }
.fm-header { text-align: center; margin-bottom: 32px; }
.fm-title {
    font-size: 30px; font-family: 'Druk Wide', sans-serif;
    font-weight: 500; line-height: 30px; color: black; margin: 0 0 16px;
}
.fm-subtitle {
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 22px; color: #A1A09F; margin: 0;
}
.fm-section { margin-bottom: 40px; }
.fm-section-label {
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px; margin-top: 40px;
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 22px; color: black;
}
.fm-section:first-child .fm-section-label { margin-top: 0; }
.fm-sort-tabs {
    display: flex; justify-content: center; gap: 8px;
    margin-bottom: 12px; flex-wrap: wrap;
}
.fm-sort-tab {
    height: 40px; padding: 0 16px; border-radius: 10px; cursor: pointer;
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 40px; color: #7E7E7E;
    transition: background 0.2s, color 0.2s;
}
.fm-sort-tab.active { background: #ECECE5; color: black; }
.fm-sort-options {
    display: flex; justify-content: center; gap: 6px; flex-wrap: wrap;
}
.fm-tag {
    height: 40px; padding: 0 16px; border-radius: 10px; cursor: pointer;
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 40px; color: black;
    background: white; transition: background 0.2s;
}
.fm-tag.active { background: #ECECE5; }
.fm-allergens {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;
}
.fm-allergen {
    padding: 5px 9px 5px 5px; border-radius: 10px;
    outline: 1px solid #ECECE5; outline-offset: -1px;
    display: flex; align-items: center; gap: 4px;
    cursor: pointer; transition: outline-color 0.2s;
}
.fm-allergen.active { outline: 2px solid black; outline-offset: -2px; }
.fm-allergen-num {
    width: 27px; height: 26px; border-radius: 100px;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; font-family: 'Inter', sans-serif;
    font-weight: 600; line-height: 19.6px; color: black; flex-shrink: 0;
}
.fm-allergen span:not(.fm-allergen-num) {
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 22px; color: black;
}
.fm-diets {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;
}
.fm-diet-tag {
    padding: 5px 11px 5px 7px; background: #F4F5F0; border-radius: 10px;
    display: flex; align-items: center; gap: 4px; cursor: pointer;
    transition: outline 0.2s;
}
.fm-diet-tag.active { outline: 2px solid black; outline-offset: -2px; }
>>>>>>> 85339157ff2d18a3d5cf7daa3828c6825595a4f1
.fm-diet-tag img { border-radius: 10px; }
.fm-diet-tag span {
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 22px; color: black;
<<<<<<< HEAD
    padding-left: 2px;
}

/* Show button */
.fm-show-btn {
    display: block; width: 100%; max-width: 342px;
    margin: 48px auto 40px; padding: 20px 32px;
    background: black; color: white; border: none;
    border-radius: 20px; cursor: pointer;
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 600; line-height: 1; text-align: center;
    transition: opacity 0.2s;
}
.fm-show-btn:hover { opacity: 0.8; }

/* Mobile */
@media (max-width: 768px) {
    .filter-modal { align-items: flex-end; }
    .filter-modal-content {
        width: 100%; max-width: 100%; border-radius: 24px 24px 0 0;
        padding: 20px 16px 32px;
    }
    .fm-courses { justify-content: flex-start; }
=======
}
.fm-show-btn {
    display: block; width: 100%; max-width: 342px;
    margin: 28px auto 0; padding: 20px 32px;
    background: black; color: white; border: none;
    border-radius: 20px; cursor: pointer;
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 600; line-height: 16px; text-align: center;
    transition: opacity 0.2s;
}
.fm-show-btn:hover { opacity: 0.8; }
@media (max-width: 768px) {
    .filter-modal { align-items: flex-end; }
    .filter-modal-content { padding: 32px 24px 24px; max-width: 100%; border-radius: 24px 24px 0 0; max-height: 90vh; overflow-y: auto; }
    .fm-title { font-size: 24px; }
>>>>>>> 85339157ff2d18a3d5cf7daa3828c6825595a4f1
}
</style>
