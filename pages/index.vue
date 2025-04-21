<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">🛒 Products</h1>

    <Loader v-if="ui.isLoading && products.length === 0" />

    <div v-else-if="error" class="text-red-600 mt-4">Failed to load products.</div>

    <TransitionGroup
      name="fade"
      tag="div"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      v-else
    >
      <ProductCard
        v-for="product in products"
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
        :disabled="allLoaded || ui.isLoading"
      >
        {{ allLoaded ? 'All Loaded' : 'Load More' }}
      </button>
    </div>

    <Loader v-if="ui.isLoading && products.length > 0" />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useUIStore } from '~/stores/ui'
import { useProducts } from '~/composables/useProducts'
import { type Product } from '~/types/product'
import Loader from '~/components/Loader.vue'
import ProductCard from '~/components/ProductCard.vue'

useHead({
  title: 'Simple Shop',
  meta: [
    { name: 'description', content: 'A minimal Nuxt 3 shopping app with cart, products and Tailwind UI.' },
  ],
})

const cart = useCartStore()
const ui = useUIStore()

const { products, loadMore, allLoaded, error } = useProducts()

const addToCart = (product: Product) => {
  cart.addToCart(product)
}
</script>
