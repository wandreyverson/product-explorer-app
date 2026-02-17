<script setup lang="ts">
import CartButton from './components/CardButton.vue'
</script>

<template>

<header class="header">

    <div class="header-container">

        <RouterLink to="/" class="logo">
            🛍️ Product Explorer
        </RouterLink>

        <CartButton />

    </div>

</header>

<main class="main">
    <router-view />
</main>

</template>

<style scoped>

.header {
    background: #111;
    padding: 12px 24px;
}

.header-container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 20px;
}

.logo {
    color: white;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
}

.main {
    max-width: 1200px;
    margin: auto;
    padding: 24px;
}

</style>
