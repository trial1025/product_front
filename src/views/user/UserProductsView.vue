<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1.text-center 商品管理
    VDivider
    VCol(cols="12")
      VBtn(color="green" @click="openDialog()") 新增商品
    VCol(cols="12")
      VDataTableServer(
        v-model:items-per-page="tableItemsPerPage"
        v-model:sort-by="tableSortBy"
        v-model:page="tablePage"
        :items="tableProducts"
        :headers="tableHeaders"
        :loading="tableLoading"
        :items-length="tableItemsLength"
        :search="tableSearch"
        @update:items-per-page="tableLoadItems"
        @update:sort-by="tableLoadItems"
        @update:page="tableLoadItems"
        hover
      )
        template(#top)
          VTextField(
            label="搜尋"
            append-icon="mdi-magnify"
            v-model="tableSearch"
            @click:append="tableApplySearch"
            @keydown.enter="tableApplySearch"
          )
        template(#[`item.image`]="{ item }")
          VImg(:src="item.image" height="50px")
        template(#[`item.sell`]="{ item }")
          VIcon(icon="mdi-check" v-if="item.sell")
        template(#[`item.edit`]="{ item }")
          VBtn(icon="mdi-pencil" variant="text" color="green" @click="openDialog(item)")
          //- fix
          VBtn(icon="mdi-delete" variant="text" color="red" @click="deleteItem(item._id)")
VDialog(v-model="dialog" persistent width="500px")

  VForm(:disabled="isSubmitting" @submit.prevent="submit")
    VCard(evevation="8" max-width="448" rounded="lg")
      VCardTitle {{ dialogId === '' ? '新增商品' : '編輯商品' }}
      VCardText

        VRow
          VCol(cols="6")
            VSelect(
              col="6"
              clearable
              label="分類"
              density="compact"
              variant="outlined"
              :items="categories"
              v-model="category.value.value"
              :error-messages="category.errorMessage.value"
            )
          VCol(cols="6")
            VSelect(
              col="6"
              clearable
              label="子分類"
              density="compact"
              variant="outlined"
              :items="sub"
              v-model="subs.value.value"
              :error-messages="subs.errorMessage.value"
            )
        VTextField(
          clearable
          label="名稱"
          density="compact"
          variant="outlined"
          v-model="name.value.value"
          :error-messages="name.errorMessage.value"
        )
        VSelect(
          clearable
          label="商品狀況"
          variant="outlined"
          density="compact"
          :items="conditions"
          v-model="condition.value.value"
          :error-messages="condition.errorMessage.value"
        )
        VTextField(
          clearable
          label="價格"
          variant="outlined"
          density="compact"
          prefix="$"
          type="number" min="0"
          v-model="price.value.value"
          :error-messages="price.errorMessage.value"
        )
        VTextarea(
          clearable
          label="說明"
          variant="outlined"
          density="compact"
          rows="3"
          v-model="description.value.value"
          :error-messages="description.errorMessage.value"
        )
        //- VSelect(
        //-   clearable
        //-   label="品牌"
        //-   variant="outlined"
        //-   density="compact"
        //- )
        VueFileAgent(
          v-model="fileRecords"
          v-model:rawModelValue="rawFileRecords"
          accept="image/jpeg,image/png"
          deletable
          :error-text="{type: '檔案格式不支援', size: '檔案超過 1MB 大小限制'}"
          help-text="選擇檔案或拖曳到這裡"
          :max-files="1"
          max-size="1MB"
          ref="fileAgent"
        )
        VCheckbox(
          label="上架"
          v-model="sell.value.value"
          :error-messages="sell.errorMessage.value"
          density="compact"
        )
      VCardActions
        VSpacer
        VBtn(color="red" :disabled="isSubmitting" @click="closeDialog") 取消
        VBtn(color="green" type="submit" :loading="isSubmitting") 刊登
</template>

<script setup>
import { ref } from 'vue'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'

const user = useUserStore()

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const fileAgent = ref(null)

// 表單對話框的開啟狀態
const dialog = ref(false)
// 表單對話框正在編輯的商品 ID，空的話代表是新增商品
const dialogId = ref('')
// 打開編輯對話框
const openDialog = (item) => {
  if (item) {
    dialogId.value = item._id
    name.value.value = item.name
    price.value.value = item.price
    description.value.value = item.description
    category.value.value = item.category
    subs.value.value = item.subs
    condition.value.value = item.condition
    sell.value.value = item.sell
  } else {
    dialogId.value = ''
  }
  dialog.value = true
}
// 關閉對話框
const closeDialog = () => {
  dialog.value = false
  resetForm()
  fileAgent.value.deleteFileRecord()
}

// 分類
const categories = ['反曲弓', '複合弓', '傳統弓', '周邊商品', '其他']
const sub = ['弓身', '弓臂', '瞄準器', '安定桿', '箭', '護具', '配件', '其他']
// 商品狀況
const conditions = ['全新', '幾乎全新', '狀況良好', '輕度使用', '狀況尚可', '狀況差']
// 表單驗證
const schema = yup.object({
  name: yup
    .string()
    .required('缺少商品名稱'),
  price: yup
    .number()
    .typeError('商品價格格式錯誤')
    .required('缺少商品價格')
    .min(0, '商品價格不能小於 0'),
  description: yup
    .string()
    .required('缺少商品說明'),
  category: yup
    .string()
    .required('缺少商品分類')
    .test('isCategory', '商品分類錯誤', value => categories.includes(value)),
  subs: yup
    .string()
    .required('缺少商品子分類')
    .test('isSubs', '商品子分類錯誤', value => sub.includes(value)),
  condition: yup
    .string()
    .required('缺少商品狀況')
    .test('isCondition', '商品狀況錯誤', value => conditions.includes(value)),
  sell: yup
    .boolean()
})
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    account: user.account,
    name: '',
    price: 0,
    description: '',
    category: '',
    subs: '',
    condition: '',
    sell: false
  }
})
const name = useField('name')
const price = useField('price')
const description = useField('description')
const category = useField('category')
const subs = useField('subs')
const condition = useField('condition')
const sell = useField('sell')

const fileRecords = ref([])
const rawFileRecords = ref([])

const submit = handleSubmit(async (values) => {
  if (fileRecords.value[0]?.error) return
  if (dialogId.value === '' && fileRecords.value.length === 0) return
  try {
    // 建立 FormData 物件
    // 使用 fd.append(欄位, 值) 將資料放進去
    const fd = new FormData()
    for (const key in values) {
      fd.append(key, values[key])
    }
    if (fileRecords.value.length > 0) {
      fd.append('image', fileRecords.value[0].file)
    }

    if (dialogId.value === '') {
      await apiAuth.post('/products', fd)
    } else {
      await apiAuth.patch('/products/' + dialogId.value, fd)
    }

    createSnackbar({
      text: dialogId.value === '' ? '新增成功' : '編輯成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    closeDialog()
    tableApplySearch()
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

// 表格每頁幾個
const tableItemsPerPage = ref(10)
// 表格排序
const tableSortBy = ref([
  { key: 'createdAt', order: 'desc' }
])
// 表格頁碼
const tablePage = ref(1)
// 表格商品資料陣列
const tableProducts = ref([])
// 表格欄位設定
const tableHeaders = [
  // { title: '帳號', align: 'center', sortable: false, key: 'account' },
  { title: '名稱', align: 'center', sortable: true, key: 'name' },
  { title: '圖片', align: 'center', sortable: false, key: 'image' },
  { title: '價格', align: 'center', sortable: true, key: 'price' },
  // { title: '說明', align: 'center', sortable: true, key: 'description' },
  { title: '分類', align: 'center', sortable: true, key: 'category' },
  { title: '子分類', align: 'center', sortable: true, key: 'subs' },
  { title: '商品狀況', align: 'center', sortable: true, key: 'condition' },
  { title: '上架', align: 'center', sortable: true, key: 'sell' },
  { title: '編輯', align: 'center', sortable: false, key: 'edit' }
]
// 表格載入狀態
const tableLoading = ref(true)
// 表格全部資料數
const tableItemsLength = ref(0)
// 表格搜尋文字
const tableSearch = ref('')
// 表格載入資料
const tableLoadItems = async () => {
  tableLoading.value = true
  try {
    const { data } = await apiAuth.get('/products/me', {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0]?.key || 'createdAt',
        sortOrder: tableSortBy.value[0]?.order === 'asc' ? 1 : -1,
        search: tableSearch.value
      }
    })
    tableProducts.value.splice(0, tableProducts.value.length, ...data.result.data)
    tableItemsLength.value = data.result.total
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
  tableLoading.value = false
}
tableLoadItems()
// 表格套用搜尋
const tableApplySearch = () => {
  tablePage.value = 1
  tableLoadItems()
}

const deleteItem = async (id) => {
  try {
    await apiAuth.delete('/products/' + id)
    createSnackbar({
      text: '刪除成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    tableLoadItems()
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
