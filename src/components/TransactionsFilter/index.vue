<template>
  <div class="filter">
    <div class="filter__item">
      <span>Título</span>
      <div class="filter__buttons">
        <div v-for="item in state.titleOptions" :key="item.title">
          <ButtonFilter
            @click.prevent="handleActiveTitle(item)"
            :title="item.title"
            :isActive="item.active"
          />
        </div>
      </div>
    </div>
    <div class="filter__item">
      <span>Status</span>
      <div class="filter__buttons">
        <div v-for="item in state.statusOptions" :key="item.title">
          <ButtonFilter
            @click.prevent="handleActiveStatus(item)"
            :title="item.title"
            :isActive="item.active"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext } from "vue";
import ButtonFilter from "../ButtonFilter/index.vue";

type Options = {
  title: string;
  active: boolean;
};

type State = {
  titleOptions: Options[];
  statusOptions: Options[];
};

interface SetupReturn {
  state: State;
  handleActiveTitle(item: Options): void;
  handleActiveStatus(item: Options): void;
  emit: SetupContext["emit"];
}

export default defineComponent({
  name: "TransactionsFilter",
  emits: ["modified-filter"],
  components: {
    ButtonFilter,
  },
  setup(_, { emit }: SetupContext): SetupReturn {
    const state = reactive<State>({
      titleOptions: [
        {
          title: "Depósito",
          active: false,
        },
        {
          title: "Resgate",
          active: false,
        },
        {
          title: "Mov. Interna",
          active: false,
        },
      ],
      statusOptions: [
        {
          title: "Processando",
          active: false,
        },
        {
          title: "Solicitada",
          active: false,
        },
        {
          title: "Concluída",
          active: false,
        },
      ],
    });

    function handleActiveTitle(item: Options): void {
      item.active = !item.active;
      emit("modified-filter", {
        titleOptions: JSON.parse(JSON.stringify(state.titleOptions)),
        statusOptions: JSON.parse(JSON.stringify(state.statusOptions)),
      });
    }
    function handleActiveStatus(item: Options): void {
      item.active = !item.active;
      emit("modified-filter", {
        titleOptions: JSON.parse(JSON.stringify(state.titleOptions)),
        statusOptions: JSON.parse(JSON.stringify(state.statusOptions)),
      });
    }

    return {
      state,
      handleActiveTitle,
      handleActiveStatus,
      emit,
    };
  },
});
</script>

<style scoped>
.filter {
  margin: 10px;
}

.filter__buttons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.filter__item {
  margin-top: 10px;
}
</style>