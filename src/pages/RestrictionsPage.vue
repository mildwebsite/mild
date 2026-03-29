<template>
  <div class="restr-page">

    <!-- Scrollable content -->
    <div class="restr-scroll">

      <!-- Header -->
      <div class="restr-header">
        <button class="restr-skip" @click="onSkip">Skip</button>
      </div>

      <!-- Logo + title -->
      <div class="restr-hero">
        <img :src="$img('images/svg/logo.svg')" alt="Mild" class="restr-logo">
        <div class="restr-titles">
          <div class="restr-title">Restrictions</div>
          <div class="restr-subtitle">Before we begin, please specify<br>your restrictions</div>
        </div>
      </div>

      <!-- Diet section -->
      <div class="restr-section">
        <div class="restr-section-label">Diet</div>
        <div class="restr-cards-wrap">
          <div class="restr-cards-row">
            <div
              v-for="item in dietItems"
              :key="item.id"
              class="restr-diet-card"
              :class="{ 'restr-card--selected': selected.has(item.id) }"
              @click="toggle(item.id)"
            >
              <img :src="$img(item.img)" :alt="item.label" class="restr-diet-img">
              <span class="restr-card-label">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Allergies section -->
      <div class="restr-section">
        <div class="restr-section-label">Allergies</div>
        <div class="restr-cards-wrap">
          <div class="restr-allergy-grid">
            <div
              v-for="item in allergyItems"
              :key="item.id"
              class="restr-allergy-card"
              :class="{ 'restr-card--selected': selected.has(item.id) }"
              @click="toggle(item.id)"
            >
              <template v-if="selected.has(item.id)">
                <div class="restr-allergy-circle" :style="{ background: item.color }">
                  <img :src="$img(item.img)" :alt="item.label" class="restr-allergy-circle-img">
                </div>
              </template>
              <template v-else>
                <img :src="$img(item.img)" :alt="item.label" class="restr-allergy-img">
              </template>
              <span class="restr-card-label">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Continue button (fixed bottom) -->
    <div class="restr-bottom">
      <button
        class="restr-continue"
        :class="{ 'restr-continue--active': selectedCount > 0 }"
        @click="onContinue"
      >Continue</button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const dietItems = [
  { id: 'meatless',    label: 'Meatless',    img: 'images/Restrictions/meatless.png',    color: '#CCEBD1' },
  { id: 'vegetarian', label: 'Vegetarian',   img: 'images/Restrictions/vegetarian.png',  color: '#CCEBD1' },
  { id: 'vegan',      label: 'Vegan',        img: 'images/Restrictions/vegan.png',       color: '#CCEBD1' },
  { id: 'gluten',     label: 'Gluten-Free',  img: 'images/Restrictions/gluten-free.png', color: '#F6E5B9' },
  { id: 'sugar',      label: 'Sugar-Free',   img: 'images/Restrictions/sugar-free.png',  color: '#F6E5B9' },
  { id: 'alcohol',    label: 'Alcohol-Free', img: 'images/Restrictions/alcohol-free.png',color: '#F6E5B9' },
]

const allergyItems = [
  { id: 'a-celery',      label: 'Celery',        img: 'images/Restrictions/celery.png',       color: '#CCEBE2' },
  { id: 'a-gluten',      label: 'Gluten',         img: 'images/Restrictions/gluten.png',        color: '#F6E5B9' },
  { id: 'a-crustaceans', label: 'Crustaceans',    img: 'images/Restrictions/crustaceans.png',   color: '#CCEBD1' },
  { id: 'a-eggs',        label: 'Eggs',           img: 'images/Restrictions/eggs.png',          color: '#F6E5B9' },
  { id: 'a-fish',        label: 'Fish',           img: 'images/Restrictions/fish.png',          color: '#CCEBE2' },
  { id: 'a-lupin',       label: 'Lupin',          img: 'images/Restrictions/lupin.png',         color: '#CCEBD1' },
  { id: 'a-milk',        label: 'Milk',           img: 'images/Restrictions/milk.png',          color: '#F6E5B9' },
  { id: 'a-molluscs',    label: 'Molluscs',       img: 'images/Restrictions/molluscs.png',      color: '#CCEBE2' },
  { id: 'a-mustard',     label: 'Mustard',        img: 'images/Restrictions/mustard.png',       color: '#F6E5B9' },
  { id: 'a-nuts',        label: 'Tree Nuts',      img: 'images/Restrictions/nuts.png',          color: '#CCEBD1' },
  { id: 'a-peanuts',     label: 'Peanuts',        img: 'images/Restrictions/peanuts.png',       color: '#CCEBE2' },
  { id: 'a-sesame',      label: 'Sesame seeds',   img: 'images/Restrictions/sesame.png',        color: '#F6E5B9' },
  { id: 'a-soya',        label: 'Soya',           img: 'images/Restrictions/soya.png',          color: '#CCEBD1' },
  { id: 'a-sulphites',   label: 'Sulphites',      img: 'images/Restrictions/sulphites.png',     color: '#CCEBE2' },
]

const selected = ref(new Set())
const selectedCount = computed(() => selected.value.size)

function toggle(id) {
  const s = new Set(selected.value)
  if (s.has(id)) s.delete(id)
  else s.add(id)
  selected.value = s
}

function onContinue() {
  if (selectedCount.value === 0) return
  localStorage.setItem('mild_restrictions', JSON.stringify([...selected.value]))
  location.href = 'home.html'
}

function onSkip() {
  location.href = 'home.html'
}
</script>
