<template lang="pug">
VCard.product-card(rounded hover width="250px" height="450px")(style="text-align: center;")
  VCardText {{ _id }}
  VImg(:src="image" cover :style="{ width: '90%',height:'200px', margin: 'auto', borderRadius: '10px' }" )
  VCardTitle
    RouterLink.link-style.text-decoration-none(:to="'/products/' + _id") {{ name }}
  VCardSubtitle NT${{ price }}
  VCardText(style="white-space: pre;") {{ description }}
  VCardActions
    VBtn(color="red" prepend-icon="mdi-cards-heart-outline" @click="addCart")
</template>

<script setup>
import { useApi } from '@/composables/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const user = useUserStore()
const createSnackbar = useSnackbar()
const router = useRouter()

const props = defineProps(['_id', 'category', 'description', 'image', 'name', 'price', 'sell'])

const addCart = async () => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product: props._id,
      quantity: 1
    })
    user.cart = data.result
    createSnackbar({
      text: '新增成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
  } catch (error) {
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
</script>

<style scoped>
.link-style{
  text-align: center;
  color: black
}
</style>
