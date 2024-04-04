<template lang="pug">
VCard.product-card(rounded hover height="350px" d-flex justify-center style="text-align: left")
  VCol
    VRow
      VCol(cols="3" style="height:40px")
        VAvatar(size="30" style="margin-left: 30%;")
          VImg(src="@/assets/user.jpg")
      VCol(cols="9" style="height:40px")
        VCardText(class="py-1 m-0") {{ account }}
      VCol(cols="12" class="pb-0")
        VImg(cols="10" :src="image" cover :style="{ width: '90%',height:'200px', margin: 'auto', borderRadius: '10px' }" )
        RouterLink(:to="'/products/' + _id" class="name ml-4") {{ name }}
      VCol(cols="9" class="py-0")
        VCardText(class="p4" style="font-size: large;font-weight: bolder;") NT${{ price }}
        VCardText(class="p4") {{ condition }}
      VCol(cols="3")
        VBtn(block color="red" variant="text" x-small prepend-icon="mdi-cards-heart-outline" @click="addFavorite" class="pa-0")
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
    const { data } = await apiAuth.patch('/users/favorite', {
      product: props._id
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

.name{
  text-decoration: none;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 限制在两行 */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 1.5em;
  max-height: 3em; /* 基于行高的两倍 */
  color: black; /* 这里重复您的样式 */
}
</style>
