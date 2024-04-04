<template lang="pug">
VContainer
  VRow(justify="center" align-item-center)
    VCol(cols="10")
      h2 商品列表
    VDivider
    VCol(cols="12" lg="10" xl="10")
      VRow
        VCol(v-for="product in products" :key="product._id" class="mb-4" cols="12" sm="6" md="4" lg="3" xl="2")
          ProductCard(v-bind="product")
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'
import { useUserStore } from '@/store/user'

const user = useUserStore()
const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const products = ref([])
const currentUser = ref({ account: user.account })

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/products', {
      params: {
        itemsPerPage: -1
      }
    })
    const filteredProducts = data.result.data.filter(product => product.account !== currentUser.value.account)
    products.value.push(...filteredProducts)
    // products.value.push(...data.result.data)
    await nextTick()
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})
</script>
