<template>
  <div v-if="show" class="flt-overlay" @click.self="$emit('close')">
    <div
      class="flt-sheet"
      :style="{ transform: 'translateY(' + dragY + 'px)', transition: dragging ? 'none' : 'transform 0.3s' }"
    >

      <!-- Handle -->
      <div
        class="flt-handle-zone"
        @mousedown.prevent="onDragStart"
        @touchstart.prevent="onDragStart"
      >
        <div class="flt-handle"></div>
      </div>

      <!-- Scrollable content -->
      <div class="flt-scroll">

        <!-- Header -->
        <div class="flt-header">
          <div class="flt-title">Filters</div>
          <div class="flt-subtitle">Add filters for better results</div>
        </div>

        <!-- Types of meal -->
        <div class="flt-section-label">Types of meal</div>
        <div class="flt-meal-wrap">
          <div class="flt-meal-grid">
            <div
              v-for="item in mealTypes"
              :key="item.id"
              class="flt-meal-card"
              :class="{ 'flt-card--selected': mealSelected.has(item.id) }"
              @click="toggleMeal(item.id)"
            >
              <img :src="$img(item.img)" :alt="item.label" class="flt-meal-img">
              <span class="flt-card-label">{{ item.label }}</span>
            </div>
          </div>
        </div>

        <!-- Sorted by -->
        <div class="flt-sorted-bar">
          <span class="flt-sorted-dot"></span>
          <span class="flt-sorted-text">Sorted by</span>
        </div>

        <!-- Accordion -->
        <div class="flt-accordion">
          <div v-for="section in accordionSections" :key="section.key">

            <!-- Accordion row -->
            <div class="flt-acc-row" @click="toggleSection(section.key)">
              <span class="flt-acc-label">{{ section.label }}</span>
              <div class="flt-acc-right">
                <span
                  v-if="!openSections.has(section.key) && getCount(section.key) > 0"
                  class="flt-badge"
                >{{ getCount(section.key) === 1 ? getFirstLabel(section.key) : getCount(section.key) }}</span>
                <svg
                  class="flt-chevron"
                  :class="{ 'flt-chevron--open': openSections.has(section.key) }"
                  width="12" height="8" viewBox="0 0 12 8" fill="none"
                >
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>

            <!-- Expanded: chips -->
            <div v-show="openSections.has(section.key) && section.type === 'chips'" class="flt-acc-body">
              <div class="flt-chips">
                <div
                  v-for="opt in section.options"
                  :key="opt"
                  class="flt-chip"
                  :class="{ 'flt-chip--selected': isChipSelected(section.key, opt) }"
                  @click.stop="toggleChip(section.key, opt)"
                >{{ opt }}</div>
              </div>
            </div>

            <!-- Expanded: allergies -->
            <div v-show="openSections.has(section.key) && section.type === 'allergies'" class="flt-acc-body">
              <div class="flt-allergy-grid">
                <div
                  v-for="item in allergyItems"
                  :key="item.id"
                  class="flt-allergy-card"
                  :class="{ 'flt-card--selected': allergySelected.has(item.id) }"
                  @click.stop="toggleAllergy(item.id)"
                >
                  <template v-if="allergySelected.has(item.id)">
                    <div class="flt-allergy-circle" :style="{ background: item.color }">
                      <img :src="$img(item.img)" :alt="item.label" class="flt-allergy-circle-img">
                    </div>
                  </template>
                  <template v-else>
                    <img :src="$img(item.img)" :alt="item.label" class="flt-allergy-img">
                  </template>
                  <span v-show="!allergySelected.has(item.id)" class="flt-card-label">{{ item.label }}</span>
                </div>
              </div>
            </div>

            <!-- Expanded: diet -->
            <div v-show="openSections.has(section.key) && section.type === 'diet'" class="flt-acc-body">
              <div class="flt-diet-grid">
                <div
                  v-for="item in dietItems"
                  :key="item.id"
                  class="flt-diet-card"
                  :class="{ 'flt-card--selected': dietSelected.has(item.id) }"
                  @click.stop="toggleDiet(item.id)"
                >
                  <img :src="$img(item.img)" :alt="item.label" class="flt-diet-img">
                  <span class="flt-card-label">{{ item.label }}</span>
                </div>
              </div>
            </div>

            <div class="flt-divider"></div>
          </div>
        </div>

      </div>

      <!-- Bottom button -->
      <div class="flt-bottom">
        <button class="flt-show-btn" @click="$emit('close')">Show recipes</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

