import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(item: any) {
      this.items.unshift({ ...item, addedAt: new Date() })
    },
    removeFromCart(id: number) {
      this.items = this.items.filter(item => item.id !== id)
    }
  }
})