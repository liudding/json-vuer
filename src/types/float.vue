<script>
export default {
  props: {
    name: String,
    value: Number,
  },
  data() {
    return {};
  },

  methods: {},

  render() {
    return (
      <span class="json-value json-value__float">
        {this.value}
      </span>
    );
  },
};
</script>

<style scoped>

</style>