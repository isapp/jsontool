<script setup lang="ts">
import Copy from '../assets/copy.svg'
import CopySuccess from '../assets/copy_success.svg'
import BaseButton from './BaseButton.vue'
import { ref } from 'vue'

const emit = defineEmits(['copy'])
const written = ref(false)

const copyToClipboard = async (value) => {
  await window.electron.clipboard.writeText(value)
  written.value = true
  setTimeout(() => {
    written.value = false
  }, 2000)
}

const handleClick = () => {
  emit('copy', copyToClipboard)
}
</script>

<template>
  <BaseButton class="bg-gray-600 p-2 copy-icon" size="custom" @click="handleClick">
    <Transition mode="out-in">
      <img v-if="!written" alt="copy icon" class="w-5 h-5 copy" :src="Copy" />
      <img v-else alt="checkmark icon" class="w-5 h-5 filter-white" :src="CopySuccess" />
    </Transition>
  </BaseButton>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: scale(0);
}

.copy-icon img {
  transition:
    filter 0.15s,
    opacity 0.15s ease,
    transform 0.15s ease;
}

.copy-icon:hover img.copy,
.filter-white {
  filter: invert(100%) sepia(17%) saturate(2%) hue-rotate(236deg) brightness(107%) contrast(101%);
}
</style>
