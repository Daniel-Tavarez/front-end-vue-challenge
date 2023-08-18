<template>
  <section class="post-detail-container">
    <CreateOrUpdatePost
      :post="currentPost"
      @closeModal="closeModal"
      :create="false"
      @refetchPostInfo="refetchPostInfo"
      v-if="showEditModal" />
    <div class="edit-button-wrapper">
      <button class="edit" @click="editPostFc">Edit post</button>
    </div>
    <div class="title">
      <h1>{{ currentPost.title }}</h1>
    </div>
    <div class="sub-title">
      <h3>{{ currentPost.subTitle }}</h3>
    </div>
    <div class="post">
      <div class="user-info">
        <div class="info">
          <div class="picture">
            <img :src="currentPost.userPicture" alt="" />
          </div>
          <div class="name-and-date">
            <h4>{{ currentPost.createdBy }}</h4>
            <h5>Published on {{ formattedDate }}</h5>
          </div>
        </div>
        <div class="social-media">
          <h4>SHARE:</h4>
          <div class="media-logos">
            <img src="../../assets/img/instagram-logo.svg" alt="" />
            <img src="../../assets/img/facebook-logo.svg" alt="" />
            <img src="../../assets/img/twitter-logo.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="post-image-with-caption">
        <img :src="currentPost.image" alt="" />
        <h4>{{ currentPost.imageCaption }}</h4>
      </div>
      <div class="post-body">
        <h4>{{ currentPost.body }}</h4>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CreateOrUpdatePost from "@/components/createOrUpdatePost/CreateOrUpdatePost.vue";
import PostModel from "@/models/post/post-model";
import { store } from "@/store";
import { Action, Mutation } from "@/store/types";
import moment from "moment";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentPost = ref({} as PostModel);

const showEditModal = ref(false);

const editPostFc = () => {
  store.state.logged ? showEditModal.value = true : store.commit(Mutation.toogleLoginModalShow);
}


const formattedDate = computed(() => {
  const date = new Date(currentPost.value.datePosted);
  const formattedDate = moment(date).format("MMM D, YYYY");
  return formattedDate;
});

const closeModal = (value: boolean) => {
  showEditModal.value = value;
};

const refetchPostInfo = (value: any) => {
  setTimeout(() => {
    fetchAndOpenModal();
  }, 1000);
}

const fetchAndOpenModal = async () => {
  const postId = route.params.id;
  store.dispatch(Action.GetPostById, postId).then((post) => {
    currentPost.value = post;
  });
};

onMounted(() => {
  fetchAndOpenModal();
});
</script>
