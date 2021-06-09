<template>
  <div class="modal-timeline">
    <div class="modal-timeline__back-line">
      <div
        class="modal-timeline__front-line"
        :class="[
          { 'modal-timeline__front-line-stepTwo': setup.stepTwo },
          { 'modal-timeline__front-line-stepThree': setup.stepThree },
        ]"
      ></div>
      <div class="modal-timeline__circles-box">
        <div class="modal-timeline__circle modal-timeline__circle-active">
          <div id="label-circle-one" class="modal-timeline__circle-label">
            Solicitada
          </div>
        </div>
        <div
          class="modal-timeline__circle"
          :class="{
            'modal-timeline__circle-active': setup.stepTwo | setup.stepThree,
          }"
        >
          <div id="label-circle-two" class="modal-timeline__circle-label-two">
            Processando
          </div>
        </div>
        <div
          class="modal-timeline__circle"
          :class="{ 'modal-timeline__circle-active': setup.stepThree }"
        >
          <div id="label-circle-three" class="modal-timeline__circle-label">
            Concluída
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";

type State = {};

interface SetupReturn {
  state: State;
}

export default defineComponent({
  components: {},
  props: ["setup"],
  setup(): SetupReturn {
    const state = reactive({});

    return {
      state,
    };
  },
});
</script>

<style scoped>
.modal-timeline {
  width: 100%;
  display: flex;
  justify-content: center;
}

.modal-timeline__back-line {
  position: relative;
  background-color: #c4c4c4;
  width: 100%;
  height: 2px;
}

.modal-timeline__front-line {
  position: absolute;
  width: 0%;
  background-color: #e02b57;
  height: 2px;
}
.modal-timeline__front-line-stepTwo {
  width: 50%;
}
.modal-timeline__front-line-stepThree {
  width: 100%;
}

.modal-timeline__circles-box {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.modal-timeline__circle {
  width: 15px;
  height: 15px;
  margin-top: -6px;
  background: #c4c4c4;
  border-radius: 50%;
  font-family: "Roboto";
  font-size: 12px;
  color: #2e2d33;
}

.modal-timeline__circle-active {
  background-color: #e02b57;
}

.modal-timeline__circle-label {
  margin-left: -19px;
  margin-top: 20px;
}
.modal-timeline__circle-label-two {
  margin-left: -29px;
  margin-top: 20px;
}
</style>
