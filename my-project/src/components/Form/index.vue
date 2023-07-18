<template>
  <div>
    <input type="text" v-model="form.name" />
    <input type="text" v-model="form.surname" />
    <Button text="Submit" @click="formSubmit"></Button>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Form",
  components: {
    Button,
  },
  data() {
    return {
      form: {
        name: "",
        surname: "",
      },
    };
  },
  methods: {
    formSubmit() {
      this.$emit("submit", this.form);
    },
  },
};
</script>