<template>
  <a href="recipe.html" :class="['rcard', big ? 'rcard-big' : '', stack ? 'rcard-stack' : '']">
    <div class="rcard-top">
      <div class="rcard-time">
        <img :src="$img('images/Icons/timer.svg')" alt="" class="rcard-time-icon-img">
        <span class="rcard-time-text">{{ recipe.time }}</span>
      </div>
      <div class="rcard-ingredients">
        <div
          v-for="(ing, i) in recipe.ingredients"
          :key="i"
          class="rcard-ingredient-thumb"
        >
          <img :src="$img(ing.img)" alt="">
        </div>
        <div v-if="recipe.moreIngredients" class="rcard-ingredient-more">+{{ recipe.moreIngredients }}</div>
      </div>
      <div class="rcard-save">
        <img :src="$img('images/Icons/save.svg')" alt="Save" width="24" height="24">
      </div>
    </div>

    <div :class="['rcard-img-wrap', big ? 'rcard-img-wrap-big' : '']">
      <img :src="$img(recipe.img)" :alt="recipe.imgAlt" :class="['rcard-img', big ? 'rcard-img-big' : '']" loading="lazy">
      <div v-if="recipe.hot" class="rcard-heat-badge">
        <img :src="$img('images/Icons/heat.svg')" alt="Hot" width="24" height="24">
      </div>
    </div>

    <div class="rcard-info">
      <span class="rcard-meta">{{ recipe.meta }}</span>
      <span :class="['rcard-name', big ? 'rcard-name-big' : '']">{{ recipe.name }}</span>
    </div>

    <p v-if="big && recipe.description" class="rcard-description">{{ recipe.description }}</p>
  </a>
</template>

<script setup>
defineProps({
  recipe: { type: Object, required: true },
  big: { type: Boolean, default: false },
  stack: { type: Boolean, default: false }
})
</script>
