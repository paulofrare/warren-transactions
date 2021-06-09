<template>
  <teleport to="body">
    <div v-if="state.modal" class="modal">
      <div class="modal__body">
        <div @click.prevent="handleModal" class="modal__button-close">
          <Close />
        </div>
        <div class="modal__title">{{ title }}</div>
        <div class="modal__value">
          {{
            state.transaction.amount.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })
          }}
        </div>
        <div class="modal__time-line">
          <ModalTimeLine :setup="state.setupTmeLine" />
        </div>
        <div class="modal__data-label">Transferido de:</div>
        <div class="modal__data-value">{{ state.transaction.from }}</div>
        <div class="modal__data-label">para:</div>
        <div class="modal__data-value">{{ state.transaction.to }}</div>
      </div>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent, reactive, watch, computed, ComputedRef } from "vue";
import Close from "../icons/Close.vue";
import ModalTimeLine from "../ModalTimeLine/index.vue";
import useStore from "../../hooks/store";
import { resetStore } from "../../store/index";
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
        if (state.transaction.status === "Policitada")
          state.setupTmeLine.stepOne = true;
        if (state.transaction.status === "Processando")
          state.setupTmeLine.stepTwo = true;
        if (state.transaction.status === "Concluída")
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
.modal {
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

.modal__body {
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

.modal__title {
  font-size: 24px;
  color: #6f6f6f;
  font-weight: 600;
}

.modal__value {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin-top: 15px;
}

.modal__time-line {
  width: 80%;
  max-width: 300px;
  margin-top: 50px;
  margin-bottom: 60px;
}

.modal__data-label {
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
}

.modal__data-value {
  margin-top: 12px;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
}

.modal__button-close {
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
}
</style>
