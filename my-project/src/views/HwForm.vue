<template>
    <form class="send-message" @submit.prevent="submitForm">
      <h1>Send Us a Message</h1>
      <input type="text" v-model="formData.input1" placeholder="Enter text 1" />
      <input type="text" v-model="formData.input2" placeholder="Enter text 2" />
      <select v-model="formData.selectedOption">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      <textarea v-model="formData.textAreaData" cols="30" rows="10" placeholder="Enter your message"></textarea>
      <button type="submit">Submit Form</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          input1: '',
          input2: '',
          selectedOption: '', // Seçilen option değeri bu özellikte tutulacak
          textAreaData: '',
        },
      };
    },
    methods: {
      submitForm() {
        console.log(this.formData);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .send-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  </style>
  