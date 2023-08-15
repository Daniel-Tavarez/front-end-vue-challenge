<template>
  <div class="post-card">
    <div class="floating-info">
      <span class="monthly-price">${{ post.monthlyPayment }}/MO</span>
      <button class="star">
        <img
          :class="post.favorite ? 'filled' : ''"
          src="../../assets/img/Stars.svg"
          alt="" />
      </button>
      <img :src="post.image" alt="">
    </div>
  </div>
</template>
<script setup lang="ts">
import PostModel from "@/models/post/post-model";
import { defineProps } from "vue";

const props = defineProps<{
  post: PostModel;
}>();
</script>
