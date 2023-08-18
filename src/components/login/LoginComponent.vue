<template>
  <div class="login-view" v-if="store.state.showLoginModal">
    <div class="login-wrapper-component animate__animated animate__fadeInDown">
      <button class="close-modal-button" @click="closeModal()"></button>
      <div class="left-image">
        <img src="../../assets/img/login-side-image.png" alt="" />
      </div>
      <div class="right-form">
        <div class="sign-in-title">
          <h2>{{signUp ? 'Sign Up' : 'Sign In'}}</h2>
        </div>
        <div class="slogan">
          <h4>Simplify your reading in minutes.</h4>
        </div>
        <div class="form-inputs">
          <div class="input">
            <input v-model="email" class="field" type="email" placeholder="Your email" />
          </div>
          <div class="input" v-if="signUp">
            <input v-model="fullName" class="field" type="text" placeholder="Full name" />
          </div>
          <div class="input">
            <input v-model="password" class="field" type="password" placeholder="Password" />
          </div>
        </div>
        <div class="sign-in-button">
          <button @click="signUp ? signUpFc() : login()">{{signUp ? 'Sign Up' : 'Sign In'}}</button>
        </div>
        <div class="signUp">
          <h5 v-if="!signUp">Not here? <span @click="signUpOrlogin()">Sign up!</span></h5>
          <h5 v-else>Been here? <span @click="signUpOrlogin()">Sign In!</span></h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { store } from '@/store';
import { Action, Mutation } from '@/store/types';
import { ref } from "vue";

const signUp = ref(false);
const email = ref('');
const fullName = ref('');
const password = ref('');

function login(){
  const userData = {
    email: email.value,
    password: password.value
  };
  store.dispatch(Action.LogUser, userData);
}

function signUpFc(){
  const userData = {
    email: email.value,
    fullName: fullName.value,
    password: password.value
  };
  console.log('Signing up with user data:', userData);
}

function signUpOrlogin(){
  signUp.value = !signUp.value;
}

function closeModal(){
  return store.commit(Mutation.toogleLoginModalShow);
}

</script>
