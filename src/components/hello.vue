<template>
    <div>
        <div class="greeting">Hello {{name}} {{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: {
      type: String,
      default: "default value"
    },
    initialEnthusiasm: {
      type: Number
    }
  },
  data() {
    return {
      enthusiasm: this.initialEnthusiasm
    };
  },
  methods: {
    increment() {
      this.enthusiasm++;
    },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm--;
      }
    }
  },
  computed: {
    exclamationMarks(): string {
      return Array(this.enthusiasm + 1).join("!");
    }
  }
});
</script>

<style lang="scss">
$nn: red;
html,
body {
  min-height: 100%;
}
body {
  background: #fff
    url(https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg)
    no-repeat center;
  background-size: contain;
  font-family: Helvetica, sans-serif;
  text-align: center;
  color: $nn;
}
</style>