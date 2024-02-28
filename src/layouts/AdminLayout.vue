<template lang="pug">
VNavigationDrawer(floating app)
  VList
    VListItem(:prepend-avatar :title="user.account")
  VDivider
  VList
    VListItem(
      v-for="item in navItems" :key="item.to"
      :to="item.to" :title="item.text" :prepend-icon="item.icon" class="rounded-s-xl" active-class="white"
    )
VMain(style="background-color: #E1E8EE;")
  RouterView
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { computed } from 'vue'

const user = useUserStore()

const navItems = [
  { to: '/admin', text: '管理員資料', icon: 'mdi-account' },
  { to: '/admin/products', text: '商品管理後台', icon: 'mdi-shopping' },
  { to: '/admin/orders', text: '訂單管理後台', icon: 'mdi-list-box' },
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
