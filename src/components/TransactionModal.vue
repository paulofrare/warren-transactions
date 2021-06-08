<template>
  <teleport to="body">
    <div v-if="state.modal" class="modal-container">
      <div class="modal-body">
        <div @click.prevent="handleModal" class="modal-button-close">
          <Close />
        </div>
        <div class="modal-title">{{ title }}</div>
        <div class="modal-value">
          {{
            state.transaction.amount.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </div>
        <div class="modal-time-line">
          <ModalTimeLine :setup="state.setupTmeLine" />
        </div>
        <div class="modal-data-label">Transferido de:</div>
        <div class="modal-data-value">{{ state.transaction.from }}</div>
        <div class="modal-data-label">para:</div>
        <div class="modal-data-value">{{ state.transaction.to }}</div>
      </div>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent, reactive, watch, computed, ComputedRef } from "vue";
import Close from "./icons/Close.vue";
import ModalTimeLine from "./ModalTimeLine.vue";
import useStore from "../hooks/store";
import { resetStore } from "../store/index";
import { Transaction } from "@/types/transaction";

type State = {
  modal: boolean;
  transaction: Transaction;
  setupTmeLine: SetupTimeLine;
};

type SetupTimeLine = {
  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
};

interface SetupReturn {
  state: State;
  handleModal(): void;
  resetSetupTimeLine(): void;
  title: ComputedRef<string>;
}

export default defineComponent({
  components: { ModalTimeLine, Close },
  setup(): SetupReturn {
    const store = useStore();
    const state = reactive({
      modal: false,
      transaction: {
        id: "",
        title: "",
        description: "",
        status: "",
        amount: 0,
        date: "",
        from: "",
        to: "",
      },
      setupTmeLine: {
        stepOne: false,
        stepTwo: false,
        stepThree: false,
      },
    });

    watch(
      () => store.stateModal,
      () => {
        state.modal = store.stateModal;
      }
    );
    watch(
      () => store.transaction,
      () => {
        state.transaction = store.transaction;

        if (state.transaction.status === "created")
          state.setupTmeLine.stepOne = true;
        if (state.transaction.status === "processing")
          state.setupTmeLine.stepTwo = true;
        if (state.transaction.status === "processed")
          state.setupTmeLine.stepThree = true;
      }
    );
    const title = computed<string>(() => {
      let resp: string = state.transaction.title;
      if (resp === "Movimentação interna") resp = "Mov. interna";

      return resp;
    });

    function resetSetupTimeLine(): void {
      state.setupTmeLine.stepOne = false;
      state.setupTmeLine.stepTwo = false;
      state.setupTmeLine.stepThree = false;
    }

    function handleModal(): void {
      resetStore();
      resetSetupTimeLine();
    }

    return {
      state,
      handleModal,
      resetSetupTimeLine,
      title,
    };
  },
});
</script>

<style scoped>
.modal-container {
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-body {
  width: 90%;
  max-width: 600px;
  height: 450px;
  background: #ffffff;
  border-radius: 10px;
  padding: 33px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.modal-title {
  font-size: 24px;
  color: #6f6f6f;
  font-weight: 600;
}

.modal-value {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin-top: 15px;
}

.modal-time-line {
  width: 80%;
  max-width: 300px;
  margin-top: 30px;
}

.modal-data-label {
  margin-top: 50px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

.modal-data-value {
  margin-top: 12px;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
}

.modal-button-close {
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
}
</style>
