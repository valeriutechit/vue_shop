<template>
  <header class="flex justify-between items-center px-4 py-3 bg-gray-900 text-white shadow-md">
    <NuxtLink to="/" class="text-xl font-bold hover:underline flex items-center gap-1">
      🛒 Simple Shop
    </NuxtLink>
    <div class="flex items-center gap-4 text-sm">
      <NuxtLink to="/cart" class="hover:underline">
        {{ totalItems }} item{{ totalItems !== 1 ? 's' : '' }} — €{{ totalPrice.toFixed(2) }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { computed } from 'vue'
import { NuxtLink } from '#components'

const cart = useCartStore()

const totalItems = computed(() => cart.items.length)
const totalPrice = computed(() => cart.items.reduce((sum, item) => sum + item.price, 0))
</script>
