import type { Product } from '@/model/products.model'
import axios from 'axios'

const API_URL = 'https://fakestoreapi.com/products'

export async function fetchProducts(): Promise<Product[]> {
    const response = await axios.get(API_URL)
    return response.data
}

export async function fetchProduct(id: number): Promise<Product> {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
}
