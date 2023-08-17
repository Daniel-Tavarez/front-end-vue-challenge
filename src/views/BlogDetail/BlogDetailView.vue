<template>
    <div>
        <h1>{{store.state.currentPost.title}}</h1>
    </div>
</template>

<script setup>
import { store } from '@/store';
import { Action } from '@/store/types';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute(); 
const currentPost = ref(null);

onMounted(() => {
  const postId = route.params.id;
  store.dispatch(Action.GetPostById, postId).then(() => {
    currentPost.value = store.state.currentPost;
  });
});
</script>