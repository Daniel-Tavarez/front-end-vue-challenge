<template>
  <KeepAlive>
    <LayoutComponent />
  </KeepAlive>
</template>

<script setup>
import { store } from '@/store';
import LayoutComponent from "./components/layout/LayoutComponent.vue";
import { Action } from './store/types';

store.dispatch(Action.SetBlogPosts);
store.dispatch(Action.GetCurrentUser);
</script>