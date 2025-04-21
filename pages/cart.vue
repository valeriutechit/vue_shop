<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">🛍️ Your Cart</h1>

    <div v-if="cart.items.length === 0" class="text-gray-500">Your cart is empty.</div>

    <div v-else class="space-y-4">
      <CartItem
        v-for="item in sortedItems"
        :key="item.id"
        :item="item"
        @remove="cart.removeFromCart(item.id)"
      />

      <div class="text-right font-bold text-lg mt-4">
        Total: €{{ totalPrice.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartItem from '~/components/CartItem.vue'
import { useCartStore } from '~/stores/cart'
import { computed } from 'vue'

const cart = useCartStore()

const sortedItems = computed(() =>
  [...cart.items].sort((a, b) =>
    new Date(b.addedAt ?? 0).getTime() - new Date(a.addedAt ?? 0).getTime()
  )
)

const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price, 0)
)
</script>
