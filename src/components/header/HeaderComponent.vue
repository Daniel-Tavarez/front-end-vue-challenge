<template>
  <CreateOrUpdatePost
    @closeModal="closeModal"
    :create="true"
    v-if="showEditModal" />
  <header class="header">
    <div class="header-wrapper">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/img/logo/Logo.svg" alt="" />
        </router-link>
      </div>
      <div class="nav-items">
        <ul>
          <li @click="ShowAll()" class="selected" id="article-li-header">
            Articles
          </li>
          <li @click="showFavorites()" id="favorites-li-header">Favorites</li>
        </ul>
      </div>
      <div class="action-buttons">
        <button @click="openModal">
          {{ store.state.logged ? "Create post" : "" }}
        </button>
        <p v-if="store.state.logged">|</p>
        <button @click="showModalOrLogOut()">
          {{ store.state.logged ? "Logout" : "Login" }}
        </button>
      </div>
      <div class="responsive-button">
        <button @click="showResponsiveHeader = !showResponsiveHeader">
          <img :class="!showResponsiveHeader ? 'hamburguer': ''" :src="showResponsiveHeader ? close.href : hamburguer.href" alt="">
        </button>
      </div>
    </div>
    <div class="responsive-nav animate__animated animate__fadeInDown" v-if="showResponsiveHeader">
      <div class="nav-items">
        <ul>
          <li @click="ShowAll()" class="selected" id="article-li-header">
            Articles
          </li>
          <li @click="showFavorites()" id="favorites-li-header">Favorites</li>
        </ul>
      </div>
      <div class="action-buttons">
        <button @click="openModal">
          {{ store.state.logged ? "Create post" : "" }}
        </button>
        <p v-if="store.state.logged">|</p>
        <button @click="showModalOrLogOut()">
          {{ store.state.logged ? "Logout" : "Login" }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import CreateOrUpdatePost from "@/components/createOrUpdatePost/CreateOrUpdatePost.vue";
import { store } from "@/store";
import { Action, Mutation } from "@/store/types";
import { ref } from "vue";

const close = new URL("@/assets/img/x.svg", import.meta.url);
const hamburguer = new URL("@/assets/img/hamburguer.png", import.meta.url);

const showEditModal = ref(false);
const showResponsiveHeader = ref(false);

const closeModal = (value: boolean) => {
  showEditModal.value = value;
};

const openModal = () => {
  showEditModal.value = true;
};

function showModalOrLogOut() {
  store.state.logged
    ? store.dispatch(Action.LogOut)
    : store.commit(Mutation.toogleLoginModalShow);
}

function ShowAll() {
  document.getElementById("article-li-header")?.classList.add("selected");
  document.getElementById("favorites-li-header")?.classList.remove("selected");
  store.dispatch(Action.SetShowOnlyFavorites, false);
}

function showFavorites() {
  document.getElementById("favorites-li-header")?.classList.add("selected");
  document.getElementById("article-li-header")?.classList.remove("selected");

  store.state.logged
    ? store.dispatch(Action.SetShowOnlyFavorites, true)
    : store.commit(Mutation.toogleLoginModalShow);
}
</script>
