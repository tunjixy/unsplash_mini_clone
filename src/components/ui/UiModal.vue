<template>
  <teleport to="body">
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="showModal"
        class="fixed z-30 inset-0 overflow-y-auto bg-black bg-opacity-60 py-6 px-3"
        @click.self="dismiss"
      >
        <div
          @click.self="dismiss"
          class="flex items-start justify-center relative"
          role="dialog"
        >
          <transition
            enter-active-class="transition ease-out duration-300 transform"
            enter-from-class="opacity-0 translate-y-10 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
          >
            <div
              v-if="showModal"
              class="bg-white rounded-md shadow-xl overflow-hidden w-full max-w-xl font-MaisonNeue"
            >
              <slot />
              <div class="absolute top-5 right-5" @click="$emit('close')">
                <img
                  v-svg-inline
                  src="@/assets/icons/times.svg"
                  class="h-5 w-5 cursor-pointer text-white"
                />
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import {
  ref,
  watch,
  onMounted,
  onUnmounted,
  defineProps,
  defineEmits,
} from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const showModal = ref(false)

function dismiss() {
  emit('close')
}

const escapeHandler = (e) => {
  if (e.key === 'Escape' && showModal.value) {
    dismiss()
  }
}

onMounted(() => {
  document.addEventListener('keydown', escapeHandler)
})

onUnmounted(() => {
  document.removeEventListener('keydown', escapeHandler)
})

watch(
  () => props.show,
  (show) => {
    showModal.value = show
    if (showModal.value) {
      document.body.style.setProperty('overflow', 'hidden')
    } else {
      document.body.style.removeProperty('overflow')
    }
  }
)
</script>
