<template>
  <div id="app">
    <sample-page />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SamplePage from "./components/SamplePage.vue";
export default Vue.extend({
  components: { SamplePage }
});
</script>
