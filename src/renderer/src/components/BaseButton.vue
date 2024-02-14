<script setup lang="ts">
export type BaseButtonProps = {
  size?: 'sm' | 'md' | 'lg' | 'custom'
}

defineProps<BaseButtonProps>()
defineEmits(['click'])
</script>

<template>
  <button
    class="rounded-lg cursor-pointer hover:bg-gray-500"
    :class="{
      ' ': size === 'custom',
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
