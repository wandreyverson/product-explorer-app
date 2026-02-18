<script setup lang="ts">
import { useCartStore } from '@/stores/cart.store'
import { storeToRefs } from 'pinia'

const cart = useCartStore()
const { count } = storeToRefs(cart)
</script>

<template>
  <RouterLink to="/carrinho" class="cart-button">
    <span class="icon">🛒</span>
    <span class="label">Carrinho</span>
    <span v-if="count > 0" class="badge">{{ count }}</span>
  </RouterLink>
</template>

<style scoped>
.cart-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #111, #333);
  color: white;
  padding: 10px 16px;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  position: relative;
  transition: all 0.25s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.cart-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

.icon {
  font-size: 18px;
}

.label {
  font-size: 14px;
}

.badge {
  background: #ff4757;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 3px 7px;
  border-radius: 20px;
  min-width: 20px;
  text-align: center;
}
</style>
