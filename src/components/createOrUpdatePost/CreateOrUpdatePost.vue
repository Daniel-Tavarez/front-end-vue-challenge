<template>
  <div class="create-or-update-view">
    <div class="create-or-update-modal">
      <button class="close-modal-button" @click="closeModal()"></button>
      <div class="title">
        <h2>{{ props.create ? "Create post" : "Update post" }}</h2>
      </div>
      <div class="form-inputs">
        <div class="input">
          <p>Title</p>
          <input
            class="field"
            v-model="editedPost.title"
            placeholder="Post title" />
        </div>
        <div class="input">
          <p>Sub title</p>
          <textarea
            class="field textarea"
            v-model="editedPost.subTitle"
            placeholder="Post sub title" />
        </div>
        <div class="input">
          <p>Body</p>
          <textarea
            class="field textarea"
            v-model="editedPost.body"
            placeholder="Body"></textarea>
        </div>
        <div class="input">
          <p>Monthly pay rate</p>
          <input
            class="field"
            v-model="editedPost.monthlyPayment"
            type="number"
            placeholder="Monthly pay rate" />
        </div>
        <div class="input">
          <p>Type</p>
          <select id="postCategory" class="field" v-model="editedPost.type">
            <option value="0">Select post type</option>
            <option
              v-for="postType in postTypes"
              :key="postType.value"
              :value="postType.value">
              {{ postType.label }}
            </option>
          </select>
        </div>
        <div class="input">
          <p>Post image URL</p>
          <input
            class="field"
            v-model="editedPost.image"
            type="text"
            placeholder="Image URL" />
        </div>
        <div class="input">
          <p>Post image caption</p>
          <input
            class="field"
            v-model="editedPost.imageCaption"
            type="text"
            placeholder="Post image caption" />
        </div>
        <div class="input">
          <p>Post image thumbnail</p>
          <input
            class="field"
            v-model="editedPost.thumbNail"
            type="text"
            placeholder="Thumbnail URL" />
        </div>
      </div>
      <div class="createOrUpdate-button">
        <button @click="props.create ? create() : updatePost()">
          {{ props.create ? "Create" : "Update" }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PostType } from "@/enums/postType";
import PostModel from "@/models/post/post-model";
import { store } from "@/store";
import { Action } from "@/store/types";
import { ref, onMounted, reactive, defineEmits } from "vue";
import { defineProps } from "vue";

const emits = defineEmits(["closeModal", "refetchPostInfo"]);

const postTypes = [
  { label: "Básico", value: PostType.Basic },
  { label: "Intermedio", value: PostType.Intermediate },
  { label: "Profesional", value: PostType.Pro },
];

const props = defineProps<{
  post: PostModel;
  create: boolean;
}>();

const editedPost = reactive({ ...props.post });

const closeModal = () => {
  emits("closeModal", false);
};

function updatePost() {
  store.dispatch(Action.UpdatePost, editedPost);
  emits("refetchPostInfo", false);
  closeModal();
}
function create() {
  store.dispatch(Action.CreatePost, editedPost);
  emits("refetchPostInfo", false);
  closeModal();
}
</script>
