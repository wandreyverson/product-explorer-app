<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchProduct } from '@/api/products'
import type { Product } from '@/model/products.model'
import AddToCartButton from '@/components/addToCartButton.vue'

const route = useRoute()
const router = useRouter()

const product = ref<Product>()

onMounted(async () => {
    product.value = await fetchProduct(Number(route.params.id))
})

function goBack() {
    router.back()
}
</script>

<template>
    <div v-if="product">
        <h1>{{ product.title }}</h1>

        <img :src="product.image" width="200" />

        <p>{{ product.description }}</p>

        <p>R$ {{ product.price }}</p>

        <button @click="goBack">Voltar</button>
        <AddToCartButton :product="product" />
    </div>
</template>