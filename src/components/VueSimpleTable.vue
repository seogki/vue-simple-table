<template>
  <div class="vue-simple-table">
    <div class="vue-simple-table__label" :style="labelStyleObj">
      {{ title }}
    </div>
    <table class="vue-simple-table__table" :style="tableStyleObj">
      <colgroup class="vue-simple-table__colgroup" v-if="colgroup.length > 0">
        <col
          class="vue-simple-table__colgroup-col"
          v-for="(col, idx) in colgroup"
          :key="idx"
          :width="col"
        />
      </colgroup>
      <thead class="vue-simple-table__thead" v-if="thead.length > 0">
        <tr class="vue-simple-table__thead-tr">
          <th
            class="vue-simple-table__thead-th"
            v-for="(th, idx) in thead"
            :key="idx"
          >
            {{ th }}
          </th>
        </tr>
      </thead>
      <!-- define mySelf pass variables to parent by slot scope -->
      <tbody class="vue-simple-table__tbody">
        <!-- with Key -->
        <template v-if="keyName">
          <tr
            class="vue-simple-table__tbody-tr"
            v-for="(item, idx) in list"
            :key="item[keyName]"
          >
            <slot name="td" :item="item" :idx="idx"></slot>
          </tr>
        </template>
        <!-- with Idx -->
        <template v-else>
          <tr
            class="vue-simple-table__tbody-tr"
            v-for="(item, idx) in list"
            :key="idx"
          >
            <slot name="td" :item="item" :idx="idx"></slot>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    colgroup: {
      type: Array as () => String[],
      default: () => []
    },
    thead: {
      type: Array as () => String[],
      default: () => []
    },
    list: {
      type: Array as () => any[],
      default: () => []
    },
    fullSize: {
      type: Boolean,
      default: false
    },
    keyName: {
      type: String
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tableStyleObj() {
      return {
        textAlign: this.center ? "center" : undefined,
        width: this.fullSize ? "100%" : undefined,
        height: this.fullSize ? "100%" : undefined
      };
    },
    labelStyleObj() {
      return {
        textAlign: this.center ? "center" : undefined
      };
    }
  }
});
</script>

<style lang="scss" scoped>
.vue-simple-table {
  label {
    width: 100%;
  }
}
</style>
