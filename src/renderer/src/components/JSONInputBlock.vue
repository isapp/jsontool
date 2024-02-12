<script setup lang="ts">
import 'vanilla-jsoneditor/themes/jse-theme-dark.css'
import JsonEditorVue from 'json-editor-vue'
import { computed, nextTick, ref, unref, watch } from 'vue'
import { nanoid } from 'nanoid'
import { isEmptyObject } from '../utils'

type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue }

interface JSONObject {
  [k: string]: JSONValue
}

interface JSONArray extends Array<JSONValue> {}

interface JSONEditor {
  jsonEditor: {
    select: (arg1: any) => void
    set: ({ json }: { json: JSONValue | undefined }) => Promise<void>
  }
}

export type ContentUpdate = {
  text: string
}

type CodeInputProps = {
  readOnly?: boolean
  renderContent?: JSONArray | JSONObject
}

const props = defineProps<CodeInputProps>()

const editor = ref<JSONEditor>()
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
    /* empty */
  }
}

const renderContent = computed(() => props.renderContent)
watch(renderContent, async (v) => {
  if (editor.value?.jsonEditor) {
    if (isEmptyObject(v)) {
      editor.value?.jsonEditor.select(null)
    }

    await editor.value?.jsonEditor.set({ json: v })

    setTimeout(() => {
      try {
        document.querySelector(`#${id} .cm-scroller`)?.scrollTo(0, 0)
      } catch (e) {
        /* empty */
      }
    }, 150)
  }
})
</script>

<template>
  <JsonEditorVue
    :id="id"
    ref="editor"
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
