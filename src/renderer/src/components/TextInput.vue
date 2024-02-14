<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAppStore } from '../store'

const emit = defineEmits(['update'])

const appStore = useAppStore()

const text = ref(appStore.jsonPathQuery)

watch(text, (v) => {
  emit('update', v)
})
</script>

<template>
  <div class="flex flex-row justify-center items-center">
    <div class="w-10/12 h-12 relative">
      <input
        v-model="text"
        class="w-full h-full pl-2.5 border border-gray-500 rounded bg-transparent focus-visible:outline-none focus-visible:border-gray-300"
        placeholder="$.households[*].name"
      />
      <div class="absolute flex flex-col justify-center items-center h-full pr-2.5 top-0 right-0">
        <slot name="fieldInset" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
