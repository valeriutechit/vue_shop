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

  it('calculates total price correctly', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 1, title: 'Item 1', price: 10 })
    cart.addToCart({ id: 2, title: 'Item 2', price: 25 })

    expect(cart.total).toBe(35)
  })

  it('does not add the same item twice', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 1, title: 'Item 1', price: 10 })
    cart.addToCart({ id: 1, title: 'Item 1', price: 10 })

    expect(cart.items.length).toBe(1) // Adjust if your logic allows duplicates
  })

  it('removes correct item from cart', () => {
    const cart = useCartStore()
    cart.addToCart({ id: 1, title: 'Item 1', price: 10 })
    cart.addToCart({ id: 2, title: 'Item 2', price: 25 })
    cart.removeFromCart(1)

    expect(cart.items.length).toBe(1)
    expect(cart.items[0].id).toBe(2)
  })
})
