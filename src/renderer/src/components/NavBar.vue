<script setup lang="ts">
import NavButton from './NavButton.vue'
import Logo from './Logo.vue'
import { Route } from '../enums/routes'
</script>

<template>
  <div class="flex flex-row justify-between items-center border-b-2 border-gray-500 pb-2.5 mb-5">
    <div class="flex flex-row justify-center items-center">
      <router-link to="/">
        <Logo class="w-10 mr-5" />
      </router-link>
      <slot />
    </div>
    <div>
      <NavButton class="mr-5" :to="Route.JsonPath" size="sm">JSONPath Debugger</NavButton>
      <NavButton class="mr-5" :to="Route.JsonBeautify" size="sm">JSON Beautify</NavButton>
    </div>
  </div>
</template>

<style scoped></style>
