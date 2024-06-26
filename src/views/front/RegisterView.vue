<template lang="pug">
VContainer.d-flex
  VRow(justify="center" align="center" style="height: 90vh;")
    VCol(lg="4" md="6" sm="8" xs="12")
      VCard(elevation="2" class="pa-5 mx-auto" style="height: 80vh" rounded="md"
      theme="light" max-width="400px")
        VImg(src="@/assets/logo-lg.png" max-width="200px" class="my-auto")
        VDivider(class="my-2")
        h1.text-center.my-2 建立帳號
        VCol(cols="12")
          VForm(:disabled="isSubmitting" @submit.prevent="submit")
            VTextField(
              label="帳號"
              color="#2A5264"
              bg-color="white"
              variant="outlined"
              density="compact"
              minlength="4" maxlength="20" counter
              v-model="account.value.value"
              :error-messages="account.errorMessage.value"
            )
            VTextField(
              variant="outlined"
              color="#2A5264"
              bg-color="white"
              density="compact"
              label="信箱" type="email"
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
            )
            VTextField(
              variant="outlined"
              color="#2A5264"
              bg-color="white"
              density="compact"
              label="密碼" type="password"
              minlength="4" maxlength="20" counter
              v-model="password.value.value"
              :error-messages="password.errorMessage.value"
            )
            VTextField(
              variant="outlined"
              color="#2A5264"
              bg-color="white"
              density="compact"
              label="確認密碼" type="password"
              minlength="4" maxlength="20" counter
              v-model="passwordConfirm.value.value"
              :error-messages="passwordConfirm.errorMessage.value"
            )
            VText.text-body-2
            | 註冊即表示你同意我們的
            a(href="") 服務條款
            | &
            a(href="") 隱私政策
            VRow.justify-center.my-2
              VCol(cols="12" class="d-flex justify-center")
                VBtn(type="submit" elevation="1" color="red-darken-1") 註冊
              VText.text-center.my-4
                | 已有帳號嗎？
                RouterLink.text-decoration-none(:to="{ name: 'Login' }" style="color:#2A5264;font-weight:border") 登入
</template>

<script setup>
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { useApi } from '@/composables/axios'

const { api } = useApi()

const router = useRouter()
const createSnackbar = useSnackbar()

// 定義註冊表單的資料格式
const schema = yup.object({
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符'),
  email: yup
    .string()
    .required('信箱為必填欄位')
    // .test(自訂驗證名稱, 錯誤訊息, 驗證function)
    .test(
      'isEmail', '信箱格式錯誤',
      (value) => {
        return validator.isEmail(value)
      }
    ),
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符'),
  passwordConfirm: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(20, '密碼長度不符')
    // .oneOf 只允許符合陣列內其中一個值
    // .oneOf(陣列, 錯誤訊息)
    // .ref('password') 代表這個 schema 的 password 欄位值
    .oneOf([yup.ref('password')], '密碼不一致')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})

const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users', {
      account: values.account,
      email: values.email,
      password: values.password
    })
    createSnackbar({
      text: '註冊成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/login')
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
a {
  color: #000;
}
</style>
