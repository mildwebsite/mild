<template>
  <div v-if="show" class="ben-overlay" @click.self="$emit('close')">
    <div
      class="ben-sheet"
      :style="{ transform: 'translateY(' + dragY + 'px)', transition: dragging ? 'none' : 'transform 0.3s' }"
    >

      <!-- Handle -->
      <div
        class="ben-handle-zone"
        @mousedown.prevent="onDragStart"
        @touchstart.prevent="onDragStart"
      >
        <div class="ben-handle"></div>
      </div>

      <!-- Header -->
      <div class="ben-header">
        <div class="ben-subtitle">per 100 g/ml</div>
        <div class="ben-title">Benefits<br>of ingredients</div>
      </div>

      <!-- Tabs -->
      <div class="ben-tabs">
        <div
          v-for="(ing, i) in ingredients"
          :key="ing.name"
          class="ben-tab"
          :class="{ 'ben-tab--active': activeIndex === i }"
          @click="activeIndex = i"
        >{{ ing.name }}</div>
      </div>

      <!-- Scrollable body -->
      <div class="ben-scroll">
        <div class="ben-img-wrap">
          <img :src="$img(active.img)" :alt="active.name" class="ben-img">
        </div>
        <div class="ben-ing-name">{{ active.name }}</div>
        <div class="ben-description">{{ active.description }}</div>
        <div class="ben-cards">
          <div class="ben-card">
            <div v-for="row in active.basic" :key="row.label" class="ben-row">
              <span class="ben-row-label">{{ row.label }}</span>
              <span class="ben-row-value">{{ row.value }}</span>
            </div>
          </div>
          <div class="ben-card">
            <div v-for="row in active.carbs" :key="row.label" class="ben-row">
              <span class="ben-row-label">{{ row.label }}</span>
              <span class="ben-row-value">{{ row.value }}</span>
            </div>
          </div>
          <div class="ben-card">
            <div v-for="row in active.fat" :key="row.label" class="ben-row">
              <span class="ben-row-label">{{ row.label }}</span>
              <span class="ben-row-value">{{ row.value }}</span>
            </div>
          </div>
          <div class="ben-card">
            <div v-for="row in active.other" :key="row.label" class="ben-row">
              <span class="ben-row-label">{{ row.label }}</span>
              <span class="ben-row-value">{{ row.value }}</span>
            </div>
          </div>
          <div class="ben-card">
            <div class="ben-card-title">Vitamins</div>
            <div v-for="row in active.vitamins" :key="row.label" class="ben-row">
              <span class="ben-row-label">{{ row.label }}</span>
              <span class="ben-row-value">{{ row.value }}</span>
            </div>
          </div>
          <div class="ben-card">
            <div class="ben-card-title">Minerals</div>
            <div v-for="row in active.minerals" :key="row.label" class="ben-row">
              <span class="ben-row-label">{{ row.label }}</span>
              <span class="ben-row-value">{{ row.value }}</span>
            </div>
          </div>
          <div class="ben-card">
            <div class="ben-row">
              <span class="ben-row-label">Allergens</span>
              <span class="ben-row-value">{{ active.allergens }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  show: Boolean,
  ingredients: { type: Array, default: () => defaultIngredients },
})

const emit = defineEmits(['close'])

const activeIndex = ref(0)
const dragY = ref(0)
const dragging = ref(false)

const active = computed(() => props.ingredients[activeIndex.value] ?? props.ingredients[0])

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

