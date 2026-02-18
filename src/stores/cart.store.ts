import { defineStore } from 'pinia'
import type { Product } from '@/model/products.model'

interface CartItem {
    product: Product
    quantity: number
}

const STORAGE_KEY = 'cart'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: loadFromLocalStorage() as CartItem[]
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

            this.save()
        },

        remove(productId: number) {
            this.items = this.items.filter(
                item => item.product.id !== productId
            )

            this.save()
        },

        increase(productId: number) {
            const item = this.items.find(
                item => item.product.id === productId
            )

            if (item) {
                item.quantity++
                this.save()
            }
        },

        decrease(productId: number) {
            const item = this.items.find(
                item => item.product.id === productId
            )

            if (item && item.quantity > 1) {
                item.quantity--
                this.save()
            }
        },

        save() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items))
        },

        clear() {
            this.items = []
            localStorage.removeItem(STORAGE_KEY)
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

function loadFromLocalStorage(): CartItem[] {
    const data = localStorage.getItem(STORAGE_KEY)

    if (!data) return []

    try {
        return JSON.parse(data)
    } catch {
        return []
    }
}
