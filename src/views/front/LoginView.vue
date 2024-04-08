<template lang="pug">
VContainer.d-flex
  VRow(justify="center" align="center" style="height: 80vh;")
    VCol
      VCard(elevation="2" class="pa-5 mx-auto" style="height: 80vh" rounded="md"
      theme="light" max-width="400px")
        VImg(src="@/assets/logo-lg.png" max-width="200px" class="my-auto")
        VDivider(class="my-2")
        h1.text-center.mt-6 登入
        VCol(cols="12")
          VForm.my-6(:disabled="isSubmitting" @submit.prevent="submit")
            VTextField(
              variant="outlined"
              hide-details="auto"
              label="帳號"
              color="#2A5264"
              density="compact"
              minlength="4" maxlength="20" counter
              v-model="account.value.value"
              :error-messages="account.errorMessage.value"
              bg-color="white"
            )
            VTextField(
              variant="outlined"
              hide-details="auto"
              color="#2A5264"
              density="compact"
              label="密碼" type="password"
              minlength="4" maxlength="20" counter
              v-model="password.value.value"
              :error-messages="password.errorMessage.value"
              bg-color="white"
            )
            VRow.justify-center.my-2
              VCol(cols="12" class="d-flex justify-center")
                VBtn(type="submit" elevation="1" color="red-darken-1") 登入
              VText.text-center.my-4
                | 還沒有帳號嗎？
                RouterLink.text-decoration-none(:to="{ name: 'Register' }" style="color:#2A5264;font-weight:border") 建立帳號
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { useApi } from '@/composables/axios'
import { useUserStore } from '@/store/user'

const { api } = useApi()

const router = useRouter()
const createSnackbar = useSnackbar()

const user = useUserStore()

// 定義註冊表單的資料格式
const schema = yup.object({
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符'),
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    user.login(data.result)
    createSnackbar({
      text: '登入成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
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

<style scoped>
body {
  background-color: #E1E8EE;
}

.btn-red{
  width: 100px;
  background-color: #E53935;
  color: aliceblue;
}
</style>
