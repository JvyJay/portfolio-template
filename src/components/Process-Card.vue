<template>
    <div>
        <img alt="icon" :src="image" />
        <h4 class="mb-4 mt-4 fw-bold">{{title}}</h4>
        <p class="w-75">{{desc}}</p>
    </div>
</template>
<script>
export default {
    name: 'ProcessCard',
    props: {
        image: String,
        title: String,
        desc: String
    }
}
</script>
<style lang="scss">
    
</style>