const defaultIngredients = [
  {
    name: 'Quinoa',
    img: 'images/Ingredients/quinoa.png',
    description: 'A gluten-free grain rich in protein, fiber, and various vitamins and minerals. Provides essential amino acids, making it a complete protein source.',
    basic:    [{ label: 'Calories', value: '222 Kcal' }, { label: 'Protein', value: '5.5 g' }, { label: 'Fiber', value: '0 g' }],
    carbs:    [{ label: 'Carbohydrates', value: '20.1 g' }, { label: 'Sugar', value: '4.2 g' }, { label: 'Starch', value: '12.7 g' }],
    fat:      [{ label: 'Fat', value: '0,1 g' }, { label: 'Saturated', value: '0.03 g' }, { label: 'Monounsaturated', value: '0 g' }, { label: 'Polyunsaturated', value: '0.01 g' }, { label: 'Trans', value: '0 g' }],
    other:    [{ label: 'Fiber', value: '0,03 g' }, { label: 'Water', value: '77 g' }, { label: 'Alcohol', value: '0 g' }],
    vitamins: [{ label: 'Vitamin A', value: '709 µg' }, { label: 'Vitamin C', value: '2.4 mg' }, { label: 'Vitamin B6', value: '0.209 mg' }],
    minerals: [{ label: 'Calcium', value: '30 mg' }, { label: 'Iron', value: '0.61 mg' }, { label: 'Magnesium', value: '25 mg' }, { label: 'Potassium', value: '337 mg' }],
    allergens: 'None',
  },
  {
    name: 'Assorted Vegetables',
    img: 'images/Ingredients/vegetables.png',
    description: 'A mix of seasonal vegetables rich in vitamins, minerals, and dietary fiber. Low in calories and high in antioxidants.',
    basic:    [{ label: 'Calories', value: '65 Kcal' }, { label: 'Protein', value: '2.5 g' }, { label: 'Fiber', value: '3.1 g' }],
    carbs:    [{ label: 'Carbohydrates', value: '12 g' }, { label: 'Sugar', value: '5 g' }, { label: 'Starch', value: '2.5 g' }],
    fat:      [{ label: 'Fat', value: '0.4 g' }, { label: 'Saturated', value: '0.1 g' }, { label: 'Monounsaturated', value: '0.1 g' }, { label: 'Polyunsaturated', value: '0.2 g' }, { label: 'Trans', value: '0 g' }],
    other:    [{ label: 'Fiber', value: '3.1 g' }, { label: 'Water', value: '85 g' }, { label: 'Alcohol', value: '0 g' }],
    vitamins: [{ label: 'Vitamin A', value: '450 µg' }, { label: 'Vitamin C', value: '18 mg' }, { label: 'Vitamin K', value: '80 µg' }],
    minerals: [{ label: 'Calcium', value: '45 mg' }, { label: 'Iron', value: '1.2 mg' }, { label: 'Magnesium', value: '18 mg' }, { label: 'Potassium', value: '290 mg' }],
    allergens: 'None',
  },
  {
    name: 'Garlic and Ginger',
    img: 'images/Ingredients/garlic-ginger.png',
    description: 'Powerful combination with strong anti-inflammatory and antioxidant properties. Known to boost immunity and improve digestion.',
    basic:    [{ label: 'Calories', value: '42 Kcal' }, { label: 'Protein', value: '1.8 g' }, { label: 'Fiber', value: '0.9 g' }],
    carbs:    [{ label: 'Carbohydrates', value: '8.5 g' }, { label: 'Sugar', value: '0.3 g' }, { label: 'Starch', value: '1.2 g' }],
    fat:      [{ label: 'Fat', value: '0.2 g' }, { label: 'Saturated', value: '0.05 g' }, { label: 'Monounsaturated', value: '0.01 g' }, { label: 'Polyunsaturated', value: '0.08 g' }, { label: 'Trans', value: '0 g' }],
    other:    [{ label: 'Fiber', value: '0.9 g' }, { label: 'Water', value: '88 g' }, { label: 'Alcohol', value: '0 g' }],
    vitamins: [{ label: 'Vitamin C', value: '3.1 mg' }, { label: 'Vitamin B6', value: '0.35 mg' }, { label: 'Vitamin E', value: '0.08 mg' }],
    minerals: [{ label: 'Calcium', value: '18 mg' }, { label: 'Iron', value: '0.4 mg' }, { label: 'Magnesium', value: '12 mg' }, { label: 'Potassium', value: '415 mg' }],
    allergens: 'None',
  },
]
</script>

<style>
.ben-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.ben-sheet {
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

.ben-handle-zone {
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: grab;
  touch-action: none;
}

.ben-handle {
  width: 36px;
  height: 5px;
  background: #CCCCCA;
  border-radius: 2.5px;
  pointer-events: none;
}

.ben-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 16px 20px 0;
  flex-shrink: 0;
}

.ben-subtitle {
  color: #A1A09F;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 20.8px;
  text-align: center;
}

.ben-title {
  color: black;
  font-size: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
}

.ben-tabs {
  display: flex;
  align-items: center;
  padding: 20px 20px 0;
  overflow-x: auto;
  flex-shrink: 0;
}

.ben-tabs::-webkit-scrollbar { display: none; }

.ben-tab {
  height: 36px;
  padding: 11px 13px;
  border-radius: 10px;
  color: black;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  line-height: 22px;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;
}

.ben-tab--active {
  background: #ECECE5;
}

.ben-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 20px 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ben-scroll::-webkit-scrollbar { display: none; }

.ben-img-wrap {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  overflow: hidden;
  flex-shrink: 0;
}

.ben-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.ben-ing-name {
  margin-top: 24px;
  color: black;
  font-size: 24px;
  font-family: 'Druk Wide', sans-serif;
  font-weight: 500;
  line-height: 26.4px;
  text-align: center;
  width: 100%;
  padding: 0 20px;
}

.ben-description {
  margin-top: 24px;
  padding: 0 20px;
  color: black;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 22.4px;
  width: 100%;
}

.ben-cards {
  margin-top: 24px;
  width: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ben-card {
  width: 100%;
  padding: 30px;
  background: #F4F5F0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ben-card-title {
  color: black;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  margin-bottom: 8px;
}

.ben-row {
  display: flex;
  align-items: center;
}

.ben-row-label {
  flex: 1;
  color: #7E7E7E;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 22.4px;
}

.ben-row-value {
  flex: 1;
  color: black;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 22.4px;
}

</style>
