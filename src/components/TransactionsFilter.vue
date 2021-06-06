<template>
  <div class="filter-container">
    <div class="filter-container__item">
      <span>Título</span>
      <div class="filter-container__buttons">
        <div v-for="item in state.titleOptions" :key="item.title">
          <ButtonFilter
            @click.prevent="handleActiveTitle(item)"
            :title="item.title"
            :isActive="item.active"
          />
        </div>
      </div>
    </div>
    <div class="filter-container__item">
      <span>Status</span>
      <div class="filter-container__buttons">
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
import { defineComponent, reactive } from "vue";
import ButtonFilter from "../components/ButtonFilter.vue";

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
}

export default defineComponent({
  name: "TransactionsFilter",
  components: {
    ButtonFilter,
  },
  setup(): SetupReturn {
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
    }
    function handleActiveStatus(item: Options): void {
      item.active = !item.active;
    }

    return {
      state,
      handleActiveTitle,
      handleActiveStatus,
    };
  },
});
</script>

<style scoped>
.filter-container {
  margin: 10px;
}

.filter-container__buttons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.filter-container__item {
  margin-top: 10px;
}
</style>