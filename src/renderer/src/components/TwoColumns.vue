<script setup lang="ts"></script>

<template>
  <div class="flex flex-row justify-evenly w-full gap-5">
    <div class="w-6/12">
      <slot name="left" />
    </div>
    <div class="w-6/12">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped></style>
