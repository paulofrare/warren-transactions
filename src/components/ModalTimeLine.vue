<template>
  <div class="modal-timeline-container">
    <div class="back-line">
      <div
        class="front-line"
        :class="[
          { 'front-line-stepTwo': setup.stepTwo },
          { 'front-line-stepThree': setup.stepThree },
        ]"
      ></div>
      <div class="circles-box">
        <div class="circle circle-active">
          <div class="circle-label">Solicitada</div>
        </div>
        <div
          class="circle"
          :class="{ 'circle-active': setup.stepTwo | setup.stepThree }"
        >
          <div class="circle-label-two">Processando</div>
        </div>
        <div class="circle" :class="{ 'circle-active': setup.stepThree }">
          <div class="circle-label">Concluída</div>
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
  setup(props): SetupReturn {
    const state = reactive({});

    return {
      state,
    };
  },
});
</script>

<style scoped>
.modal-timeline-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.back-line {
  position: relative;
  background-color: #c4c4c4;
  width: 100%;
  height: 2px;
}

.front-line {
  position: absolute;
  width: 0%;
  background-color: #e02b57;
  height: 2px;
}
.front-line-stepTwo {
  width: 50%;
}
.front-line-stepThree {
  width: 100%;
}

.circles-box {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.label-box {
  position: absolute;
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto";
  font-size: 12px;
  color: #2e2d33;
  margin-left: -18px;
}

.circle {
  width: 15px;
  height: 15px;
  margin-top: -6px;
  background: #c4c4c4;
  border-radius: 50%;
  font-family: "Roboto";
  font-size: 12px;
  color: #2e2d33;
}

.circle-active {
  background-color: #e02b57;
}

.circle-label {
  margin-left: -19px;
  margin-top: 20px;
}
.circle-label-two {
  margin-left: -29px;
  margin-top: 20px;
}
</style>
