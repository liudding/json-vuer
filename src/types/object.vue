<script>
import JsonNode from "../node";

export default {
  props: [
    "name",
    "value",
    "type",
    "namespace",
    "indentWidth",
    "showObjectSize",
    "objectSizeName",
    "showArrayIndex",
    "showDataType",
    "showComma",
    "copyable",
    "editable",
    "addable",
    "removable",
  ],
  data() {
    return {
      collapsed: false,
    };
  },

  methods: {
    renderContent(h) {
      const elements = [];

      const keys = Object.keys(this.value || {});

      keys.forEach((item, index) => {
        const isLast = index === keys.length - 1;
        elements.push(
          h(JsonNode, {
            props: {
              name: item,
              value: this.value[item],
              namespace: this.namespace,
              parentType: this.type,
              indentWidth: this.indentWidth,
              showObjectSize: this.showObjectSize,
              objectSizeName: this.objectSizeName,
              showDataType: this.showDataType,
              showName: !this.isArray() || this.showArrayIndex,
              showComma: this.showComma && !isLast,
              showArrayIndex: this.showArrayIndex,

              copyable: this.copyable,
              addable: this.addable,
              editable: this.editable,
              removable: this.removable,
            },
          })
        );
      });
      return (
        <div style="padding-left: 32px;" class="kv-pair fold-line">
          {h("div", elements)}
        </div>
      );
    },

    isArray() {
      return this.type === "array";
    },
  },

  render(h) {
    return (
      <div class="json-value json-value__object">{this.renderContent(h)}</div>
    );
  },
};
</script>