<script>
export default {
  props: {
    name: String,
    value: Date,
  },
  data() {
    return {};
  },

  methods: {},

  render() {
    return (
      <span class="json-value json-value__date">
        "{this.value.toLocaleTimeString()}"
      </span>
    );
  },
};
</script>