<script>
import JsonType from "./types";
import TypeLabel from "./type-label";
import KeyName from "./name";
import Toolbar from "./toolbar/toolbar";
import Toggle from "./toggle";

export default {
  props: {
    name: String,
    value: [Object, Array, String, Number, Boolean, Date, Function],
     namespace: {
      type: String,
      default: 'root'
    },
    parentType: String,
    indentWidth: Number,
    showDataType: Boolean,
    showArrayIndex: Boolean,
    showObjectSize: Boolean,
    objectSizeName: String,
    showName: {
      type: Boolean,
      default: true,
    },
    showComma: Boolean,
    isRoot: {
      type: Boolean,
      default: false,
    },

    copyable: Boolean,
    addable: Boolean,
    editable: Boolean,
    removable: Boolean,
  },
  components: { KeyName, TypeLabel, Toolbar, Toggle },

  data() {
    return {
      collapsed: false,
    };
  },

  methods: {
    toggleCollapse() {
      this.collapsed = !this.collapsed;
    },

    getChildrenNamespace() {
      if (this.isRoot) return 'root';

      return this.namespace + '/' + this.name;
    },


    renderTools(h) {
      return h(Toolbar, {
        props: {
          name: this.name,
          value: this.value,
          namespace: this.namespace,
          indentWidth: this.indentWidth,
          copyable: this.copyable,
          addable: this.addable,
          editable: this.editable && !this.isNested(),
          removable: this.removable,
        },
      });
    },

    isNested() {
      return this.type === "array" || this.type === "object";
    },

    renderObjectSize() {
      if (!this.showObjectSize || !this.isNested()) {
        return;
      }

      let size = 0;

      if (this.type === "object") {
        size = Object.keys(this.value).length;
      } else {
        size = this.value.length;
      }

      return <span class="json-object-size">{size} {this.objectSizeName}</span>;
    },

    renderStartBrace() {
      if (!this.isNested()) {
        return null;
      }

      return (
        <span>
          <span
            class={
              this.type === "array"
                ? "json-braces json-braces__start json-braces__array"
                : "json-braces json-braces__start json-braces__object"
            }
          >
            {this.type === "array" ? "[" : "{"}
          </span>
        </span>
      );
    },

    renderEndBrace() {
      if (!this.isNested()) {
        return null;
      }

      return (
        <span>
          <span
            class={
              this.type === "array"
                ? "json-braces json-braces__end json-braces__array"
                : "json-braces json-braces__end json-braces__object"
            }
          >
            {this.type === "array" ? "]" : "}"}
          </span>
        </span>
      );
    },

    renderCollapse(h) {
      if (!this.isNested()) {
        return null;
      }

      return h(Toggle, {
        on: {
          collapsed: this.toggleCollapse,
        },
      });
    },

    renderContent(h) {
      return this.collapsed
        ? h("span", {
            class: "json-ellipsis",
            on: {
              click: this.toggleCollapse,
            },
            domProps: {
              innerText: "...",
            },
          })
        : this.renderObjectContent(h);
    },

    renderObjectContent(h) {
      const jsonTypeNode = JsonType.getJsonTypeNodeByName(this.type);
      return h(jsonTypeNode, {
        props: {
          name: this.name,
          value: this.value,
          type: this.type,

          indentWidth: this.indentWidth,

          showDataType: this.showDataType,
          showComma: this.showComma,
          showArrayIndex: this.showArrayIndex,
          showObjectSize: this.showObjectSize,
          objectSizeName: this.objectSizeName,

          copyable: this.copyable,
          addable: this.addable,
          editable: this.editable,
          removable: this.removable,

          namespace: this.getChildrenNamespace(),
        },
      });
    },
  },

  render(h) {
    this.type = JsonType.getType(this.value);

    const classes = ["json-node"];

    this.isRoot && classes.push("root");

    if (this.type === "object" || this.type === "array") {
      classes.push("json-type-object");
      classes.push("pair-line");
    } else {
      classes.push("json-type-base");
    }

    return (
      <div class={classes}>
        {this.showName ? (
          <key-name name={this.name} parentType={this.parentType}></key-name>
        ) : null}

        <type-label
          type={this.type}
          show={!this.isRoot && this.showDataType}
        ></type-label>

        {this.renderCollapse(h)}

        {this.renderStartBrace()}

        {this.renderObjectSize()}

        {!this.isNested() || this.collapsed ? null : this.renderTools(h)}

        {this.renderContent(h)}

        {this.renderEndBrace()}

        {this.showComma ? <span class="comma">,</span> : null}

        {!this.isNested() || this.collapsed ? this.renderTools(h) : null}
      </div>
    );
  },
};
</script>

<style lang="scss">
.json-type-base {
  &:hover {
    & .json-node-toolbar {
      display: inline-block;
    }
  }
}

.json-type-object {
  &:hover > .json-node-toolbar {
    display: inline-block;
  }
}

.json-node-toolbar {
  display: none;
}

.json-collapse {
  width: 10px;
  height: 10px;
  font-size: 10px;

  color: white;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  cursor: pointer;
}
</style>