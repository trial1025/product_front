<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1.text-center 個人資料
    VDivider
    VCol(cols="6")
      VListItem(:prepend-avatar :title="user.account")
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { computed } from 'vue'
const user = useUserStore()

const prependAvatar = computed(() => {
  return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
})
</script>
