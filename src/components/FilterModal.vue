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

<style>
.filter-modal {
    position: fixed; inset: 0; z-index: 2000;
    display: flex; justify-content: center; align-items: center;
    pointer-events: none; opacity: 0;
    transition: opacity 0.3s ease;
}
.filter-modal.active { pointer-events: auto; opacity: 1; }
.filter-modal-overlay {
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
.fm-diet-tag img { border-radius: 10px; }
.fm-diet-tag span {
    font-size: 16px; font-family: 'Inter', sans-serif;
    font-weight: 500; line-height: 22px; color: black;
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
}
</style>
