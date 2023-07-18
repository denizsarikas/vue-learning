<template>
    <button @click="onClick"> {{ text }}</button>
</template>

<script>

export default {
    name: "Button",
    props: {
        text: String,
    },
    methods:{
        onClick(){
            this.$emit("click")
        }
    },
    created(){
        console.log("created anı")
    },
    mounted(){
        console.log("mounted anı")
    }
}
</script>

<style lang="scss" scoped>
</style>