<template lang="pug">
VContainer(d-flex style="background-color:;")
  VRow(justify="center" align="center")
    VCol(cols="10")
      h2 追蹤清單
    VDivider
    VCol(cols="10")
      VRow
        VCol(v-for="item in favorite" :key="item._id")
          VCard(height="360px" width="200px" elevation)
            RouterLink.text-decoration-none(:to="'/products/' + item.product._id" style="color:black")
              VRow
                VCol(cols="2")
                  VAvatar(size="30" class="my-2" style="margin-left: 10px;")
                    VImg(src="@/assets/user.jpg")
                VCol
                  VCardText.py-2 @{{ item.product.account }}
              VImg(:src="item.product.image" cover  :style="{ width: '90%',height:'200px', margin: 'auto', borderRadius: '10px' }")
              VCardText.py-0 {{ item.product.name }}
              VCardText.py-0(style="font-weight: bold;") NT${{ item.product.price }}
            VCardActions.py-0
              VBtn(color="red" icon @click="deleteItem(item._id)")
                VIcon mdi-heart
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRoute, useRouter } from 'vue-router'
import { ro } from 'vuetify/lib/locale/index.mjs'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()
// const route = useRoute()
const router = useRouter()
const favorite = ref([])

const deleteItem = async (id) => {
  try {
    await apiAuth.delete('/users/favorite/' + id)
    createSnackbar({
      text: '刪除成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    favorite.value = favorite.value.filter(item => item._id !== id)
  } catch (error) {
    if (error.response && error.response.status === 404) {
      createSnackbar({
        text: '產品找不到，可能已被刪除',
        showCloseButton: false,
        snackbarProps: {
          timeout: 2000,
          color: 'red',
          location: 'bottom'
        }
      })
    } else {
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
}

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
