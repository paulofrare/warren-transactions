<template>
  <div class="container">
    <Header />
    <TransactionsContainer />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import TransactionsContainer from "../../components/TransactionsContainer.vue";
export default {
  components: {
    Header,
    TransactionsContainer,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
}
</style>
