<template lang="pug">
video(autoplay muted loop id="myVideo")
  source(src="@/assets/v1.mp4" type="video/mp4")

div.content
  h1(style="text-shadow: 10px 10px 10px rgb(0, 0, 0) ;") We are preparing for the next race
  VBtn(rounded="xl" class="btn-shop")
    Router-link.text-decoration-none(to="/sell" style="color: white;") SHOP NOW
</template>

<style scoped>
body {
  overflow: hidden;
}
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
  width: 15%;
  margin-top: 8%;
  font-size: larger;
  background-color:#E53935;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
