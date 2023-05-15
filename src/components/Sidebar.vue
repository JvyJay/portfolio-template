<template>
    <div id="app">
      <Slide>
        <a id="home" href="#">
          <span></span>
        </a>
      </Slide>
    </div>
  </template>
  
  <script>
  import { Slide } from "vue-burger-menu";
  
  export default {
    name: "SidebarMenu",
    components: {
      Slide
    }
  };
  </script>