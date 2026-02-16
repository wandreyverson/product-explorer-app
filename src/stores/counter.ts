import { defineStore } from 'pinia'
import { fetchProducts } from '@/api/products'
import type { Product } from '@/model/products.model'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null
  }),

  actions: {
    async loadProducts() {
      this.loading = true
      try {
        this.products = await fetchProducts()
      } catch {
        this.error = 'Erro ao carregar produtos'
      } finally {
        this.loading = false
      }
    }
  }
})
