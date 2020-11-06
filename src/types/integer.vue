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
      <span class="json-value json-value__integer">
        {this.value}
      </span>
    );
  },
};
</script>
