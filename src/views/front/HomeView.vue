<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      VCarousel(hide-delimiters cycle show-arrows="hover")
        VCarouselItem(cover)
          VImg(src="@/assets/carousel-1.png" height="500px")
        VCarouselItem(cover)
          VImg(src="@/assets/carousel-2.png" height="500px")
    VCol(cols="12")
      VCard
        VCardTitle 關於我們
        VCardText
          | 本網站為射箭器材交易平台，提供射箭器材的買賣服務，歡迎使用。
</template>

<style scoped>
/* body {
  overflow: hidden;
} */
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
}
.content {
  position: fixed;
  color: #f1f1f1;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-shop {
  position: fixed;
  font-size: larger;
  background-color:#E53935;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 599px) {
  .custom-margin {
    margin-top: 35%;
  }
}
</style>
