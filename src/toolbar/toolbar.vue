
<template>
  <span class="json-node-toolbar">
    <copy v-if="this.enableCopy" :value="value" :indentWidth="indentWidth"></copy>

    <span @click="onClickEdit" class="json-node-tool json-node-tool__edit">
      <edit></edit>
    </span>
    <span class="json-node-tool json-node-tool__remove">
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
  props: ["enableCopy", "enableEdit", "enableAdd", "enableRemove",  "indentWidth", "name", "value", "namespace"],
  components: { Copy, Remove, Edit },
  methods: {
    onClickEdit() {
      Dispatcher.dispatch('EDIT_JSON_KEY_VALUE', {
        name: this.name,
        value: this.value,
        namespace: this.namespace,
      })
    }
  }
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