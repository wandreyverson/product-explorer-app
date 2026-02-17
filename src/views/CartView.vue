<script setup lang="ts">
import { useCartStore } from '@/stores/cart.store'

const cart = useCartStore()
</script>

<template>
  <div class="cart-container">
    <h1>Carrinho</h1>

    <div v-if="cart.items.length === 0" class="empty-cart">
      Carrinho vazio
    </div>

    <div v-for="item in cart.items" :key="item.product.id" class="cart-item">
      
      <div class="item-info">
        <h3>{{ item.product.title }}</h3>
        <p>Preço: R$ {{ item.product.price.toFixed(2) }}</p>
        <p>Quantidade: {{ item.quantity }}</p>
      </div>

      <div class="item-actions">
        <button class="btn decrease" @click="cart.decrease(item.product.id)">-</button>
        <button class="btn increase" @click="cart.increase(item.product.id)">+</button>
        <button class="btn remove" @click="cart.remove(item.product.id)">Remover</button>
      </div>

    </div>

    <h2 v-if="cart.items.length === 0" class="total">Total: R$ {{ cart.total.toFixed(2) }}</h2>
  </div>
</template>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cart-container h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
}

.empty-cart {
  text-align: center;
  font-size: 1.2rem;
  color: #777;
  padding: 40px 0;
}

.cart-item {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.cart-item:hover {
  transform: translateY(-3px);
}

.item-info h3 {
  margin: 0 0 5px 0;
  font-size: 1.2rem;
  color: #222;
}

.item-info p {
  margin: 3px 0;
  color: #555;
}

.item-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
}

.btn {
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn.increase {
  background-color: #28a745;
  color: white;
}

.btn.increase:hover {
  background-color: #218838;
}

.btn.decrease {
  background-color: #dc3545;
  color: white;
}

.btn.decrease:hover {
  background-color: #c82333;
}

.btn.remove {
  background-color: #6c757d;
  color: white;
}

.btn.remove:hover {
  background-color: #5a6268;
}

.total {
  text-align: right;
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;
  margin-top: 20px;
}

@media (min-width: 600px) {
  .cart-item {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .item-actions {
    margin-top: 0;
  }
}
</style>
