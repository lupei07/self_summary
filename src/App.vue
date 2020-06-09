<template>
  <div id="app">
    <FloatOper />
  </div>
</template>

<script>
import FloatOper from "./views/FloatOper";

export default {
  name: "App",
  components: {
    FloatOper
  },
  created() {}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
