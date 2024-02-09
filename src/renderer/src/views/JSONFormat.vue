<script setup lang="ts">
import Dashboard from '../components/Dashboard.vue'
import NavBar from '../components/NavBar.vue'
import NavButton from '../components/NavButton.vue'
</script>

<template>
  <Dashboard>
    <NavBar>
      <h1>JSON Formatter</h1>
      <NavButton to="/" size="sm">Home</NavButton>
    </NavBar>
  </Dashboard>
</template>

<style scoped></style>
