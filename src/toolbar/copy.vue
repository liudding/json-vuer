
<template>
  <span
    @click="onClickCopy"
    class="json-node-tool__copy"
    style="cursor: pointer"
    title="Copy"
  >
    <clipboard></clipboard>
  </span>
</template>

<script>
import Clipboard from "../icons/clipboard";

export default {
  props: ["value", "indentWidth"],
  components: { Clipboard },

  methods: {
    checkCopySupported() {
      return (
        document.queryCommandSupported && document.queryCommandSupported("copy")
      );
    },

    formatedValue() {
      return JSON.stringify(this.value, null, this.indentWidth);
    },

    handleCopy() {
      const elem = document.createElement("textarea");
      elem.value = this.formatedValue();
      document.body.appendChild(elem);

      elem.select();

      document.execCommand("copy");

      document.body.removeChild(elem);
    },

    onClickCopy() {
      this.handleCopy();
    },
  },
};
</script>

<style>
</style>