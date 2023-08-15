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
          <li class="selected">Articles</li>
          <li>Favorites</li>
        </ul>
      </div>
      <div class="action-buttons">
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </header>
</template>
