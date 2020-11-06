<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
// import  "./icons/minus-circle.svg"

const req = require.context("./icons", false, /\.svg$/);

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);

export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      default: "svg",
    },
    name: {
      type: String,
      default: "",
      required: true,
    },
    className: {
      type: String,
      default: "",
    }
  },
  computed: {
    iconName() {
      let hash = this.type === "svg" ? "#" : "";
      return `${hash}${this.name}`;
    },
    svgClass() {
      if (this.className) {
        return "icon " + this.className;
      } else {
        return "icon";
      }
    }
  },
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  /* preserveAspectRatio: xMidYmid meet; */
  overflow: hidden;
}
</style>
