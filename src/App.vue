<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./views/Home/index.vue";

export default defineComponent({
  name: "App",
  components: { Home },
  setup() {},
});
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
</style>
