<script setup lang="ts">
import NavButton from '@renderer/components/NavButton.vue'
import Versions from '../components/Versions.vue'
import Logo from '../components/Logo.vue'
</script>

<template>
  <div class="flex flex-row w-screen items-center justify-center h-screen">
    <Logo class="absolute w-20 z-0" />
    <div class="relative flex flex-row justify-between w-1/2 z-10">
      <NavButton to="/json-path">JSONPath Debugger</NavButton>
      <NavButton to="/json-format">JSON Beautify</NavButton>
    </div>
  </div>
  <Versions />
</template>

<style scoped></style>
