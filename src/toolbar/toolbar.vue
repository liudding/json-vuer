
<template>
  <span class="json-node-toolbar">
    <copy v-if="this.copyable" :value="value" :indentWidth="indentWidth"></copy>

    <span
      v-if="this.editable"
      @click="onClickEdit"
      class="json-node-tool json-node-tool__edit"
    >
      <edit></edit>
    </span>
    <span
      v-if="this.removable"
      @click="onClickRemove"
      class="json-node-tool json-node-tool__remove"
    >
      <remove></remove>
    </span>
  </span>
</template>


<script>
import Copy from "./copy";
import Remove from "../icons/remove";
import Edit from "../icons/edit";
import Dispatcher from "../utils/dispatcher";

export default {
  props: [
    "copyable",
    "editable",
    "addable",
    "removable",
    "indentWidth",
    "name",
    "value",
    "dataType",
    "namespace",
    "parentType",
  ],
  components: { Copy, Remove, Edit },
  methods: {
    onClickEdit() {
      Dispatcher.dispatch("EDIT_JSON_KEY_VALUE", {
        name: this.name,
        value: this.value,
        dataType: this.dataType,
        namespace: this.namespace,
        parentType: this.parentType,
      });
    },
    onClickRemove() {
      Dispatcher.dispatch("REMOVE_JSON_KEY_VALUE", {
        name: this.name,
        value: this.value,
        dataType: this.dataType,
        namespace: this.namespace,
        parentType: this.parentType,
      });
    },
  },
};
</script>

<style>
.json-node-toolbar {
  padding: 0 4px;
}

.json-node-tool {
  cursor: pointer;
  padding: 0 4px;
}
</style>