<template>
  <div>
    <vue-simple-table
      :title="'Table Title'"
      :colgroup="['25%', '25%', '25%', '*']"
      :thead="['title-1', 'title-2', 'title-3', 'title-4']"
      :list="[1, 2, 3, 4, 5, 6]"
      center
      fullSize
    >
      <template #td="{ item, idx }">
        <td>{{ idx }}</td>
        <td>{{ item }}</td>
        <td>{{ item }} + {{ idx }}</td>
        <td>{{ idx }} + {{ item }}</td>
      </template>
    </vue-simple-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueSimpleTable from "./VueSimpleTable.vue";
export default Vue.extend({
  components: { VueSimpleTable }
});
</script>

<style lang="scss">
.vue-simple-table {
  &__label {
    font-weight: bold;
    margin-bottom: 8px;
  }
  &__table {
    /* border: 1px solid grey; */
  }
  &__colgroup {
    /* background: black; */
  }
  &__thead {
    background: #eee;
  }
  &__tbody {
    background: #ccc;
  }

  tr,
  td,
  th {
    border: 1px solid black;
  }
}
</style>
