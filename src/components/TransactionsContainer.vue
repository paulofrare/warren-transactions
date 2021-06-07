<template>
  <div class="container">
    <div class="container__header">
      <div class="container__title">Transações</div>
      <button @click="handleFilter()" class="container__button-filter">
        <Filter />
      </button>
    </div>
    <div v-show="state.filter">
      <TransactionsFilter @modified-filter="updateTransactions" />
    </div>
    <div v-for="(transaction, index) in state.orderedTransactions" :key="index">
      <TransactionGroup :transaction="transaction" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Filter from "../components/icons/Filter.vue";
import TransactionsFilter from "../components/TransactionsFilter.vue";
import TransactionGroup from "../components/TransactionGroup.vue";
import services from "../services";
import { groupByDate } from "../utils/groupByDate";
import { filterTransactions } from "../utils/filterTransactions";
import { Transaction } from "../types/transaction";

type State = {
  filter: boolean;
  transactions: Transaction[];
  orderedTransactions: any;
};

interface SetupReturn {
  state: State;
  handleFilter(): void;
  updateTransactions(type: TypeOptions): void;
}

type Options = {
  title: string;
  active: boolean;
};

type TypeOptions = {
  title: string;
  options: Options[];
};

export default defineComponent({
  name: "TransactionsContainer",
  components: {
    Filter,
    TransactionsFilter,
    TransactionGroup,
  },
  setup(): SetupReturn {
    const state = reactive<State>({
      filter: false,
      transactions: [],
      orderedTransactions: null,
    });

    async function getTransactions() {
      try {
        const response = await services.transactions.getTransactions();
        state.transactions = response.data;
        state.orderedTransactions = groupByDate(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getTransactions();

    function updateTransactions(filter: TypeOptions) {
      state.orderedTransactions = groupByDate(
        filterTransactions(
          filter,
          JSON.parse(JSON.stringify(state.transactions))
        )
      );
    }

    function handleFilter(): void {
      state.filter = !state.filter;
    }

    return {
      state,
      handleFilter,
      updateTransactions,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 600px;
  padding-bottom: 30px;
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