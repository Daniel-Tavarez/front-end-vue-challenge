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
          <div class="input" v-if="signUp">
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
import User from '@/models/user/user-model';
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
    password: password.value,
    picture: 'https://s3-alpha-sig.figma.com/img/0e52/ca4c/fcf7fd9abbbd23cf3f7c9dfaa318dcea?Expires=1693180800&Signature=iWuXCgHBNUwclkZVhY5Nsloij20BBaqLxhh9hU1ht7LFN9xXidzIj79nA1Yx2y98mmJZhmQxle68kaZfh4YamCIUFYNjqXgrP0dah854WKXLDSNdg-Mz5CobldjmWg2nlLf3DlfBFJmHM8qh1qu4Eb7zu6~NZ1H02TqKJ~fZmZl8g-2299Y2d2T3-mqfdqPHd4FnTzFJ1EYEhiopMDPon5FVI8z00EKhz3Q69dCcgrAf-b0dHQ52RuWQjmwEMDpUYgag46pi9Woca0XF0coBLUZqQ~OIk7oxgx3xrylp~e98TVxLyCjl~oJkA0x~X3V31ZvkKHUkPPpQj18IbVN25w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  } as User;
  store.dispatch(Action.CreateUser, userData).then(() => {
    signUpOrlogin();
  });
}

function signUpOrlogin(){
  signUp.value = !signUp.value;
}

function closeModal(){
  return store.commit(Mutation.toogleLoginModalShow);
}

</script>
