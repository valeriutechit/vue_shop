import { defineStore } from 'pinia'
import { type Product } from '../types/product'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[]
  }),
  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + item.price, 0),
  },
  actions: {
    addToCart(item: Product) {
      const exists = this.items.find(p => p.id === item.id)
      if (!exists) {
        this.items.push({ ...item, addedAt: new Date() })
      }
    },
    removeFromCart(id: number) {
      this.items = this.items.filter(item => item.id !== id)
    }
  },
  persist: true
})
