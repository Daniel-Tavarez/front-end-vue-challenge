<template>
  <div class="search-component">
    <div class="search-bar">
      <input class="input" type="text" placeholder="Search"/>
      <h6>{{ results }}</h6>
      <button class="search-button">Search</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const results = ref("123 RESULTS");
</script>
