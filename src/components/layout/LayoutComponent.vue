<template>
  <div class="layout-content-wrapper">
    <Header />
    <main class="main-content">
      <router-view></router-view>
      <LoginComponent />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/footer/FooterComponent.vue";
import Header from "@/components/header/HeaderComponent.vue";
import LoginComponent from "@/components/login/LoginComponent.vue";
</script>
