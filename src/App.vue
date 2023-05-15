<template>
  <div id="app">
    <!-- NAVBAR -->
      <nav class="d-flex flex-row justify-content-between">
        <div>
          <b-navbar-brand href="#">
            <img width="125px" :src=logo class="img-fluid" alt="Logo">
          </b-navbar-brand>
        </div>
        <div class="d-flex flex-row align-items-center">
          <div class="d-lg-flex d-md-flex flex-row d-none d-sm-none d-md-block">
            <a href="https://github.com/" target="_blank"><img width="60%" alt="Github" :src='github' /></a>
            <a href="https://twitter.com/" target="_blank"><img width="60%" alt="Twitter" :src='twitter' /></a>
            <a href="https://www.linkedin.com/" target="_blank"><img width="60%" alt="Linkedin" :src='linkedin' /></a>
          </div>
            <b-button class="navbar-toggler fs-3 text m-5" type="button" aria-controls="navbarToggleExternalContent"
              aria-expanded="false" aria-label="Toggle navigation" v-b-toggle.sidebar-right>☰</b-button>
            <b-sidebar id="sidebar-right" title="Navigation" text-variant="light" right shadow>
              <div class="px-3 py-2 text-center">
                  <router-link to="/">Home</router-link> |
                  <router-link to="/about">About & Services</router-link>
                  <hr />
                  <div class="d-lg-flex d-md-flex flex-row d-none d-sm-block d-md-none d-lg-none">
                    <a class="m-2" href="https://github.com/" target="_blank"><img width="10%" alt="Github" :src='github' /></a>
                    <a class="m-2" href="https://twitter.com/" target="_blank"><img width="10%" alt="Twitter" :src='twitter' /></a>
                    <a class="m-2" href="https://www.linkedin.com/" target="_blank"><img width="10%" alt="Linkedin" :src='linkedin' /></a>
                  </div>
              </div>
          </b-sidebar>
        </div>
      </nav>
      <router-view />
  </div>
</template>

<script>
import logo from './assets/logo2.png'
import github from './assets/GitHub.svg';
import twitter from './assets/Twitter.svg';
import linkedin from './assets/LinkedIn.svg';
  export default {
    name: "App",
    data() {
      return {
        logo: logo,
        github: github,
        twitter: twitter,
        linkedin: linkedin,
        variant: 'dark',
        variants: [
          'transparent',
          'white',
          'light',
          'dark',
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ]
      }
    }
  };
  </script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;400;500;600;700&display=swap");

#app {
  font-family: "Josefin Sans", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #3d72a4!important;
  height: 100% !important;
  overflow: auto;
}

/* NAVBAR STYLING */
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}
nav a.router-link-exact-active {
  color: #3d72a4!important;
}

#sidebar-right {
  background-color: #FF9797 !important;
}

#sidebar-right button {
  background-color: transparent;
  border: none;
}

.navbar-toggler:hover {
  text-decoration: none !important;
  background-color: #3d72a4 !important;
}

/* SPAN COLOR STYLE */
.span-color {
  color: #FF9797;
}

/* GREY TEXT STYLE */
.grey-text {
  color: #C6C6C6;
}

/* BUTTON STYLING */
.primary-button {
  width:200px;
  height:40px;
  border-width:1px;
  color:#FF9797;
  border-radius:4px;
  border-color: #FF9797;
  background:#ffffff;
}

.secondary-button {
  width:200px;
  height:40px;
  border-width:1px;
  color:#ffffff;
  border-radius:4px;
  border-color: #373737;
  background:#3d72a4;
}

/* COLORED CARD */
.colored-card {
  background-color: #FF9797;
}

/* TITLE DISPLAY */
h1 {
  font-size: 3rem !important;
}

h2 {
  font-size: 2.5rem !important;
}

h3 {
  font-size: 2rem !important;
}

h4 {
  font-size: 1.5rem !important;
}

.outline-text {
  -webkit-text-fill-color: #3d72a4; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: white;
}
</style>