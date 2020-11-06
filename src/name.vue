<script>
export default {
  props: {
    name: String,
    parentType: String,
  },
  render() {
    if (!this.name) {
      return null;
    }

    if (this.parentType === "array") {
      return (
        <span>
          <span class="json-name array-index">{this.name}</span>
          <span class="json-colon">:</span>
        </span>
      );
    }

    return (
      <span>
        <span class="json-quotes">"</span>
        <span class="json-name">{this.name}</span>
        <span class="json-quotes">"</span>
        <span class="json-colon">:</span>
      </span>
    );
  },
};
</script>
