<template>
  <div
    :style="{ height: randomHeight + 'px' }"
    class="bg-light-gray rounded-md p-4 flex flex-col justify-end"
  >
    <div class="animate-pulse">
      <div class="bg-darker-gray h-3 w-48"></div>
      <div class="bg-darker-gray h-3 w-28 mt-1"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const randomHeight = computed(() => {
  return Math.floor(Math.random() * 300) + 100
})
</script>