defineProps({ show: Boolean })
defineEmits(['close'])

const dragY = ref(0)
const dragging = ref(false)

function onDragStart(e) {
  const startY = e.touches ? e.touches[0].clientY : e.clientY
  dragging.value = true

  function onMove(ev) {
    const delta = (ev.touches ? ev.touches[0].clientY : ev.clientY) - startY
    if (delta > 0) {
      if (ev.cancelable) ev.preventDefault()
      dragY.value = delta
    }
  }

  function onEnd() {
    dragging.value = false
    if (dragY.value > 100) emit('close')
    dragY.value = 0
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseup', onEnd)
    document.removeEventListener('touchmove', onMove)
    document.removeEventListener('touchend', onEnd)
  }

  document.addEventListener('mousemove', onMove)
  document.addEventListener('mouseup', onEnd)
  document.addEventListener('touchmove', onMove, { passive: false })
  document.addEventListener('touchend', onEnd)
}

// Fix: need emit reference inside onDragStart closure
const emit = defineEmits(['close'])

// Types of meal
const mealTypes = [
  { id: 'salads',   label: 'Salads',   img: 'images/types of meal/salads.jpg' },
  { id: 'main',     label: 'Main',     img: 'images/types of meal/main.jpg' },
  { id: 'soups',    label: 'Soups',    img: 'images/types of meal/soups.jpg' },
  { id: 'side',     label: 'Side',     img: 'images/types of meal/side.jpg' },
  { id: 'sauces',   label: 'Sauces',   img: 'images/types of meal/sauces.jpg' },
  { id: 'snacks',   label: 'Snacks',   img: 'images/types of meal/snacks.jpg' },
  { id: 'drinks',   label: 'Drinks',   img: 'images/types of meal/drinks.jpg' },
  { id: 'desserts', label: 'Desserts', img: 'images/types of meal/desserts.jpg' },
  { id: 'other',    label: 'Other',    img: 'images/types of meal/other.jpg' },
]
const mealSelected = reactive(new Set())
function toggleMeal(id) {
  if (mealSelected.has(id)) mealSelected.delete(id)
  else mealSelected.add(id)
}

// Accordion sections
const accordionSections = [
  { key: 'time',        label: 'Time',             type: 'chips',     options: ['Up to 20 min', 'Up to 40 min', 'Up to 1 hr'] },
  { key: 'calories',    label: 'Calories',          type: 'chips',     options: ['Up to 300 Kcal', 'Up to 400 Kcal', 'Up to 600 Kcal', 'Up to 800 Kcal'] },
  { key: 'mealtime',   label: 'Meal time',          type: 'chips',     options: ['Breakfast', 'Brunch', 'Lunch', 'Dinner'] },
  { key: 'difficulty',  label: 'Difficulty',        type: 'chips',     options: ['Easy', 'Medium', 'Hard'] },
  { key: 'cuisine',     label: 'Cuisine',           type: 'chips',     options: ['American', 'Asian', 'Chinese', 'European', 'Indian', 'Italian', 'Spanish', 'Jewish'] },
  { key: 'ingredients', label: 'Main ingredients',  type: 'chips',     options: ['Vegetables', 'Chicken', 'Beef', 'Pork', 'Pasta', 'Fruit', 'Cheese', 'Seafood'] },
  { key: 'allergies',   label: 'Allergies',         type: 'allergies', options: [] },
  { key: 'diet',        label: 'Diet',              type: 'diet',      options: [] },
]

const openSections = reactive(new Set())
function toggleSection(key) {
  if (openSections.has(key)) openSections.delete(key)
  else openSections.add(key)
}

// Chip selections
const chipSelections = reactive({})
function isChipSelected(key, opt) {
  return chipSelections[key]?.has(opt) ?? false
}
function toggleChip(key, opt) {
  if (!chipSelections[key]) chipSelections[key] = new Set()
  if (chipSelections[key].has(opt)) chipSelections[key].delete(opt)
  else chipSelections[key].add(opt)
}

