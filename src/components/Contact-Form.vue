<template lang="">
    <div>
        <h6>{{h6}}</h6>
        <h2>{{h2}}</h2>
        <p>{{desc}}</p>
        <button>Get Started</button>
    </div>
</template>
<script>
export default {
    name: 'ContactForm',
    props: {
        h6: String,
        h2: String,
        desc: String
    }
}
</script>
<style lang="scss">
    
</style>