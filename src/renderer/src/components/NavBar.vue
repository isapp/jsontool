<script setup lang="ts">
import NavButton from './NavButton.vue'
</script>

<template>
  <div class="flex flex-row justify-between items-center border-b-2 border-gray-500 pb-2.5 mb-5">
    <slot />
    <div>
      <NavButton class="mr-5" to="/json-path" size="sm">JSONPath Debugger</NavButton>
      <NavButton class="mr-5" to="/json-beautify" size="sm">JSON Beautify</NavButton>
      <NavButton to="/" size="sm">Home</NavButton>
    </div>
  </div>
</template>

<style scoped></style>
