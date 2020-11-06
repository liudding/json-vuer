<template>
  <div v-if="show" @click.self="toggle" class="json-viewer-modal__container">
    <div class="json-viewer-modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
      show(val) {
          this.display = val
      }
  },
  data: () => {
      return {
          display: false
      }
  },
  methods: {
    toggle() {
        this.display = !this.display
        this.$emit('update:show', this.display);
    },
  },
};
</script>

<style lang="scss" scoped>
.json-viewer-modal {
  &__container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #00000055;
    z-index: 9999;
  }

  &__content {
    padding: 8px;

    height: 50%;
    width: 50%;

    overflow: auto;

    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
</style>