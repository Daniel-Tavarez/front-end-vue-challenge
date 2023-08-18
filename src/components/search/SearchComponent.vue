<template>
  <div class="search-component">
    <div class="search-bar">
      <input v-model="searchModel" class="input" type="text" placeholder="Search"/>
      <h6>{{ results }}</h6>
      <button class="search-button" @click="search">Search</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { store } from "@/store";
import { Action } from "@/store/types";
import { ref } from "vue";

const searchModel = ref("");

const postQuantity = ref({
  titleFIlter: searchModel
});

const results = ref("0 RESULTS");

function search(){
  store.dispatch(Action.SetBlogPosts, postQuantity.value).then((result) => {
    results.value = result + ' RESULTS';
  });
}

</script>