// Allergy items (same as RestrictionsPage)
const allergyItems = [
  { id: 'a-celery',      label: 'Celery',       img: 'images/Restrictions/celery.png',      color: '#CCEBE2' },
  { id: 'a-gluten',      label: 'Gluten',        img: 'images/Restrictions/gluten.png',       color: '#F6E5B9' },
  { id: 'a-crustaceans', label: 'Crustaceans',   img: 'images/Restrictions/crustaceans.png',  color: '#CCEBD1' },
  { id: 'a-eggs',        label: 'Eggs',          img: 'images/Restrictions/eggs.png',         color: '#F6E5B9' },
  { id: 'a-fish',        label: 'Fish',          img: 'images/Restrictions/fish.png',         color: '#CCEBE2' },
  { id: 'a-lupin',       label: 'Lupin',         img: 'images/Restrictions/lupin.png',        color: '#CCEBD1' },
  { id: 'a-milk',        label: 'Milk',          img: 'images/Restrictions/milk.png',         color: '#F6E5B9' },
  { id: 'a-molluscs',    label: 'Molluscs',      img: 'images/Restrictions/molluscs.png',     color: '#CCEBE2' },
  { id: 'a-mustard',     label: 'Mustard',       img: 'images/Restrictions/mustard.png',      color: '#F6E5B9' },
  { id: 'a-nuts',        label: 'Tree Nuts',     img: 'images/Restrictions/nuts.png',         color: '#CCEBD1' },
  { id: 'a-peanuts',     label: 'Peanuts',       img: 'images/Restrictions/peanuts.png',      color: '#CCEBE2' },
  { id: 'a-sesame',      label: 'Sesame seeds',  img: 'images/Restrictions/sesame.png',       color: '#F6E5B9' },
  { id: 'a-soya',        label: 'Soya',          img: 'images/Restrictions/soya.png',         color: '#CCEBD1' },
  { id: 'a-sulphites',   label: 'Sulphites',     img: 'images/Restrictions/sulphites.png',    color: '#CCEBE2' },
]
const allergySelected = reactive(new Set())
function toggleAllergy(id) {
  if (allergySelected.has(id)) allergySelected.delete(id)
  else allergySelected.add(id)
}

// Diet items (same as RestrictionsPage)
const dietItems = [
  { id: 'meatless',    label: 'Meatless',    img: 'images/diet/meatless.jpg' },
  { id: 'vegetarian',  label: 'Vegetarian',  img: 'images/diet/vegetarian.jpg' },
  { id: 'vegan',       label: 'Vegan',       img: 'images/diet/vegan.jpg' },
  { id: 'gluten',      label: 'Gluten-Free', img: 'images/diet/gluten-Free.jpg' },
  { id: 'sugar',       label: 'Sugar-Free',  img: 'images/diet/sugar-free.jpg' },
  { id: 'alcohol',     label: 'Alcohol-Free',img: 'images/diet/alcohol-free.jpg' },
]
const dietSelected = reactive(new Set())
function toggleDiet(id) {
  if (dietSelected.has(id)) dietSelected.delete(id)
  else dietSelected.add(id)
}

// Badge helpers
function getCount(key) {
  if (key === 'allergies') return allergySelected.size
  if (key === 'diet') return dietSelected.size
  return chipSelections[key]?.size ?? 0
}

function getFirstLabel(key) {
  if (key === 'allergies') {
    const id = [...allergySelected][0]
    return allergyItems.find(a => a.id === id)?.label ?? ''
  }
  if (key === 'diet') {
    const id = [...dietSelected][0]
    return dietItems.find(d => d.id === id)?.label ?? ''
  }
  return [...(chipSelections[key] ?? [])][0] ?? ''
}
</script>

<style>
.flt-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.flt-sheet {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0px -3px 4px rgba(0, 0, 0, 0.10);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
}

/* Handle */
.flt-handle-zone {
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: grab;
  touch-action: none;
}

.flt-handle {
  width: 36px;
  height: 5px;
  background: #CCCCCA;
  border-radius: 2.5px;
  pointer-events: none;
}

