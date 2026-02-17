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

    <div class="container" v-if="product">

        <button class="back-button" @click="goBack">
            ← Voltar
        </button>

        <div class="product">
            <div class="image-section">

                <img
                    :src="product.image"
                    class="image"
                />

            </div>

            <div class="info-section">

                <h1 class="title">
                    {{ product.title }}
                </h1>

                <div class="category">
                    {{ product.category }}
                </div>

                <div class="rating">
                    ⭐ {{ product.rating.rate }}
                    <span>
                        ({{ product.rating.count }} avaliações)
                    </span>
                </div>

                <div class="price">
                    R$ {{ product.price.toFixed(2) }}
                </div>

                <p class="description">
                    {{ product.description }}
                </p>

                <AddToCartButton
                    :product="product"
                    class="cart-button"
                />

            </div>

        </div>

    </div>

</template>

<style scoped>

.container {
    max-width: 1100px;
    margin: auto;
    padding: 20px;
}

.back-button {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
    color: #2563eb;
}

.back-button:hover {
    text-decoration: underline;
}

.product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
}

.image-section {
    background: white;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.image {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
}

.info-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.title {
    font-size: 26px;
    font-weight: bold;
}

.category {
    color: #666;
    font-size: 14px;
}

.rating {
    color: #f59e0b;
    font-size: 16px;
}

.rating span {
    color: #666;
    font-size: 14px;
}

.price {
    font-size: 28px;
    font-weight: bold;
    color: #111;
}

.description {

    line-height: 1.6;

}

.cart-button {
    margin-top: 20px;
    width: 220px;

}

@media (max-width: 768px) {

    .product {
        grid-template-columns: 1fr;

    }

    .image {
        max-height: 300px;
    }

    .title {
        font-size: 22px;
    }
}

</style>
