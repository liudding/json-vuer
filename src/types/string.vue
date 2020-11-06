<script>
export default {
  props: {
    name: String,
    value: String,
  },
  data() {
    return {};
  },

  methods: {},

  render() {
    return (
      <span class="json-value json-value__string">
        "{this.value}"
      </span>
    );
  },
};
</script>