<script setup lang="ts">
import { useCartStore } from '@/stores/cart.store'

const cart = useCartStore()
</script>

<template>
    <div>
        <h1>Carrinho</h1>

        <div v-if="cart.items.length === 0">
            Carrinho vazio
        </div>

        <div v-for="item in cart.items" :key="item.product.id">

            <h3>{{ item.product.title }}</h3>

            <p>Preço: R$ {{ item.product.price }}</p>

            <p>Quantidade: {{ item.quantity }}</p>

            <button @click="cart.increase(item.product.id)">+</button>

            <button @click="cart.decrease(item.product.id)">-</button>

            <button @click="cart.remove(item.product.id)">
                Remover
            </button>

        </div>

        <h2>Total: R$ {{ cart.total }}</h2>

    </div>
</template>