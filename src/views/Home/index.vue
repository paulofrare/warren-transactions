<template>
  <div class="home">
    <Header />
    <TransactionsContainer />
  </div>
</template>

<script>
import Header from "../../components/Header/index.vue";
import TransactionsContainer from "../../components/TransactionsContainer/index.vue";
export default {
  components: {
    Header,
    TransactionsContainer,
  },
};
</script>

<style>
.home {
  margin: 0 auto;
}
</style>
