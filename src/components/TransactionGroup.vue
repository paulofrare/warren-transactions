<template>
  <div class="container-group">
    <div class="transaction-group-title">
      {{ transactionDate }}
    </div>
    <div v-for="item in transaction[1]" :key="item.index">
      <TransactionCard :transactionItem="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ComputedRef, computed } from "vue";
import TransactionCard from "./TransactionCard.vue";
import { formatDateFull } from "../utils/formatDate";

type State = {};

interface SetupReturn {
  state: State;
  transactionDate: ComputedRef<string>;
}

export default defineComponent({
  name: "TransactionGroup",
  props: ["transaction"],
  components: { TransactionCard },
  setup(props): SetupReturn {
    const state = reactive<State>({});

    const transactionDate = computed<string>((): any => {
      const resp = JSON.parse(JSON.stringify(props.transaction[0]));
      const respFormat = formatDateFull(resp);
      return respFormat;
    });

    return {
      state,
      transactionDate,
    };
  },
});
</script>

<style scoped>
.container-group {
  margin: 10px;
  margin-bottom: 26px;
}

.transaction-group-title {
  margin-bottom: 8px;
}
</style>