/* Scroll area */
.flt-scroll {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.flt-scroll::-webkit-scrollbar { display: none; }

/* Header */
.flt-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px 20px 24px;
  flex-shrink: 0;
}

.flt-title {
  color: black;
  font-size: 30px;
  font-family: 'Druk Wide', sans-serif;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
}

.flt-subtitle {
  color: #A1A09F;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
}

/* Section label */
.flt-section-label {
  padding: 0 20px 16px;
  color: black;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
}

/* Meal grid: 3 per row */
.flt-meal-wrap {
  padding: 0 20px 24px;
}

.flt-meal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.flt-meal-card {
  height: 110px;
  padding: 10px 6px;
  position: relative;
  border-radius: 20px;
  outline: 1px solid #CCCCCA;
  outline-offset: -1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.flt-meal-card.flt-card--selected {
  outline: 1px solid black;
}

.flt-meal-img {
  width: 72px;
  height: 72px;
  object-fit: cover;
  position: absolute;
  top: 9px;
  left: 50%;
  transform: translateX(-50%);
}

/* Shared card label */
.flt-card-label {
  color: #7E7E7E;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 14px;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* Sorted by bar */
.flt-sorted-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 20px 0;
  margin-bottom: 4px;
}

.flt-sorted-dot {
  width: 8px;
  height: 8px;
  background: #FFF066;
  border-radius: 50%;
  flex-shrink: 0;
}

.flt-sorted-text {
  color: #A1A09F;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 22px;
}

/* Accordion */
.flt-accordion {
  display: flex;
  flex-direction: column;
}

.flt-acc-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  cursor: pointer;
  min-height: 56px;
}

.flt-acc-label {
  color: #7E7E7E;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 22px;
}

.flt-acc-right {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

/* Badge */
.flt-badge {
  background: #ECECE5;
  border-radius: 10px;
  padding: 5px 10px;
  color: black;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 14px;
  white-space: nowrap;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Chevron */
.flt-chevron {
  flex-shrink: 0;
  transition: transform 0.2s;
}

.flt-chevron--open {
  transform: rotate(180deg);
}

/* Accordion body */
.flt-acc-body {
  padding: 0 20px 16px;
}

/* Chips */
.flt-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.flt-chip {
  height: 36px;
  padding: 0 13px;
  border-radius: 10px;
  background: #F4F5F0;
  color: black;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 36px;
  cursor: pointer;
  white-space: nowrap;
}

.flt-chip--selected {
  background: #ECECE5;
  outline: 1px solid black;
  outline-offset: -1px;
}

/* Allergy grid: 3 per row, fixed 110px */
.flt-allergy-grid {
  display: grid;
  grid-template-columns: repeat(3, 110px);
  gap: 10px;
}

.flt-allergy-card {
  width: 110px;
  height: 110px;
  padding: 10px 15px;
  position: relative;
  border-radius: 20px;
  outline: 1px solid #CCCCCA;
  outline-offset: -1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.flt-allergy-card.flt-card--selected {
  outline: 1px solid black;
  padding: 7px;
  justify-content: center;
}

.flt-allergy-img {
  width: 72px;
  height: 72px;
  object-fit: cover;
  position: absolute;
  top: 9px;
  left: 50%;
  transform: translateX(-50%);
}

.flt-allergy-circle {
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.flt-allergy-circle-img {
  width: 48px;
  height: 48px;
  object-fit: cover;
}

/* Diet grid */
.flt-diet-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.flt-diet-card {
  height: 110px;
  padding: 10px 6px;
  position: relative;
  border-radius: 20px;
  outline: 1px solid #CCCCCA;
  outline-offset: -1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}

.flt-diet-card.flt-card--selected {
  outline: 1px solid black;
}

.flt-diet-img {
  width: 72px;
  height: 72px;
  object-fit: cover;
  position: absolute;
  top: 9px;
  left: 50%;
  transform: translateX(-50%);
}

/* Divider */
.flt-divider {
  height: 1px;
  background: #F4F5F0;
  margin: 0 20px;
}

/* Bottom */
.flt-bottom {
  flex-shrink: 0;
  padding: 16px 20px 32px;
  background: white;
}

.flt-show-btn {
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 20px;
  background: black;
  color: white;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
}
</style>
