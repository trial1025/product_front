<template lang="pug">
VContainer.mt-6(d-flex)
  VRow(justify="center")
    VCol(md="6")
      VCard
        VImg(:src="product.image" cover :style="{width:'95%',margin:'auto',borderRadius: '10px' }")
    VCol(md="4")
      VCard
        VCardTitle(style="font-size: x-large;") {{ product.name }}
        VCardText(style="color: #E53935;font-size:x-large;font-weight: bolder;") NT${{ product.price }}
        VDivider(class="mt-1")
        VCardText
          h3 商品狀況
          p {{ product.condition }}
          h3 商品描述
          p(style="white-space: pre;") {{ product.description }}
          h4 商品類別
          p {{ product.category }}
          VForm(:disabled="isSubmitting" @submit.prevent="submit")
            VTextField(type="number" min="0" v-model.number="quantity.value.value" :error-messages="quantity.errorMessage.value" variant="outlined" label="數量" required density="compact" class="my-3")
            button(type="submit" :loading="isSubmitting" @click="getOrder" class="btn-red") 購買
      VCard(class="mt-2")
        VCardText 賣家資訊
        VRow
          VCol(cols="2")
            VAvatar(size="30" class="mb-2 ml-3")
              VImg(src="@/assets/user.jpg")
          VCol(cols="10")
            VCardText(class="py-1 m-0") @{{ product.account }}
        VCardText 上架時間: {{ product.createdAt }}
VOverlay.align-center.justify-center.text-center(:model-value="!product.sell" persistent)
  h1.text-red.text-h1 已下架
  VBtn(to="/" color="green") 回首頁
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '@/store/user'

const route = useRoute()
const router = useRouter()
const { api, apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()

const product = ref({
  _id: '',
  account: '',
  name: '',
  price: 0,
  description: '',
  condition: '',
  image: '',
  sell: true,
  category: '',
  createdAt: ''
})

const getOrder = () => {
  router.push('/orderreq')
}

const schema = yup.object({
  quantity: yup.number().typeError('缺少數量').required('缺少數量').min(1, '數量最小為 1')
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1
  }
})
const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product: product.value._id,
      quantity: values.quantity
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
})

onMounted(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.account = data.result.account
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.description = data.result.description
    product.value.condition = data.result.condition
    product.value.image = data.result.image
    product.value.sell = data.result.sell
    product.value.category = data.result.category
    product.value.createdAt = new Date(data.result.createdAt).toLocaleString()

    document.title = `購物網 | ${product.value.name}`
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
    router.push('/')
  }
})
</script>

<style scoped>
.btn-red{
  width: 100%;
  height: 35px;
  background-color: #E53935;
  color: aliceblue;
}
</style>
