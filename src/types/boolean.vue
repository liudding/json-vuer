<script>
export default {
  props: {
    name: String,
    value: Boolean,
  },
  data() {
    return {};
  },

  methods: {},

  render() {
    return (
      <span class="json-value json-value__boolean">
        {this.value ? 'true' : 'false'}
      </span>
    );
  },
};
</script>