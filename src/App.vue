<template>
  <TransactionModal />
  <Home />
</template>

<script lang="ts">
import { defineComponent, watch, reactive } from "vue";
import Home from "./views/Home/index.vue";
import TransactionModal from "./components/TransactionModal/index.vue";

type State = {};

interface SetupReturn {
  state: State;
}

export default defineComponent({
  name: "App",
  components: { Home, TransactionModal },
  setup(): SetupReturn {
    const state = reactive<State>({});

    return {
      state,
    };
  },
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
