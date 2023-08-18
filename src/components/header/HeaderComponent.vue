<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/img/logo/Logo.svg" alt="" />
        </router-link>
      </div>
      <div class="nav-items">
        <ul>
          <li
            @click="store.dispatch(Action.SetShowOnlyFavorites, false)"
            class="selected">
            Articles
          </li>
          <li @click="showFavorites()">Favorites</li>
        </ul>
      </div>
      <div class="action-buttons">
        <button @click="showModalOrLogOut()">
          {{store.state.logged ? 'Logout' : 'Login'}}
        </button>
      </div>
    </div>
  </header> 
</template>

<script setup lang="ts">
import { store } from "@/store";
import { Action, Mutation } from "@/store/types";

function showModalOrLogOut() {
  store.state.logged ? store.dispatch(Action.LogOut) :
  store.commit(Mutation.toogleLoginModalShow);
}

function showFavorites() {
  store.state.logged
    ? store.dispatch(Action.SetShowOnlyFavorites, true)
    : store.commit(Mutation.toogleLoginModalShow);
}
</script>
