<script setup lang="ts">
import BaseButton, { BaseButtonProps } from './BaseButton.vue'
import { useRouter } from 'vue-router'

interface NavButtonProps extends BaseButtonProps {
  to: string
}

const router = useRouter()

const props = defineProps<NavButtonProps>()

const handleClick = () => {
  router.push(props.to)
}
</script>

<template>
  <BaseButton :size="size" @click="handleClick">
    <slot />
  </BaseButton>
</template>

<style scoped></style>
