<script setup lang="tsx">
import BaseModal from './BaseModal.vue'
import { onMounted, ref } from 'vue'
import useBus from '../eventBus/useBus'
import { Handler } from 'mitt'
import { CompositeModalEvent } from './modalEvents'
import BaseButton from '../components/BaseButton.vue'

const { bus } = useBus()
const visible = ref(false)
const modalContent = ref<string>()
const modalHref = ref<URL>()
const actionLabel = ref<string>()

const handleModalEvent: Handler<CompositeModalEvent> = (event) => {
  visible.value = true
  switch (event.type) {
    case 'confirm':
      modalContent.value = event.content
      break
    case 'cta':
      modalContent.value = event.content
      modalHref.value = event.action
      actionLabel.value = event.actionLabel
      break
  }
}

const handleModalDismiss = () => {
  visible.value = false
  modalContent.value = ''
  modalHref.value = undefined
}

const handleCTAConfirm = async () => {
  await window.api.openLink(modalHref.value?.toString())
  handleModalDismiss()
}

onMounted(() => {
  bus.on('showModal', handleModalEvent)
  bus.on('dismissModal', handleModalDismiss)
})
</script>

<template>
  <BaseModal v-if="visible">
    <template v-if="modalContent">
      <div>{{ modalContent }}</div>
    </template>
    <template v-if="modalHref">
      <BaseButton class="bg-gray-800 text-white mt-5" size="sm" @click="handleCTAConfirm">
        {{ actionLabel }}
      </BaseButton>
    </template>
  </BaseModal>
</template>

<style scoped></style>
