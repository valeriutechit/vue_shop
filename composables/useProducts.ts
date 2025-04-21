// composables/useProducts.ts
import { ref, onMounted } from 'vue'
import { useProductStore } from '~/stores/products'
import { useUIStore } from '~/stores/ui'

export const useProducts = () => {
  const productStore = useProductStore()
  const ui = useUIStore()
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

  onMounted(() => {
    if (productStore.products.length === 0) {
      loadMore()
    }
  })

  return {
    products: productStore.products,
    allLoaded: productStore.allLoaded,
    loadMore,
    error
  }
}
