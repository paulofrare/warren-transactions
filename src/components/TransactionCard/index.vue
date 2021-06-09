<template>
  <div class="card">
    <div class="card-transaction" @click.prevent="handleModal">
      <div class="card-transaction__title-box">
        <div
          class="card-transaction__title-span"
          :class="[
            {
              'card-transaction__title-span--color-rescue':
                transaction.title === 'Resgate',
            },
            {
              'card-transaction__title-span--color-internal-movement':
                transaction.title === 'Mov. interna',
            },
            {
              'card-transaction__title-span--color-deposit':
                transaction.title === 'Depósito',
            },
          ]"
        ></div>
        <div class="card-transaction__title">{{ transaction.title }}</div>
      </div>
      <div class="card-transaction__amount">{{ transaction.amount }}</div>
      <div class="card-transaction__description">
        {{ transaction.description }}
      </div>
      <div class="card-transaction__status">{{ transaction.status }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ComputedRef, computed } from "vue";
import { Transaction } from "../../types/transaction";
import useStore from "../../hooks/store";
import { setStateModal, setTransaction } from "../../store/index";

type State = {};

interface SetupReturn {
  state: State;
  transaction: ComputedRef<Transaction>;
  handleModal(): void;
}

export default defineComponent({
  name: "TransactionCard",
  props: ["transactionItem"],
  components: {},
  setup(props): SetupReturn {
    const state = reactive<State>({});
    const store = useStore();

    const transaction = computed<Transaction>(() => {
      const resp = props.transactionItem;
      if (resp.status === "created") resp.status = "Solicitada";
      if (resp.status === "processing") resp.status = "Processando";
      if (resp.status === "processed") resp.status = "Concluída";
      if (resp.title === "Movimentação interna") resp.title = "Mov. interna";
      resp.amount = resp.amount.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      return resp;
    });

    function handleModal() {
      setStateModal(!store.stateModal);
      setTransaction(props.transactionItem);
    }

    return {
      state,
      transaction,
      handleModal,
    };
  },
});
</script>

<style scoped>
.card {
  margin-bottom: 10px;
  color: #2e2d33;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
}

.card-transaction {
  padding: 8px;
  display: grid;
  grid-template-columns: 2.5fr 1fr;

  background: #f0f0f0;
  border-radius: 5px;
}

.card-transaction__title {
  font-size: 18px;
}

.card-transaction__description {
  margin-top: 12px;
  font-size: 12px;
}

.card-transaction__amount {
  text-align: end;
  font-weight: 500;
}

.card-transaction__status {
  text-align: end;
  margin-top: 12px;
  font-size: 12px;
}

.card-transaction__title-box {
  display: flex;
  align-items: center;
}

.card-transaction__title-span {
  content: "";
  display: inline-block;
  width: 27px;
  height: 6px;
  border-radius: 5px;
  vertical-align: middle;
  margin-right: 5px;
}

.card-transaction__title-span--color-rescue {
  background-color: #d38c8c;
}
.card-transaction__title-span--color-deposit {
  background-color: #83d69a;
}
.card-transaction__title-span--color-internal-movement {
  background-color: #ddb972;
}
</style>