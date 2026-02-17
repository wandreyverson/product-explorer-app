<script setup lang="ts">
import type { Product } from '@/model/products.model';
import { useCartStore } from '@/stores/cart.store';

const props = defineProps<{
    product: Product
}>()

const cart = useCartStore()

function handleAdd() {
    cart.add(props.product)
    console.log(cart.items)
    console.log(cart.count)
}
</script>

<template>
    <button class="add-button" @click="handleAdd">
        🛒 Adicionar ao carrinho
    </button>
</template>

<style scoped>
.add-button {
    background-color: #42b883;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 6px;
}

.add-button:hover {
    background-color: #369870;
}
</style>