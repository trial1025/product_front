<template lang="pug">
VContainer
  VRow(justify="center" no-gutters)
    VCol(cols="12")
      h1.text-center 個人資料
    VDivider
    VCol(cols="12" class="text-center" justify-center align-center)
      VCard.mt-12.py-6
        VAvatar(size="120")
          VImg(:src="prependAvatar")
        VCardTitle 使用者帳號 | {{ user.account }}
        VCardTitle Email | {{ user.email }}
        //- VCardText 加入時間 | {{ user.createdAt }}
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { computed } from 'vue'
const user = useUserStore()

const prependAvatar = computed(() => {
  return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
})
</script>
