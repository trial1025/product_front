<template lang="pug">
video(autoplay muted loop id="myVideo")
  source(src="@/assets/v1.mp4" type="video/mp4")

div.content
  h1(style="text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8) ;") We are preparing for the next race
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
  bottom: 40%;
  left: 30%;
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
}

.btn-shop {
  position: fixed;
  bottom: 35%;
  left: 45%;
  width: 15%;
  font-size: larger;
  background-color:#E53935;
}
</style>
