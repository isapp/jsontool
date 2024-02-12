<script setup lang="ts">
import BaseButton, { BaseButtonProps } from './BaseButton.vue'
import { useRoute, useRouter } from 'vue-router'

interface NavButtonProps extends BaseButtonProps {
  to: string
}

const router = useRouter()
const route = useRoute()

const props = defineProps<NavButtonProps>()

const handleClick = () => {
  router.push(props.to)
}
</script>

<template>
  <BaseButton
    :class="{ 'bg-gray-500': route.path === to, 'bg-gray-700': route.path !== to }"
    :size="size"
    @click="handleClick"
  >
    <slot />
  </BaseButton>
</template>

<style scoped></style>
