<script setup lang="ts">
import { useCartStore } from '@/stores/cart.store'
import { storeToRefs } from 'pinia'

const cart = useCartStore()
const { count } = storeToRefs(cart)
</script>

<template>
    <RouterLink to="/carrinho" class="cart-button">
        🛒 Carrinho ({{ count }})
    </RouterLink>
</template>

<style scoped>
.cart-button {
    background: black;
    color: white;
    padding: 8px 12px;
    text-decoration: none;
    border-radius: 6px;
}
</style>