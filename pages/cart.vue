<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">🛍️ Your Cart</h1>

    <div v-if="cart.items.length === 0" class="text-gray-500">Your cart is empty.</div>

    <div v-else class="space-y-4">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="border p-4 rounded shadow flex justify-between items-center"
      >
        <div>
          <h2 class="font-semibold">{{ item.title }}</h2>
          <p class="text-gray-600">€{{ item.price }}</p>
          <p class="text-xs text-gray-400">Added: {{ formatDate(item.addedAt) }}</p>
        </div>
        <button
          class="text-red-600 hover:underline text-sm"
          @click="cart.removeFromCart(item.id)"
        >
          Remove
        </button>
      </div>

      <div class="text-right font-bold text-lg mt-4">
        Total: €{{ totalPrice.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { computed } from 'vue'

const cart = useCartStore()

const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price, 0)
)

const formatDate = (date?: Date) =>
  date ? new Date(date).toLocaleString() : '—'
</script>
