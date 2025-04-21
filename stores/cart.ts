import { defineStore } from 'pinia'
import { type Product } from '../types/product'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[]
  }),
  actions: {
    addToCart(item: Product) {
      this.items.unshift({ ...item, addedAt: new Date() })
    },
    removeFromCart(id: number) {
      this.items = this.items.filter(item => item.id !== id)
    }
  },
  persist: true
})
