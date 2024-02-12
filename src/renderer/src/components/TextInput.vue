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
    <input
      v-model="text"
      class="border border-gray-500 rounded bg-transparent w-10/12 pl-2.5 h-10 focus-visible:outline-none focus-visible:border-gray-300"
      placeholder="$.households[*].name"
    />
  </div>
</template>

<style scoped></style>
