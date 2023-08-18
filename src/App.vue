<template>
  <KeepAlive>
    <LayoutComponent />
  </KeepAlive>
</template>

<script setup>
import { store } from '@/store';
import { ref } from "vue";
import LayoutComponent from "./components/layout/LayoutComponent.vue";
import { Action } from './store/types';

const postQuantity = ref({
  elementsQuantity: 6,
  titleFIlter: 'Should'
});

store.dispatch(Action.SetBlogPosts, postQuantity.value);
store.dispatch(Action.GetCurrentUser);
</script>