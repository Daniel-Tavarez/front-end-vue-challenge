<template>
  <KeepAlive>
    <LayoutComponent />
  </KeepAlive>
</template>

<script setup>
import { store } from '@/store';
import LayoutComponent from "./components/layout/LayoutComponent.vue";

store.dispatch('setBlogPostsAction');
</script>