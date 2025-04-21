import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '~/types/product'

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>([])
  const page = ref(0)
  const limit = 6
  const allLoaded = ref(false)

  const fetchProducts = async () => {
    if (allLoaded.value) return
    const skip = page.value * limit
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    if (!res.ok) throw new Error('Failed to fetch')
    const data = await res.json()
    if (data.products.length === 0) {
      allLoaded.value = true
    } else {
      products.value.push(...data.products)
      page.value++
    }
  }

  const reset = () => {
    products.value = []
    page.value = 0
    allLoaded.value = false
  }

  return { products, fetchProducts, allLoaded, reset }
})
