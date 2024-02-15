<script setup lang="ts">
import useModalEvents from './modalEvents'

const { dismissModal } = useModalEvents()
</script>

<template>
  <div class="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-10">
    <div
      class="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center z-0 bg-gray-900 opacity-95"
      @click="dismissModal"
    />
    <div
      class="relative flex flex-col justify-center items-center bg-gray-300 text-black z-10 rounded p-5"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
