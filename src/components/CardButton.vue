<script setup lang="ts">
import { useCartStore } from '@/stores/cart.store'

const cart = useCartStore()
</script>

<template>
    <RouterLink to="/carrinho" class="cart-button">
        🛒 Carrinho ({{ cart.count }})
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