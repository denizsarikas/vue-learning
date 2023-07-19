<template>
  <form class="send-message" @submit.prevent="submitForm">
    <button class="send-message__button" @click.prevent="logMessage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <g clip-path="url(#clip0_1_25)">
          <path
            d="M24 8L8 24"
            stroke="#6C6B8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 8L24 24"
            stroke="#6C6B8A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_25">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
    <h1>Send Us a Message</h1>
    <div class="send-message__information">
      <input
        required
        class="send-message__information -input"
        type="text"
        v-model="formData.input1"
        placeholder="Full name"
      />
    </div>

    <!-- @input="differentControl" -->
    <div class="send-message__information">
      <input
        required
        class="send-message__information -input"
        type="email"
        v-model="formData.input2"
        placeholder="Your email"
      />
    </div>

    <div class="send-message__customselect">
      <select
        required
        class="send-message_customselect -select"
        v-model="formData.selectedOption"
      >
        <option value="" disabled selected>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>

    <textarea
      required
      class="send-message__textarea"
      v-model="formData.textAreaData"
      cols="30"
      rows="10"
      placeholder="Your message goes here..."
    ></textarea>
    <button :disabled="isFormValid" class="send-message__submit" type="submit">
      Submit Form
    </button>
  </form>
</template>

<script>
import { toRaw } from "vue"; // vue3json.parse
export default {
  computed: {
    isFormValid() {
      return (
        this.formData.input1 === "" ||
        this.formData.input2 === "" ||
        this.formData.selectedOption === "" ||
        this.formData.textAreaData === ""
      );
    },
  },
  data() {
    return {
      // methods içinde bu şekilde de bir şeyler yapılabilir.
      // isFormValid: false,
      formData: {
        input1: "",
        input2: "",
        selectedOption: "",
        textAreaData: "",
      },
    };
  },
  methods: {
    logMessage() {
      console.log("modeli kapattın");
    },
    submitForm() {
      // console.log(this.formData);
      console.log(JSON.parse(JSON.stringify(this.formData)));
    },
    // differentControl() {
    //   if(this.formData.textAreaData !== "") {
    //     this.isFormValid = true;
    //   }
    // }
  },
};
</script>
  
  <style lang="scss" scoped>
.send-message {
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0px 24px 35px -15px rgba(100, 93, 152, 0.17);
  gap: 24px;
  background: white;
  width: 50%;
  margin: 0 auto;

  &__customselect {
    position: relative;
    width: 418px;
    height: 45px;
    flex-shrink: 0;
    font-family: "IBM Plex Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 5px;

    & .-select {
      width: 100%;
      border: none;
      outline: none;
      color: #000;
      font-family: IBM Plex Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 418px;
      height: 2px;
      flex-shrink: 0;
      height: 1px;
      opacity: 0.10000000149011612;
      background: #000;
    }
  }

  &__button {
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border: 1px #e6e6e6 solid;
    border-radius: 100%;
    background: white;
  }

  &__submit {
    width: 475px;
    height: 72px;
    flex-shrink: 0;
    border-radius: 70px;
    background: #151534;
    color: #fff;
    text-align: center;
    font-family: Merriweather;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__textarea {
    width: 476px;
    height: 159px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid #e6e6e6;
    background: #fff;
    color: rgba(21, 21, 52, 0.6);
    font-family: IBM Plex Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  &__information {
    position: relative;
    width: 418px;
    height: 45px;
    flex-shrink: 0;
    font-family: "IBM Plex Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 5px;

    &.-input {
      color: rgba(21, 21, 52, 0.6);
      font-family: IBM Plex Sans;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      border: none;
      outline: none;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 418px;
      height: 2px;
      flex-shrink: 0;
      height: 1px;
      opacity: 0.10000000149011612;
      background: #000;
    }
  }
}
</style>
  