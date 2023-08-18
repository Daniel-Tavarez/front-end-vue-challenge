<template>
  <div class="home-view">
    <section class="searcher-wrapper">
      <SearchComponent />
    </section>
    <section class="blog-posts-wrapper" v-if="postsFavoritedOrAll.length">
      <div
        class="blog-post-content"
        v-for="(post, index) in postsFavoritedOrAll"
        :key="index">
        <PostCardComponent :post="post"></PostCardComponent>
      </div>
    </section>
    <section class="elements-not-found" v-else>
      <div class="left-content">
        <h1>Uh oh.</h1>
        <h4>We ran into an issue, but don’t worry,</h4>
        <h4>we’ll take care of it for sure.</h4>
        <button class="back-to-safety" @click="store.dispatch(Action.SetBlogPosts, postQuantity)">Back to safety</button>
      </div>
      <div class="right-content">
        <img src="../../assets/img/elements-not-found.png" alt="" />
      </div>
    </section>
    <section class="load-more" v-if="postsFavoritedOrAll.length">
      <button @click="loadMore">Load more</button>
    </section>
  </div>
</template>

<script setup>
import PostCardComponent from "@/components/post-card/PostCardComponent.vue";
import SearchComponent from "@/components/search/SearchComponent.vue";
import { store } from "@/store";
import { Action } from '@/store/types';
import { computed, ref } from "vue";

const postQuantity = ref({
  elementsQuantity: 6,
  titleFIlter: ''
});

function loadMore(){
  postQuantity.value.elementsQuantity += 3;
  store.dispatch(Action.SetBlogPosts, postQuantity.value);
}

const postsFavoritedOrAll = computed(() => {
  return store.state.showOnlyFavorites
    ? store.state.blogPosts.filter((x) => x.favorite)
    : store.state.blogPosts;
});
</script>
