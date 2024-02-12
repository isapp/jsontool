<script setup lang="ts">
import NavButton from '@renderer/components/NavButton.vue'
import Versions from '../components/Versions.vue'
import Logo from '../components/Logo.vue'
import { Route } from '../enums/routes'
</script>

<template>
  <div class="flex flex-row w-screen items-center justify-center h-screen">
    <div class="relative flex flex-row justify-between w-8/12 max-w-[800px] z-10">
      <NavButton :to="Route.JsonPath">JSONPath Debugger</NavButton>
      <Logo class="w-20" />
      <NavButton :to="Route.JsonBeautify">JSON Beautify</NavButton>
    </div>
  </div>
  <Versions />
</template>

<style scoped></style>
