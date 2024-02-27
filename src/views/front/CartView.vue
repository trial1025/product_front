<template lang="pug">
VContainer(d-flex)
  VRow(justify="center" align="center")
    VCol(cols="8")
      h1 追蹤清單
    VDivider
    VCol(cols="8")
      VDataTable(:items="favorite" :headers="headers")
        template(#[`item.product.name`]="{ item }")
          span(v-if="item.product.sell") {{ item.product.name }}
          span.text-red.text-decoration-line-through(v-else) {{ item.product.name }} (已下架)
        template(#[`item.product.image`]="{ item }")
          VImg(:src="item.product.image" height="100px")
        template(#[`item.action`]="{ item }")
          VBtn(variant="text" icon="mdi-heart" color="primary" @click="addFavorite(item.product._id, item.quantity * -1)")
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const favorite = ref([])
const headers = [
  { title: '圖片', key: 'product.image' },
  { title: '商品名稱', key: 'product.name' },
  { title: '賣家', key: 'product.account' },
  { title: '單價', key: 'product.price' },
  { title: '追蹤', key: 'action' }
]

const addFavorite = async (product, quantity) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/favorite', {
      product
    })
    user.favorite = data.result
    createSnackbar({
      text: '修改成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    const idx = favorite.value.findIndex(item => item.product._id === product)
    favorite.value[idx].quantity += quantity
    if (favorite.value[idx].quantity <= 0) {
      favorite.value.splice(idx, 1)
    }
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
}

// const isSubmitting = ref(false)
// const checkout = async () => {
//   isSubmitting.value = true
//   try {
//     await apiAuth.post('/orders')
//     user.favorite = 0
//     router.push('/orders')
//     createSnackbar({
//       text: '結帳成功',
//       showCloseButton: false,
//       snackbarProps: {
//         timeout: 2000,
//         color: 'green',
//         location: 'bottom'
//       }
//     })
//   } catch (error) {
//     console.log(error)
//     const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
//     createSnackbar({
//       text,
//       showCloseButton: false,
//       snackbarProps: {
//         timeout: 2000,
//         color: 'red',
//         location: 'bottom'
//       }
//     })
//   }
//   isSubmitting.value = false
// }

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/users/favorite')
    favorite.value.push(...data.result)
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
