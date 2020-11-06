<script>
export default {
  props: {
    name: String,
    value: Function,
  },
  data() {
    return {};
  },

  methods: {},

  render() {
    return (
      <span class="json-value json-value__string">
        "{this.value.toString()}"
      </span>
    );
  },
};
</script>