<template lang="pug">
VCard.product-card(rounded hover height="350px" d-flex justify-center)(style="text-align: left")
  VCol
    VRow
      VCol(cols="2")
        VAvatar(size="30" class="mb-2" style="margin-left: 10px;")
          VImg(src="@/assets/user.jpg")
      VCol(cols="10")
        VCardText(class="py-1 m-0") {{ account }}
    VImg(:src="image" cover :style="{ width: '90%',height:'200px', margin: 'auto', borderRadius: '10px' }" )
    VCardText(class="py-1") {{ category }}
      RouterLink.text-decoration-none(:to="'/products/' + _id" style="padding-top: 2px;padding-bottom: 2px;color: black;") {{ name }}
  VRow
    VCol(cols="7" class="ml-2 py-0")
      VCardText(class="p4" style="font-size: large;font-weight: bolder;") NT${{ price }}
      VCardText(class="p4") {{ condition }}
    VCol(cols="4" class="ml-2 py-0")
      VCardActions(class="p4")
        VBtn(color="red" prepend-icon="mdi-cards-heart-outline" @click="addFavorite")
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

const addFavorite = async () => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.post('/users/favorite', {
      product: props._id
      quantity: 1
    })
    user.favorite = data.result
    createSnackbar({
      text: '加入最愛成功',
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
