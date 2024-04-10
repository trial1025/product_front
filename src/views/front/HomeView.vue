<template lang="pug">
VContainer
  VRow
    //- VCol(cols="12")
    VCarousel.custom-carousel(hide-delimiters cycle  :show-arrows="false" style="height:50vh")
      VCarouselItem(cover style="background-color:blue")
        VImg(src="@/assets/carousel-1.png")
      VCarouselItem(cover)
        VImg(src="@/assets/carousel-2.png")
    //- 最新商品
    VCol(cols="12")
      h2 最新商品
    VCol(v-for="product in products.slice(0,4)" :key="product._id" class="mb-4" cols="12" sm="6" md="4" lg="3" xl="2")
      ProductCard(v-bind="product")
    //- 活動消息
    VCol(cols="12")
      h2 活動消息
    VCol(cols="4")
      VCard(width="300" height="300")
        VImg(src="@/assets/activity-1.png")
    VCol(cols="4")
      VCard(width="300" height="300")
        VImg(src="@/assets/activity-2.png")
    vCol(cols="4")
      VCard(width="300" height="300")
        VImg(src="@/assets/activity-3.png")
//- Footer
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
<!--
<style scoped>
.custom-carousel {
  height: 500px; /* 默认高度 */
}

@media (max-width: 768px) {
  .custom-carousel {
    height: 400px; /* 平板设备 */
  }
}

@media (max-width: 576px) {
  .custom-carousel {
    height: 300px; /* 手机设备 */
  }
}

</style> -->
