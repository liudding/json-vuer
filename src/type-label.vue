<script>
export default {
  props: {
    type: String,
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      ignore: ["null", 'undefined'],
    };
  },
  render() {
    if (this.show && this.ignore.indexOf(this.type) === -1) {
      return <span class={"json-data-type-label " + 'json-date-type-label__' + this.type}>{this.type}</span>;
    } else {
      return null;
    }
  },
};
</script>