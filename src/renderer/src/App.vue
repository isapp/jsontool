<script setup lang="ts">
import ModalBus from './modals/ModalBus.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center w-screen relative z-0">
    <router-view />
    <ModalBus />
  </div>
</template>
