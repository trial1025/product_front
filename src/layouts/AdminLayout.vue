<template lang="pug">
VNavigationDrawer(floating app)
  VList
    VListItem(:prepend-avatar :title="user.account")
  VDivider
  VList
    VListItem(
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      :title="item.text"
      :prepend-icon="item.icon"
      :active="isActive(item.to)"
      class="rounded-s-xl" active-class="white"
    )
VMain(style="background-color: #E1E8EE;")
  RouterView
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const user = useUserStore()
const route = useRoute()

const navItems = [
  { to: '/admin', text: '管理員資料', icon: 'mdi-account' },
  { to: '/admin/products', text: '商品管理後台', icon: 'mdi-shopping' },
  { to: '/admin/orders', text: '訂單管理後台', icon: 'mdi-list-box' },
  { to: '/', text: '回首頁', icon: 'mdi-home' }
]

const isActive = (to) => {
  // 這裡假設 `to` 是字符串，並與 route.path 進行比較
  // 這個簡單的比較可能需要根據路由結構進行調整
  return route.path === to
}

const prependAvatar = computed(() => {
  return `https://source.boringavatars.com/beam/120/${user.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`
})
</script>

<style scoped>
.white {
  background-color: #E1E8EE;
}
</style>
