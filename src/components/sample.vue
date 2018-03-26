<template>
    <h1>{{ Name }} {{ Age }}</h1>
</template>

<script lang="ts">
interface IUser {
  Name: string;
  Age: number;
}
export default {
  name: "topflop-factories",
  data():IUser {
    return {
      Name: "Hello Vue!",
      Age: 2,
    };
  }
};
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
