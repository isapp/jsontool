import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const jsonPathContent = ref()
  const jsonPathQueriedContent = ref()
  const jsonPathQuery = ref()

  const jsonBeautifyContent = ref()

  const curriedAssign = (prop: any) => (value: any) => {
    prop.value = value
  }

  const setJsonPathContent = curriedAssign(jsonPathContent)
  const setJsonPathQueriedContent = curriedAssign(jsonPathQueriedContent)
  const setJsonPathQuery = curriedAssign(jsonPathQuery)
  const setJsonBeautifyContent = curriedAssign(jsonBeautifyContent)

  const $resetJsonPath = () => {
    setJsonPathQueriedContent({})
    setJsonPathContent({})
    setJsonPathQuery('')
  }

  const $resetJsonBeautify = () => {
    setJsonBeautifyContent({})
  }

  return {
    jsonPathContent,
    setJsonPathContent,
    jsonPathQueriedContent,
    setJsonPathQueriedContent,
    jsonPathQuery,
    setJsonPathQuery,
    $resetJsonPath,
    jsonBeautifyContent,
    setJsonBeautifyContent,
    $resetJsonBeautify
  }
})
