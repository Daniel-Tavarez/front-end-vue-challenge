<template>
  <div class="home-view">
    <section class="searcher-wrapper">
      <SearchComponent />
    </section>
    <section class="blog-posts-wrapper">
      <div class="blog-post-content" v-for="(post, index) in postsFavoritedOrAll" :key="index">
        <PostCardComponent :post="post"></PostCardComponent>
      </div>
    </section>
    <section class="load-more">
      <button>Load more</button>
    </section>
  </div>
</template>

<script setup>
import PostCardComponent from "@/components/post-card/PostCardComponent.vue";
import SearchComponent from "@/components/search/SearchComponent.vue";
import { store } from '@/store';
import { computed, onMounted } from "vue";

// let posts = ref(null);

onMounted(() => {
  // posts.value = store.state.blogPosts;
})

const postsFavoritedOrAll = computed(() => {
  return store.state.showOnlyFavorites ? store.state.blogPosts.filter(x => x.favorite) : store.state.blogPosts;
});

</script>
