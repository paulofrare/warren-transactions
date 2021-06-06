<template>
  <button :class="{ 'btn-active': isActive }" class="button-filter">
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext } from "vue";

export default defineComponent({
  name: "ButtonFilter",

  props: {
    isActive: { type: Boolean, required: true },
    title: { type: String, required: true },
  },
  components: {},
});
</script>

<style scoped>
.button-filter {
  display: flex;
  border: none;
  border-radius: 10px;
  padding: 7px 15px;
  cursor: pointer;
  margin-right: 15px;
}

.btn-active {
  background-color: #e02b57;
  color: #ffffff;
}
.btn-inactive {
  background-color: #f0f0f0;
  color: #2e2d33;
}
</style>