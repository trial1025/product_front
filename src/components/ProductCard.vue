<template lang="pug">
VCard.product-card(rounded hover height="350px")(style="text-align: left;")
  VCardText(style="padding-top: 4px;padding-bottom: 4px;") {{ account }}
  VImg(:src="image" cover :style="{ width: '90%',height:'200px', margin: 'auto', borderRadius: '10px' }" )
  VCardText(class="p4")
    RouterLink.text-decoration-none(:to="'/products/' + _id" style="padding-top: 2px;padding-bottom: 2px;color: black;") {{ name }}
  VCardText(class="p4" style="font-size: large;font-weight: bolder;") NT${{ price }}
  VCardText(class="p4") {{ condition }}
  VCardActions(class="p4")
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

const props = defineProps(['_id', 'category', 'subs', 'condition', 'description', 'image', 'name', 'price', 'sell', 'account'])

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
.p4{
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
