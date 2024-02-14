<script setup lang="ts">
import { computed, unref } from 'vue'
import Dashboard from '../components/Dashboard.vue'
import NavBar from '../components/NavBar.vue'
import TwoColumns from '../components/TwoColumns.vue'
import BorderedColumn from '../components/BorderedColumn.vue'
import TextInput from '../components/TextInput.vue'
import JSONInputBlock, { ContentUpdate } from '../components/JSONInputBlock.vue'
import { useAppStore } from '../store'
import FlexRow from '../components/FlexRow.vue'
import BaseButton from '../components/BaseButton.vue'
import CopyToClipboard from '../components/CopyToClipboard.vue'

const appStore = useAppStore()

const query = computed(() => appStore.jsonPathQuery)
const jsonContent = computed(() => appStore.jsonPathContent)
const queriedContent = computed(() => appStore.jsonPathQueriedContent)

const handleDataUpdate = (content: ContentUpdate) => {
  appStore.setJsonPathContent(content)
  appStore.setJsonPathQueriedContent({})
}

const handleQueryUpdate = async (updatedQuery: string) => {
  appStore.setJsonPathQuery(updatedQuery)
  if (updatedQuery === '') {
    appStore.setJsonPathQueriedContent(unref(jsonContent))
  } else {
    try {
      const parsed = await window.api.query({
        path: unref(query),
        json: JSON.stringify(unref(jsonContent))
      })

      appStore.setJsonPathQueriedContent(parsed)
    } catch (e) {
      /* empty */
    }
  }
}

const reset = () => {
  appStore.$resetJsonPath()
}

const handleCopy = (cb) => {
  cb(unref(query))
}
</script>

<template>
  <Dashboard>
    <NavBar>
      <h1>JSONPath Debugger</h1>
    </NavBar>
    <TwoColumns>
      <template #left>
        <BorderedColumn>
          <JSONInputBlock :render-content="jsonContent" @update="handleDataUpdate" />
        </BorderedColumn>
      </template>
      <template #right>
        <BorderedColumn>
          <JSONInputBlock :read-only="true" :render-content="queriedContent" />
        </BorderedColumn>
      </template>
    </TwoColumns>
    <FlexRow class="mt-5">
      <TextInput class="grow" @update="handleQueryUpdate">
        <template v-if="query" #fieldInset>
          <CopyToClipboard @copy="handleCopy" />
        </template>
      </TextInput>
      <BaseButton class="bg-gray-700" size="sm" @click="reset">Reset</BaseButton>
    </FlexRow>
  </Dashboard>
</template>

<style scoped></style>
