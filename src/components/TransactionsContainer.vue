<template>
  <div class="container">
    <div class="container__header">
      <div class="container__title">Transações</div>
      <button @click="handleFilter()" class="container__button-filter">
        <Filter />
      </button>
    </div>
    <div v-show="state.filter">
      <TransactionsFilter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Filter from "../components/icons/Filter.vue";
import TransactionsFilter from "../components/TransactionsFilter.vue";

type State = {
  filter: boolean;
};

interface SetupReturn {
  state: State;
  handleFilter(): void;
}

export default defineComponent({
  name: "TransactionsContainer",
  components: {
    Filter,
    TransactionsFilter,
  },
  setup(): SetupReturn {
    const state = reactive<State>({
      filter: false,
    });

    function handleFilter(): void {
      state.filter = !state.filter;
    }

    return {
      state,
      handleFilter,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 600px;
}
.container__header {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container__title {
  font-weight: 800;
  font-size: 24px;
  color: #6f6f6f;
}

.container__button-filter {
  display: flex;
  border: none;
  background: #e02b57;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>