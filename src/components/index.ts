import Vue from "vue";
import { VueConstructor } from "vue/types/vue";

import VueSimpleTable from "./VueSimpleTable.vue";

let isInstall = false;

export function install(Vue: VueConstructor) {
  if (isInstall) return;
  isInstall = true;
  Vue.component("vue-simple-table", VueSimpleTable);
}

const plugin = {
  install
};

Vue.use(plugin);

export default VueSimpleTable;
