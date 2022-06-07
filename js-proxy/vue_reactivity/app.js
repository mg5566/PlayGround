// app.js
const app = Vue.createApp({
  template: `
    <input type="text" @input="setInput" ref="userInput" />
    <p>{{ input }}</p>
    <input type="text" v-model="food" />
    <p>{{ food }}</p>
    <input type="text" v-model="drink" />
    <p>{{ drink }}</p>
  `,
  data() {
    return {
      input: "",
      food: "Hamburger",
      drink: "Pepsi zero",
    };
  },
  methods: {
    setInput() {
      this.input = this.$refs.userInput.value;
    },
  },
});

app.mount("#app");
