<script setup lang="ts">

import { onMounted, computed } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/products.store'
import SearchInput from '@/components/SearchInput.vue'

const store = useProductStore()

onMounted(() => {
    store.loadProducts()
})

const categories = computed(() =>
    [...new Set(store.products.map(p => p.category))]
)

</script>

<template>
    <div class="container">

        <h1 class="title">Produtos</h1>

        <div class="filters">

           <SearchInput />

            <select
                class="select"
                @change="store.setCategory(($event.target as HTMLSelectElement).value)"
            >

                <option value="">
                    Todas categorias
                </option>

                <option
                    v-for="category in categories"
                    :key="category"
                    :value="category"
                >
                    {{ category }}
                </option>

            </select>

            <select
                class="select"
                @change="store.setSort(($event.target as HTMLSelectElement).value)"
            >

                <option value="">
                    Ordenar
                </option>

                <option value="price_asc">
                    Preço ↑
                </option>

                <option value="price_desc">
                    Preço ↓
                </option>

                <option value="assessment_desc">
                    Melhor avaliação
                </option>

                <option value="assessment_asc">
                    Pior avaliação
                </option>

            </select>

        </div>

        <div v-if="store.loading" class="status">
            Carregando...
        </div>

        <div v-if="store.error" class="status error">
            {{ store.error }}
        </div>

        <div class="grid">

            <ProductCard
                v-for="product in store.filteredProducts"
                :key="product.id"
                :product="product"
            />

        </div>
    </div>
</template>

<style scoped>

.container {

    padding: 20px;

}

.title {

    margin-bottom: 20px;

}

.filters {

    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    flex-wrap: wrap;

}

.input {

    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
    min-width: 220px;

}

.select {

    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #ddd;

}

.grid {

    display: grid;

    grid-template-columns:
        repeat(auto-fill, minmax(220px, 1fr));

    gap: 20px;

}

.status {

    margin: 20px 0;

}

.error {

    color: red;

}

</style>
