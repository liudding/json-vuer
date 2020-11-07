
<template>
  <span
    @click="onClickCopy"
    class="json-node-tool json-node-tool__copy"
    title="Copy"
  >
    <clipboard-copied
      v-if="copied"
      class="json-node-tool__copy__copied"
    ></clipboard-copied>
    <clipboard v-else class="json-node-tool__copy"></clipboard>
  </span>
</template>

<script>
import Clipboard from "../icons/clipboard";
import ClipboardCopied from "../icons/clipboard-copied";

export default {
  props: ["value", "indentWidth"],
  components: { Clipboard, ClipboardCopied },
  data() {
    return {
      copied: false,
      timer: null,
    };
  },

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

      clearTimeout(this.timer);

      this.copied = true;
      this.timer = setTimeout(() => {
        this.copied = false;
      }, 3000);
    },

    onClickCopy() {
      this.handleCopy();
    },
  },
};
</script>

<style>
</style>