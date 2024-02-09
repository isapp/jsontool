<script setup lang="ts">
import NavButton from '@renderer/components/NavButton.vue'
import Versions from '../components/Versions.vue'
</script>

<template>
  <div class="flex flex-row justify-between w-1/2">
    <NavButton to="/json-path">JSONPath Debugger</NavButton>
    <NavButton to="/json-format">JSON Formatter</NavButton>
  </div>
  <Versions />
</template>

<style scoped></style>
