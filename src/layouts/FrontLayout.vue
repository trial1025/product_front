<template lang="pug">
//- 手機版側欄
VNavigationDrawer(v-model="drawer" temporary location="left" v-if="isMobile")
  VList(nav)
    template(v-for="item in navItems" :key="item.to")
      VListItem(:to="item.to" v-if="item.show")
        template(#prepend)
          VIcon(:icon="item.icon")
        template(#append)
          VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" inline)
        VListItemTitle {{ item.text }}
    VListItem(v-if="user.isLogin" @click="logout")
      template(#prepend)
        VIcon(icon="mdi-logout")
      VListItemTitle 登出
//- 導覽列
VAppBar(density="compact" :elevation="0" class="custom-app-bar bg")
  VContainer.d-flex.align-center
    VImg(src="@/assets/v3.png" max-height="30" max-width="30")
    VBtn(to="/" :active="false")
      VAppBarTitle NEWSHOT
    VSpacer
    //- 手機板導覽列
    template(v-if="isMobile")
      VAppBarNavIcon(@click="drawer = true")
    //- 電腦版導覽列
    template(v-else)
      div(class="text-center")
        template(v-for="item in navItems", :key="item.to")
          v-menu(open-on-hover)
            template(v-slot:activator="{ props }")
              VBtn(v-bind="props", text,:key="item.to", :to="item.to" v-if="item.show")
                v-icon(v-if="item.icon") {{ item.icon }}
                | {{ item.text }}
                //- VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" floating)
            v-list(v-if="item.subItems && item.subItems.length > 0")
              v-list-item(v-for="subItem in item.subItems",  :key="subItem.to", :to="subItem.to")
                v-list-item-title(v-if="subItem.show")
                  VIcon(:icon="subItem.icon" :size="16" class="mx-2")
                  | {{ subItem.text }}
    VBtn(prepend-icon="mdi-logout" v-if="user.isLogin" @click="logout") 登出
//- 頁面內容
VMain
  RouterView(:key="$route.path")
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const router = useRouter()
const createSnackbar = useSnackbar()
const user = useUserStore()

// 手機版判斷
const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

// 手機版惻欄開關
const drawer = ref(false)

// 導覽列項目
const navItems = computed(() => {
  return [
    { to: '/guide', text: '新手指南', show: true },
    { to: '/sell', text: '二手商店', show: true },
    {
      icon: 'mdi-cart',
      show: true,
      subItems: [
        { to: '/cart', text: '購物車', icon: 'mdi-cart', show: true },
        { to: '/orders', text: '訂單', icon: 'mdi-list-box', show: true }
      ]
    },
    {
      icon: 'mdi-account-circle',
      show: !user.isLogin,
      subItems: [
        { to: '/login', text: '登入', icon: 'mdi-login', show: !user.isLogin },
        { to: '/register', text: '註冊', icon: 'mdi-account-plus', show: !user.isLogin }
      ]
    },
    {
      icon: 'mdi-account-circle',
      show: user.isLogin,
      subItems: [
        { to: '/user', text: '個人資料', icon: 'mdi-account-outline', show: user.isLogin },
        { to: '/user/userproducts', text: '我的商品', icon: 'mdi-shopping-outline', show: user.isLogin },
        { to: '/user/userorders', text: '我的訂單', icon: 'mdi-clipboard-text-outline', show: user.isLogin }
      ]
    },
    {
      icon: 'mdi-cog',
      show: user.isLogin && user.isAdmin,
      subItems: [
        { to: '/admin', text: '個人資料', icon: 'mdi-account-outline', show: user.isLogin },
        { to: '/admin/products', text: '商品管理', icon: 'mdi-shopping-outline', show: user.isLogin },
        { to: '/admin/orders', text: '訂單管理', icon: 'mdi-clipboard-text-outline', show: user.isLogin }
      ]
    }
  ]
})

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
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

<style scoped>
.custom-app-bar {
  padding-left: 10%;
  padding-right: 10%;
}

.bg {
  background-color: #c0f1ff;
}
</style>
