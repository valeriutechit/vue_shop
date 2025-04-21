import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds a product to cart', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 1, title: 'Test Product', price: 100 })

    expect(cart.items.length).toBe(1)
    expect(cart.items[0].title).toBe('Test Product')
  })

  it('removes a product from cart', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 1, title: 'Test Product', price: 100 })
    cart.removeFromCart(1)

    expect(cart.items.length).toBe(0)
  })
})
