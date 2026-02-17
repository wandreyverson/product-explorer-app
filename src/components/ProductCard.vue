<script setup lang="ts">
import type { Product } from '@/model/products.model'
import AddToCartButton from './addToCartButton.vue'
import { RouterLink } from 'vue-router'

defineProps<{
    product: Product
}>()
</script>

<template>
    <div class="card">

        <RouterLink :to="`/produto/${product.id}`" class="card-link">
            <div class="image-container">
                <img :src="product.image" class="image" />
            </div>

            <div class="info">

                <h3 class="title">
                    {{ product.title }}
                </h3>

                <p class="category">
                    {{ product.category }}
                </p>

                <div class="rating">
                    ⭐ {{ product.rating.rate }}
                    <span class="rating-count">
                        ({{ product.rating.count }})
                    </span>
                </div>

                <div class="price">
                    R$ {{ product.price.toFixed(2) }}
                </div>

            </div>

        </RouterLink>

        <AddToCartButton :product="product" class="button" />

    </div>
</template>

<style scoped>
.card {
    background: white;
    border-radius: 12px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.2s ease;
    cursor: pointer;
    border: 1px solid #eee;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow:
        0 10px 20px rgba(0, 0, 0, 0.08);
}

.card-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.image-container {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

}

.image {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
}

.info {
    flex: 1;
}

.title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.category {
    font-size: 12px;
    color: #666;
    margin-bottom: 6px;
}

.rating {
    font-size: 13px;
    color: #f59e0b;
    margin-bottom: 6px;
}

.rating-count {
    color: #888;
    font-size: 12px;
}

.price {
    font-size: 18px;
    font-weight: bold;
    color: #111;
}

.button {
    margin-top: 10px;
}

@media (max-width: 768px) {

    .title {
        font-size: 13px;
    }

    .price {
        font-size: 16px;

    }

}
</style>
