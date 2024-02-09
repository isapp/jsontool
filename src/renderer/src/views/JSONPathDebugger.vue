<script setup lang="ts">
import Dashboard from '../components/Dashboard.vue'
import NavBar from '../components/NavBar.vue'
import NavButton from '../components/NavButton.vue'
import TwoColumns from '../components/TwoColumns.vue'
import BorderedColumn from '../components/BorderedColumn.vue'
import TextInput from '../components/TextInput.vue'
import CodeInputBlock, { ContentUpdate } from '../components/CodeInputBlock.vue'
import { computed, unref } from 'vue'
import { JSONPath } from 'jsonpath-plus'
import { useAppStore } from '../store'

const appStore = useAppStore()

const query = computed(() => appStore.jsonPathQuery)
const jsonContent = computed(() => appStore.jsonPathContent)
const queriedContent = computed(() => appStore.jsonPathQueriedContent)

const handleDataUpdate = (content: ContentUpdate) => {
  appStore.setJsonPathContent(content)
  appStore.setJsonPathQueriedContent({})
}

const handleQueryUpdate = (updatedQuery: string) => {
  appStore.setJsonPathQuery(updatedQuery)
  if (updatedQuery === '') {
    appStore.setJsonPathQueriedContent(unref(jsonContent))
  } else {
    const parsed = JSONPath({
      wrap: false,
      path: unref(query),
      json: unref(jsonContent)
    })
    appStore.setJsonPathQueriedContent(parsed)
  }
}
</script>

<template>
  <Dashboard>
    <NavBar class="mb-5">
      <h1>JSONPath Debugger</h1>
      <NavButton to="/" size="sm">Home</NavButton>
    </NavBar>
    <TwoColumns>
      <template #left>
        <BorderedColumn>
          <CodeInputBlock :render-content="jsonContent" @update="handleDataUpdate" />
        </BorderedColumn>
      </template>
      <template #right>
        <BorderedColumn>
          <CodeInputBlock :read-only="true" :render-content="queriedContent" />
        </BorderedColumn>
      </template>
    </TwoColumns>
    <TextInput class="mt-5" @update="handleQueryUpdate" />
  </Dashboard>
</template>

<style scoped></style>
