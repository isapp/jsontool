<script setup lang="ts">
type NavButtonProps = {
  to: string
  size?: 'sm' | 'md' | 'lg'
}
defineProps<NavButtonProps>()
</script>

<template>
  <router-link :to="to">
    <div
      class="bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-500"
      :class="{
        'py-2 px-4': size === 'sm',
        'p-4': size === 'md' || !size,
        'p-8': size === 'lg'
      }"
    >
      <h2 class="font-mono font-bold">
        <slot />
      </h2>
    </div>
  </router-link>
</template>

<style scoped></style>
