<template>
  <div class="first-form">
    <h1>Burada form olacak</h1>
    <button class="first-form__button">{{ buttonText }}</button>
    <Button text="props olarak düşülen yazi" ></Button>
    <Button :text="buttonText" ></Button>
    <button v-if="!feedbackSended" @click="sendFeedback" >{{ buttonText }}</button>
    <p v-else>Feedback Sended</p>
    <hr>
    <Form @submit="formSubmit"></Form>
  </div>
</template>

<script>
import Button from "@/components/Button"
import Form from "@/components/Form"
    export default {
        components: { Button, Form },
        name: "FirstForm",
        data() {
            return {
                buttonText: "Button Yazısı",
                feedbackSended: false,
            };
        },
        methods: {
            sendFeedback(){
                this.feedbackSended = true;
            },
            formSubmit(value){
                console.log(value);
            },
        }
    };
</script>

<style lang="scss" scoped>
.first-form{
    &__button{
        background-color: aqua;
        color: green;
    }
}
</style>