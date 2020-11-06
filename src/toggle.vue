<template>
  <span
    @click="toggle"
    class="json-toggle"
    :class="{
      'json-toggle__collapsed': this.expanded,
      'json-toggle__expanded': !this.expanded,
    }"
  >
    <component v-show="this.expanded" v-bind:is="collapseIcon"></component>
    <component v-show="!this.expanded" v-bind:is="expandIcon"></component>
  </span>
</template>


<script>
import CollapseCircle from "./icons/collapse-circle";
import ExpandCircle from "./icons/expand-circle";

import CollapseSquare from "./icons/collapse-square";
import ExpandSquare from "./icons/expand-square";

import CollapseChevron from "./icons/collapse-chevron";
import ExpandChevron from "./icons/expand-chevron";

export default {
  components: { CollapseCircle, ExpandCircle, CollapseSquare, ExpandSquare, CollapseChevron, ExpandChevron },
  props: {
    iconStyle: {
      type: String,
      default: "chevron",
    },
    collapsed: Boolean,
  },
  computed: {
    collapseIcon: function () {
      return "collapse-" + this.iconStyle;
    },
    expandIcon: function () {
      return "expand-" + this.iconStyle;
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  created() {
    this.expanded = !this.collapsed;
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
      this.$emit("collapsed");
    },
  },
};
</script>

<style scoped>
.json-toggle {
  cursor: pointer;
}
</style>