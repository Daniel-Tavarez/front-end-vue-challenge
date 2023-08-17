<template>
  <div class="post-card">
    <div class="floating-info">
      <span :class="classMonthlyPaymentColor" class="monthly-price"
        >${{ post.monthlyPayment }}/MO</span
      >
      <button
        class="star"
        @click="setPostFavoriteOrUnfavorite(post.favorite, post.id)">
        <img :src="post.favorite ? yellowStar.href : grayStar.href" alt="" />
      </button>
    </div>
    <div class="image">
      <!-- <img src="../../assets/img/3rd-picture-clipped.png" alt="" /> -->
      <img :src="post.thumbNail" alt="" />
    </div>
    <div class="post-content" @click="goToDetail(post.id)">
      <div class="content">
        <div class="title">
          <h2>{{ post.title }}</h2>
        </div>
        <div class="description">
          <p>{{ truncatedText }}</p>
        </div>
      </div>
      <div class="user-owner">
        <div class="image-and-name">
          <img class="user-image" :src="post.userPicture" alt="" />
          <h4>{{ upperCaseFullName }}</h4>
        </div>
        <div class="date-posted">
          <h4>{{ post.datePosted }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import PostModel from "@/models/post/post-model";
import { store } from "@/store";
import { Action, Mutation } from "@/store/types";
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  post: PostModel;
}>();

const grayStar = new URL("@/assets/img/Stars.svg", import.meta.url);
const yellowStar = new URL("@/assets/img/Star-yellow.svg", import.meta.url);

const route = useRouter();

function setPostFavoriteOrUnfavorite(favorite: boolean, postId: number) {
  if (store.state.logged) {
    favorite
      ? store.dispatch(Action.SetPostUnFavorite, postId)
      : store.dispatch(Action.SetPostFavorite, postId);
  } else {
    store.commit(Mutation.toogleLoginModalShow);
  }
}

const classColor: Record<number, string> = {
  1: "green",
  2: "yellow",
  3: "red",
};

const goToDetail = (id: number) => {
  route.push(`/blog/${id}`);
};

const truncatedText = computed(() => {
  if (props.post.subTitle.length > 90) {
    return props.post.subTitle.slice(0, 90) + "...";
  }
  return props.post.subTitle;
});

const classMonthlyPaymentColor = computed(() => {
  return classColor[props.post.type] || "";
});

const upperCaseFullName = computed(() => {
  return props.post.createdBy.toUpperCase();
});
</script>
