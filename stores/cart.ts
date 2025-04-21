import { defineStore } from 'pinia'

export type Product = {
  id: number
  title: string
  price: number
  addedAt?: Date
}

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
  }
})
