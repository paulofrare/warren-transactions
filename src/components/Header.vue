<template>
  <header class="header">
    <div class="header__logo">
      <Logo />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "../components/icons/logo.vue";

export default defineComponent({
  name: "Header",
  components: { Logo },
  setup() {},
});
</script>

<style scoped>
.header {
  width: 100%;
  background-color: #e02b57;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__logo {
  width: 600px;
  margin-left: 20px;
}
</style>