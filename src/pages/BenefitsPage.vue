<template>
  <div class="ben-page">

    <!-- Handle -->
    <div class="ben-handle-zone">
      <div class="ben-handle"></div>
    </div>

    <!-- Header -->
    <div class="ben-header">
      <div class="ben-subtitle">per 100 g/ml</div>
      <div class="ben-title">Benefits<br>of ingredients</div>
    </div>

    <!-- Ingredient tabs -->
    <div class="ben-tabs">
      <div
        v-for="(ing, i) in ingredients"
        :key="ing.name"
        class="ben-tab"
        :class="{ 'ben-tab--active': activeIndex === i }"
        @click="activeIndex = i"
      >{{ ing.name }}</div>
    </div>

    <!-- Scrollable content -->
    <div class="ben-scroll">

      <!-- Image -->
      <div class="ben-img-wrap">
        <img :src="$img(active.img)" :alt="active.name" class="ben-img">
      </div>

      <!-- Name -->
      <div class="ben-ing-name">{{ active.name }}</div>

      <!-- Description -->
      <div class="ben-description">{{ active.description }}</div>

      <!-- Nutrition cards -->
      <div class="ben-cards">

        <!-- Basic -->
        <div class="ben-card">
          <div v-for="row in active.basic" :key="row.label" class="ben-row">
            <span class="ben-row-label">{{ row.label }}</span>
            <span class="ben-row-value">{{ row.value }}</span>
          </div>
        </div>

        <!-- Carbohydrates -->
        <div class="ben-card">
          <div v-for="row in active.carbs" :key="row.label" class="ben-row">
            <span class="ben-row-label">{{ row.label }}</span>
            <span class="ben-row-value">{{ row.value }}</span>
          </div>
        </div>

        <!-- Fat -->
        <div class="ben-card">
          <div v-for="row in active.fat" :key="row.label" class="ben-row">
            <span class="ben-row-label">{{ row.label }}</span>
            <span class="ben-row-value">{{ row.value }}</span>
          </div>
        </div>

        <!-- Other -->
        <div class="ben-card">
          <div v-for="row in active.other" :key="row.label" class="ben-row">
            <span class="ben-row-label">{{ row.label }}</span>
            <span class="ben-row-value">{{ row.value }}</span>
          </div>
        </div>

        <!-- Vitamins -->
        <div class="ben-card">
          <div class="ben-card-title">Vitamins</div>
          <div v-for="row in active.vitamins" :key="row.label" class="ben-row">
            <span class="ben-row-label">{{ row.label }}</span>
            <span class="ben-row-value">{{ row.value }}</span>
          </div>
        </div>

        <!-- Minerals -->
        <div class="ben-card">
          <div class="ben-card-title">Minerals</div>
          <div v-for="row in active.minerals" :key="row.label" class="ben-row">
            <span class="ben-row-label">{{ row.label }}</span>
            <span class="ben-row-value">{{ row.value }}</span>
          </div>
        </div>

        <!-- Allergens -->
        <div class="ben-card">
          <div class="ben-row">
            <span class="ben-row-label">Allergens</span>
            <span class="ben-row-value">{{ active.allergens }}</span>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeIndex = ref(0)

