import { defineStore } from 'pinia'
import type { Product } from '@/model/products.model'

interface CartItem {
    product: Product
    quantity: number
}

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[]
    }),

    actions: {
        add(product: Product) {
            const existing = this.items.find(
                item => item.product.id === product.id
            )

            if (existing) {
                existing.quantity++
            } else {
                this.items.push({
                    product,
                    quantity: 1
                })
            }
        },

        remove(productId: number) {
            this.items = this.items.filter(
                item => item.product.id !== productId
            )
        },

        increase(productId: number) {
            const item = this.items.find(
                item => item.product.id === productId
            )

            if (item) item.quantity++
        },

        decrease(productId: number) {
            const item = this.items.find(
                item => item.product.id === productId
            )

            if (item && item.quantity > 1) {
                item.quantity--
            }
        },

        clear() {
            this.items = []
        }
    },

    getters: {
        total: (state) =>
            state.items.reduce(
                (sum, item) =>
                    sum + item.product.price * item.quantity,
                0
            ),

        count: (state) =>
            state.items.reduce(
                (sum, item) => sum + item.quantity,
                0
            )
    },

    persist: true
})
