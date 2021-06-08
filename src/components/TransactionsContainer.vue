<template>
  <div class="transaction-container">
    <div class="transaction-container__header">
      <div class="transaction-container__title">Transações</div>
      <button
        @click="handleFilter()"
        class="transaction-container__button-filter"
      >
        <Filter />
      </button>
    </div>
    <div v-show="state.filter">
      <TransactionsFilter @modified-filter="updateTransactions" />
    </div>
    <div v-if="state.show">
      <div
        v-for="(transaction, index) in state.orderedTransactions"
        :key="index"
      >
        <TransactionGroup :transaction="transaction" />
      </div>
    </div>
    <div v-else-if="state.error" class="transaction-container__error">
      Ops.. Ocorreu algum erro!! Tente novamente mais tarde.
    </div>
    <Loader v-else />
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
import Loader from "./Loader.vue";

type State = {
  filter: boolean;
  transactions: Transaction[];
  orderedTransactions: any;
  show: boolean;
  error: boolean;
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
    Loader,
  },
  setup(): SetupReturn {
    const state = reactive<State>({
      filter: false,
      transactions: [],
      orderedTransactions: null,
      show: false,
      error: false,
    });

    async function getTransactions() {
      try {
        const response = await services.transactions.getTransactions();
        state.transactions = response.data;
        state.orderedTransactions = groupByDate(response.data);
        state.show = true;
      } catch (error) {
        state.error = true;
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
.transaction-container {
  max-width: 600px;
  padding-bottom: 30px;
  margin: 0 auto;
}
.transaction-container__header {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.transaction-container__title {
  font-weight: 800;
  font-size: 24px;
  color: #6f6f6f;
}

.transaction-container__button-filter {
  display: flex;
  border: none;
  background: #e02b57;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
}

.transaction-container__error {
  text-align: center;
  margin-top: 100px;
  font-family: "Montserrat", sans-serif;
  color: #6f6f6f;
}
</style>