<script setup lang="ts">
export type BaseButtonProps = {
  size?: 'sm' | 'md' | 'lg'
}

defineProps<BaseButtonProps>()
defineEmits(['click'])
</script>

<template>
  <button
    class="bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-500"
    :class="{
      'py-2 px-4': size === 'sm',
      'p-4': size === 'md' || !size,
      'p-8': size === 'lg'
    }"
    @click.prevent="$emit('click')"
  >
    <h2 class="font-mono font-bold">
      <slot />
    </h2>
  </button>
</template>

<style scoped></style>