const ingredients = [
  {
    name: 'Quinoa',
    img: 'images/Ingredients/quinoa.png',
    description: 'A gluten-free grain rich in protein, fiber, and various vitamins and minerals. Provides essential amino acids, making it a complete protein source. Contains antioxidants and anti-inflammatory compounds, potentially reducing the risk of chronic diseases. High in fiber, promoting digestive health and aiding in weight management. May help regulate blood sugar levels and improve heart health due to its high fiber and protein content.',
    basic: [
      { label: 'Calories', value: '222 Kcal' },
      { label: 'Protein',  value: '5.5 g' },
      { label: 'Fiber',    value: '0 g' },
    ],
    carbs: [
      { label: 'Carbohydrates', value: '20.1 g' },
      { label: 'Sugar',         value: '4.2 g' },
      { label: 'Starch',        value: '12.7 g' },
    ],
    fat: [
      { label: 'Fat',             value: '0,1 g' },
      { label: 'Saturated',       value: '0.03 g' },
      { label: 'Monounsaturated', value: '0 g' },
      { label: 'Polyunsaturated', value: '0.01 g' },
      { label: 'Trans',           value: '0 g' },
    ],
    other: [
      { label: 'Fiber',   value: '0,03 g' },
      { label: 'Water',   value: '77 g' },
      { label: 'Alcohol', value: '0 g' },
    ],
    vitamins: [
      { label: 'Vitamin A',  value: '709 µg' },
      { label: 'Vitamin C',  value: '2.4 mg' },
      { label: 'Vitamin B6', value: '0.209 mg' },
    ],
    minerals: [
      { label: 'Calcium',   value: '30 mg' },
      { label: 'Iron',      value: '0.61 mg' },
      { label: 'Magnesium', value: '25 mg' },
      { label: 'Potassium', value: '337 mg' },
    ],
    allergens: 'None',
  },
  {
    name: 'Assorted Vegetables',
    img: 'images/Ingredients/vegetables.png',
    description: 'A mix of seasonal vegetables rich in vitamins, minerals, and dietary fiber. Low in calories and high in antioxidants.',
    basic: [
      { label: 'Calories', value: '65 Kcal' },
      { label: 'Protein',  value: '2.5 g' },
      { label: 'Fiber',    value: '3.1 g' },
    ],
    carbs: [
      { label: 'Carbohydrates', value: '12 g' },
      { label: 'Sugar',         value: '5 g' },
      { label: 'Starch',        value: '2.5 g' },
    ],
    fat: [
      { label: 'Fat',             value: '0.4 g' },
      { label: 'Saturated',       value: '0.1 g' },
      { label: 'Monounsaturated', value: '0.1 g' },
      { label: 'Polyunsaturated', value: '0.2 g' },
      { label: 'Trans',           value: '0 g' },
    ],
    other: [
      { label: 'Fiber',   value: '3.1 g' },
      { label: 'Water',   value: '85 g' },
      { label: 'Alcohol', value: '0 g' },
    ],
    vitamins: [
      { label: 'Vitamin A', value: '450 µg' },
      { label: 'Vitamin C', value: '18 mg' },
      { label: 'Vitamin K', value: '80 µg' },
    ],
    minerals: [
      { label: 'Calcium',   value: '45 mg' },
      { label: 'Iron',      value: '1.2 mg' },
      { label: 'Magnesium', value: '18 mg' },
      { label: 'Potassium', value: '290 mg' },
    ],
    allergens: 'None',
  },
  {
    name: 'Garlic and Ginger',
    img: 'images/Ingredients/garlic-ginger.png',
    description: 'Powerful combination with strong anti-inflammatory and antioxidant properties. Known to boost immunity and improve digestion.',
    basic: [
      { label: 'Calories', value: '42 Kcal' },
      { label: 'Protein',  value: '1.8 g' },
      { label: 'Fiber',    value: '0.9 g' },
    ],
    carbs: [
      { label: 'Carbohydrates', value: '8.5 g' },
      { label: 'Sugar',         value: '0.3 g' },
      { label: 'Starch',        value: '1.2 g' },
    ],
    fat: [
      { label: 'Fat',             value: '0.2 g' },
      { label: 'Saturated',       value: '0.05 g' },
      { label: 'Monounsaturated', value: '0.01 g' },
      { label: 'Polyunsaturated', value: '0.08 g' },
      { label: 'Trans',           value: '0 g' },
    ],
    other: [
      { label: 'Fiber',   value: '0.9 g' },
      { label: 'Water',   value: '88 g' },
      { label: 'Alcohol', value: '0 g' },
    ],
    vitamins: [
      { label: 'Vitamin C',  value: '3.1 mg' },
      { label: 'Vitamin B6', value: '0.35 mg' },
      { label: 'Vitamin E',  value: '0.08 mg' },
    ],
    minerals: [
      { label: 'Calcium',   value: '18 mg' },
      { label: 'Iron',      value: '0.4 mg' },
      { label: 'Magnesium', value: '12 mg' },
      { label: 'Potassium', value: '415 mg' },
    ],
    allergens: 'None',
  },
]

const active = computed(() => ingredients[activeIndex.value])
</script>
