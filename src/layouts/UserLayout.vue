<template lang="pug">
VNavigationDrawer(floating app)
  VList
    VListItem(:prepend-avatar :title="user.account")
  VDivider
  VList
    VListItem(
      v-for="item in navItems" :key="item.to"
      :to="item.to" :title="item.text" :prepend-icon="item.icon" active-class="white" class="rounded-s-xl"
    )
VMain(style="background-color: #E1E8EE;")
  RouterView
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { computed } from 'vue'

const user = useUserStore()

const navItems = [
  { to: '/user', text: '個人資料', icon: 'mdi-account' },
  { to: '/user/userproducts', text: '商品管理', icon: 'mdi-shopping' },
  { to: '/user/userorders', text: '訂單管理', icon: 'mdi-list-box' },
  { to: '/', text: '回首頁', icon: 'mdi-home' }
]

const prependAvatar = computed(() => {
  return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
})
</script>

<style scoped>
.white {
  background-color: #E1E8EE;
}
</style>
