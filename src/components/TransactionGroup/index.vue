<template>
  <div class="transaction-group">
    <div class="transaction-group__title">
      {{ transactionDate }}
    </div>
    <div v-for="item in transaction[1]" :key="item.index">
      <TransactionCard :transactionItem="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ComputedRef, computed } from "vue";
import TransactionCard from "../TransactionCard/index.vue";
import { formatDateFull } from "../../utils/formatDate";

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

    const transactionDate = computed<string>((): string => {
      const resp = props.transaction[0];
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
.transaction-group {
  margin: 10px;
  margin-bottom: 26px;
}

.transaction-group__title {
  margin-bottom: 8px;
}
</style>