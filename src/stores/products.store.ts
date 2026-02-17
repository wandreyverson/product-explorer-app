import { defineStore } from 'pinia'
import { fetchProducts } from '@/api/products'
import type { Product } from '@/model/products.model'

export const useProductStore = defineStore('product', {

  state: () => ({

    products: [] as Product[],
    loading: false,
    error: null as string | null,

    // filtros
    searchTerm: '',
    selectedCategory: '',
    sortBy: ''

  }),

  getters: {

    filteredProducts: (state) => {

      let result = state.products

      // BUSCA
      if (state.searchTerm) {

        result = result.filter(product =>
          product.title
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
        )

      }

      // CATEGORIA
      if (state.selectedCategory) {

        result = result.filter(product =>
          product.category === state.selectedCategory
        )

      }

      // ORDENAÇÃO
      if (state.sortBy === 'price_asc') {

        result = [...result].sort((a, b) =>
          a.price - b.price
        )

      }

      if (state.sortBy === 'price_desc') {

        result = [...result].sort((a, b) =>
          b.price - a.price
        )

      }

      if (state.sortBy === 'assessment_desc') {

        result = [...result].sort((a, b) =>
          Number(b.rating.rate) - Number(a.rating.rate)
        )

      }

      if (state.sortBy === 'assessment_asc') {

        result = [...result].sort((a, b) =>
          Number(a.rating.rate) - Number(b.rating.rate)
        )

      }

      return result

    }

  },

  actions: {

    async loadProducts() {

      this.loading = true
      this.error = null

      try {

        this.products = await fetchProducts()

      } catch {

        this.error = 'Erro ao carregar produtos'

      } finally {

        this.loading = false

      }

    },

    setSearch(term: string) {
      this.searchTerm = term
    },

    setCategory(category: string) {
      this.selectedCategory = category
    },

    setSort(sort: string) {
      this.sortBy = sort
    }

  }

})
