<template>
  <div class="border p-4 rounded shadow bg-white flex flex-col justify-between">
    <div>
      <h2 class="font-semibold text-lg mb-2">{{ product.title }}</h2>
      <p class="text-sm text-gray-600 mb-4">€{{ product.price }}</p>
    </div>
    <button
      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm mt-auto"
      @click="$emit('add', product)"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { type Product } from '~/types/product'

defineProps<{
  product: Product
}>()

defineEmits<{
  (e: 'add', product: Product): void
}>()
</script>
