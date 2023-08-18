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
      <img :src="post.thumbNail" alt="" />
    </div>
    <div class="post-content" @click="goToDetail(post.id)">
      <div class="content">
        <div class="title">
          <h2>{{ truncatedTitle }}</h2>
        </div>
        <div class="description">
          <p>{{ truncatedSubtitle }}</p>
        </div>
      </div>
      <div class="user-owner">
        <div class="image-and-name">
          <img class="user-image" :src="post.userPicture" alt="" />
          <h4>{{ upperCaseFullName }}</h4>
        </div>
        <div class="date-posted">
          <h4>{{ formattedDate }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PostType } from "@/enums/postType";
import PostModel from "@/models/post/post-model";
import { store } from "@/store";
import { Action, Mutation } from "@/store/types";
import moment from 'moment';
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
  [PostType.Basic]: "green",
  [PostType.Intermediate]: "yellow",
  [PostType.Pro]: "red",
};

const goToDetail = (id: number) => {
  route.push(`/blog/${id}`);
};

const truncatedSubtitle = computed(() => {
  if (props.post.subTitle.length > 90) {
    return props.post.subTitle.slice(0, 90) + "...";
  }
  return props.post.subTitle;
});

const truncatedTitle = computed(() => {
  if (props.post.title.length > 70) {
    return props.post.title.slice(0, 70) + "...";
  }
  return props.post.title;
});

const formattedDate = computed(() => {
  const date = new Date(props.post.datePosted);
  const formattedDate = moment(date).format("MMM D").toUpperCase();
  return formattedDate;
});

const classMonthlyPaymentColor = computed(() => {
  return classColor[props.post.type] || "";
});

const upperCaseFullName = computed(() => {
  return props.post.createdBy.toUpperCase();
});
</script>
