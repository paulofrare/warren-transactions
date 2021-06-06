<template>
  <button :class="{ 'btn-active': isActive }" class="button-filter">
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
  margin-right: 10px;
  margin-bottom: 5px;
}

.btn-active {
  background-color: #e02b57;
  color: #ffffff;
}
</style>