<script setup lang="ts">
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'
import JsonEditorVue from 'json-editor-vue'
import { computed, nextTick, onMounted, ref, unref, watch } from 'vue'
import { nanoid } from 'nanoid'

type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue }

interface JSONObject {
  [k: string]: JSONValue
}

interface JSONArray extends Array<JSONValue> {}

export type ContentUpdate = {
  text: string
}

type CodeInputProps = {
  readOnly?: boolean
  renderContent?: JSONArray | JSONObject
}

const props = defineProps<CodeInputProps>()

const content = ref(props.renderContent ?? '')
const parsedContent = ref()
const id = nanoid()

const defaultContent = {
  json: {}
}

const emit = defineEmits(['update'])

const handleChange = (content: ContentUpdate) => {
  try {
    parsedContent.value = JSON.parse(content.text)
    emit('update', unref(parsedContent))
  } catch (e) {
    return
  }
}

const renderContent = computed(() => props.renderContent)

watch(renderContent, async (v) => {
  if (v) {
    //@ts-ignore
    content.value = v
    setTimeout(() => {
      document.querySelector(`#${id} .cm-scroller`)?.scrollTo(0, 0)
    }, 100)
  }
})
</script>

<template>
  <JsonEditorVue
    :id="id"
    v-model="content"
    class="jse-theme-dark h-full"
    mode="text"
    :read-only="readOnly"
    :main-menu-bar="false"
    :content="defaultContent"
    @change="handleChange"
  />
</template>

<style scoped></style>
