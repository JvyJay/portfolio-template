<!-- eslint-disable prettier/prettier -->
<template>
  <div class="m-4" :key=id> 
    <img class="rounded img-fluid" width="100%" alt="Project Thumbnail" :src="image"/>
    <div class="border border-dark border-top-0 p-4 rounded-bottom">
      <div class="d-flex justify-content-start align-items-center left-aligned">
        <h4 class="mt-2 mb-2 fw-bold">{{ title }}</h4>
      </div>
        <p>{{ desc }}</p>
        <a v-bind:href=link target="_blank"><button class="secondary-button fw-bold">View Project</button></a>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "ProjectCard",
  props: {
    id: Number,
    title: String,
    image: String,
    desc: String,
    location: String,
    link: String
  }
};
</script>
<style scoped>
  .left-aligned {
    text-align: left !important;
  }

  .card-container {
    border: 1px #373737 solid;
    border-radius: 5px;
  }
</style>
