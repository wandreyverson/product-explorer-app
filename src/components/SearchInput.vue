<script setup lang="ts">
import { useProductStore } from '@/stores/products.store'

const store = useProductStore()

function onInput(event: Event) {

    const value = (event.target as HTMLInputElement).value

    store.setSearch(value)

}
</script>

<template>

<input
    placeholder="Pesquisar produtos..."
    class="search"
    @input="onInput"
/>

</template>

<style scoped>

.search {
    padding: 8px;
    border-radius: 8px;
    width: 300px;
}

</style>
