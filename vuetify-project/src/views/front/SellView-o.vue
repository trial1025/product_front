<template lang="pug">
div.grid
  div.col-12
    h1 商品列表
  div.col-3(v-for="product in products" :key="product._id" :style="{ 'border': '1px solid red' }")
    ProductCard(v-bind="product")
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
// import { useToast } from 'primevue/toastservice'
import ProductCard from '@/components/ProductCard.vue'

const { api } = useApi()
// const toast = useToast()

const products = ref([])

onMounted(async () => {
  try {
    const { data } = await api.get('/products', {
      params: {
        itemsPerPage: -1
      }
    })
    products.value.push(...data.result.data)
  } catch (error) {
    console.log(error)
    // const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    // toast.add({ severity: 'error', summary: text, life: 2000 })
  }
})
</script>
