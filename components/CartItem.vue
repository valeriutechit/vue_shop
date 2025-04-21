<template>
  <div class="flex justify-between items-center border-b py-2">
    <div>
      <p class="font-medium">{{ item.title }}</p>
      <p class="text-sm text-gray-500">€{{ item.price }}</p>
      <p class="text-xs text-gray-400">Added: {{ formattedDate }}</p>
    </div>
    <button
      class="ml-4 text-red-600 hover:text-red-800 text-sm"
      @click="$emit('remove')"
    >
      Remove
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { type Product } from '~/types/product'

const props = defineProps<{
  item: Product
}>()

const formattedDate = computed(() =>
  new Date(props.item.addedAt ?? '').toLocaleString()
)
</script>
