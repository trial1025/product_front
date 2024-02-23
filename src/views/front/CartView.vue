<template>
  <div class="grid">
    <div class="col-10 mt-4">
      <DataTable :value="cart" dataKey="id"  tableStyle="min-height: 15rem">
        <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">購物車</span>
                </div>
            </template>
        <Column field="product.name" header="商品名稱" :body="productNameTemplate"></Column>
        <Column header="圖片">
          <template #body="slotProps">
            <img :src="slotProps.data.product.image" :alt="slotProps.data.image" class="w-6rem border-round" />
          </template>
        </Column>
        <Column field="product.account" header="賣家"></Column>
        <Column field="product.price" header="單價"></Column>
        <Column field="quantity" header="數量" :body="quantityTemplate">
          <template #body="slotProps">
            <Button icon="pi pi-minus" class="p-button-text p-button-danger" @click="addCart(slotProps.data.product._id, -1)" />
            {{ slotProps.data.quantity }}
            <Button icon="pi pi-plus" class="p-button-text p-button-success" @click="addCart(slotProps.data.product._id, 1)" />
          </template>
        </Column>
        <Column header="操作" :body="actionTemplate">
          <template #body="slotProps">
            <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="addCart(slotProps.data.product._id, slotProps.data.quantity * -1)" />
          </template>
        </Column>
      </DataTable>
      <div class="col-12 text-center">
        <p>總金額: {{ total }}</p>
        <Button label="結帳" :disabled="!canCheckout"  :loading="isSubmitting" @click="checkout" class="bg-green-500 border-round text-white" style="width: 50px;"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const cart = ref([])

// 加載購物車
onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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

// 商品名稱模板
const productNameTemplate = (item) => {
  return item.product.sell ? item.product.name : `<span class="text-decoration-line-through">${item.product.name} (已下架)</span>`
}

const total = computed(() => {
  return cart.value.reduce((total, current) => {
    return total + current.quantity * current.product.price
  }, 0)
})

const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const addCart = async (product, quantity) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product,
      quantity
    })
    user.cart = data.result
    createSnackbar({
      text: '修改成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    const idx = cart.value.findIndex(item => item.product._id === product)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
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

const isSubmitting = ref(false)
const checkout = async () => {
  isSubmitting.value = true
  try {
    await apiAuth.post('/orders')
    user.cart = 0
    router.push('/orders')
    createSnackbar({
      text: '結帳成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
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
  isSubmitting.value = false
}

</script>

<style>
.text-decoration-line-through {
  text-decoration: line-through;
}

.grid {
  display: flex;
  justify-content: center;
}
</style>
