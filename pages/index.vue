<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">🛒 Products</h1>

    <Loader v-if="ui.isLoading && productStore.products.length === 0" />

    <div v-else-if="error" class="text-red-600 mt-4">Failed to load products.</div>

    <TransitionGroup
      name="fade"
      tag="div"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      v-else
    >
      <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
        @add="addToCart"
      />
    </TransitionGroup>

    <div class="flex justify-center mt-6">
      <button
        id="loadMoreBtn"
        @click="loadMore"
        class="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        :disabled="productStore.allLoaded || ui.isLoading"
      >
        {{ productStore.allLoaded ? 'All Loaded' : 'Load More' }}
      </button>
    </div>

    <Loader v-if="ui.isLoading && productStore.products.length > 0" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useUIStore } from '~/stores/ui'
import { useProductStore } from '~/stores/products'
import type { Product } from '~/types/product'

import Loader from '~/components/Loader.vue'
import ProductCard from '~/components/ProductCard.vue'

const cart = useCartStore()
const ui = useUIStore()
const productStore = useProductStore()

const error = ref(false)

const loadMore = async () => {
  const button = document.getElementById('loadMoreBtn')
  const rect = button?.getBoundingClientRect()
  const top = rect ? rect.top + window.scrollY : null

  ui.startLoading()
  error.value = false
  try {
    await productStore.fetchProducts()
  } catch {
    error.value = true
  } finally {
    ui.stopLoading()
  }

  if (top !== null) {
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const addToCart = (product: Product) => {
  cart.addToCart(product)
}

onMounted(async () => {
  if (productStore.products.length === 0) {
    await loadMore()
  }
})
</script>
