<template>
  <div id="app">
    <sample-page />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SamplePage from "./components/SamplePage.vue";
export default defineComponent({
  components: { SamplePage },
  setup() {}
});
</script>
