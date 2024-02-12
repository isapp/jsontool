<script setup lang="ts">
import Dashboard from '../components/Dashboard.vue'
import NavBar from '../components/NavBar.vue'
import BorderedColumn from '../components/BorderedColumn.vue'
import JSONInputBlock, { ContentUpdate } from '../components/JSONInputBlock.vue'
import { useAppStore } from '../store'
import { computed } from 'vue'

const appStore = useAppStore()

const jsonContent = computed(() => appStore.jsonBeautifyContent)

const handleDataUpdate = (content: ContentUpdate) => {
  appStore.setJsonBeautifyContent(content)
}
</script>

<template>
  <Dashboard>
    <NavBar>
      <h1>JSON Beautify</h1>
    </NavBar>
    <BorderedColumn>
      <JSONInputBlock :render-content="jsonContent" @update="handleDataUpdate" />
    </BorderedColumn>
  </Dashboard>
</template>

<style scoped></style>
