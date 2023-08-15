<template>
  <div class="layout-content-wrapper">
    <Header />
    <main class="main-content">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/footer/FooterComponent.vue";
import Header from "@/components/header/HeaderComponent.vue";
</script>
