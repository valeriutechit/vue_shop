<template>
  <header class="flex justify-between items-center px-4 py-3 bg-gray-900 text-white shadow-md">
    <h1 class="text-xl font-bold">🛒 Simple Shop</h1>
    <div v-if="totalItems > 0" class="text-sm">
      {{ totalItems }} item{{ totalItems > 1 ? 's' : '' }} — €{{ totalPrice.toFixed(2) }}
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()

const totalItems = computed(() => cart.items.length)
const totalPrice = computed(() => cart.items.reduce((sum, item) => sum + item.price, 0))
</script>
