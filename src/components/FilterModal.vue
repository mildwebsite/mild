<template>
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
          >{{ opt }}</div>
        </div>
      </div>

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
        </div>
      </div>

      <button class="fm-show-btn" @click="$emit('update:open', false)">Show recipes</button>
    </div>
  </div>
</template>

<script setup>
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
  { name: 'Alcohol-Free', img: 'images/diet/alcohol-free.jpg' },
]
const activeDiets = reactive(new Set())

function toggleSet(set, value) {
  if (set.has(value)) set.delete(value)
  else set.add(value)
}
</script>
