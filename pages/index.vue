<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">🛒 Products</h1>

    <Loader v-if="ui.isLoading" />
    <div v-else-if="error" class="text-red-600 mt-4">Failed to load products.</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id" class="border p-4 rounded shadow">
        <h2 class="font-semibold text-lg mb-2">{{ product.title }}</h2>
        <p class="text-sm text-gray-600 mb-2">€{{ product.price }}</p>
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm"
          @click="addToCart(product)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Loader from '~/components/Loader.vue'
import { ref, onMounted } from 'vue'
import { useCartStore } from '~/stores/cart'
import { type Product } from '../types/product'

const products = ref<Product[]>([])
const cart = useCartStore()
const error = ref(false)

const ui = useUIStore()

const fetchProducts = async () => {
  ui.startLoading()
  error.value = false
  try {
    const res = await fetch('https://dummyjson.com/products?limit=6')
    if (!res.ok) throw new Error()
    const data = await res.json()
    products.value = data.products
  } catch (e) {
    error.value = true
  } finally {
    ui.stopLoading()
  }
}

const addToCart = (product: Product) => {
  cart.addToCart(product)
}

onMounted(fetchProducts)
</script>
