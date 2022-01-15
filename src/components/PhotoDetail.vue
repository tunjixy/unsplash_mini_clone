<template>
  <div>
    <div class="w-full">
      <img :src="photo.urls.regular" :alt="photo.alt_description" />
      <div class="py-4 px-8">
        <h2 class="text-primary text-lg font-bold">
          {{ photo.user.name }}
        </h2>
        <p class="text-secondary">{{ photo.user.location }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  photo: {
    type: Object,
    required: true,
  },
})
</script>
