<script setup lang="ts">
import Dashboard from '../components/Dashboard.vue'
import NavBar from '../components/NavBar.vue'
import NavButton from '../components/NavButton.vue'
import BorderedColumn from '../components/BorderedColumn.vue'
import JSONInputBlock from '../components/JSONInputBlock.vue'
</script>

<template>
  <Dashboard>
    <NavBar>
      <h1>JSON Beautify</h1>
      <NavButton to="/" size="sm">Home</NavButton>
    </NavBar>
    <BorderedColumn>
      <JSONInputBlock />
    </BorderedColumn>
  </Dashboard>
</template>

<style scoped></style>
