<template>
  <div :class="viewerClasses">
    <json-node
      :value="value"
      :name="name"
      :indentWidth="indentWidth"
      :showDataType="showDataTypes"
      :showComma="showComma"
      :showArrayIndex="showArrayIndex"
      :showObjectSize="showObjectSize"
      :objectSizeName="objectSizeName"
      :iconStyle="iconStyle"
      :sort="sort"
      :isRoot="true"
      :copyable="copyable"
      :addable="addable"
      :editable="editable"
      :removable="removable"
    ></json-node>

    <modal :show.sync="showEditor">
      <field-editor :kv="editingKv" @change="onFieldChange"></field-editor>
    </modal>
  </div>
</template>

<script>
import JsonNode from "./node";
import FieldEditor from "./data-field-editor";
import Modal from "./modal";
import Dispatcher from "./utils/dispatcher";

export default {
  name: "JsonVuer",
  components: { JsonNode, FieldEditor, Modal },
  model: {
    prop: "src",
    event: "update",
  },
  props: {
    value: {
      type: [Object, Array, String, Number, Boolean, Date, Function],
      default: null,
    },
    sort: {
      type: Boolean,
      default: false,
    },

    name: {
      type: String,
      default: "",
    },

    indentWidth: {
      type: Number,
      default: 4,
    },

    showObjectSize: {
      type: Boolean,
      default: true,
    },

    objectSizeName: {
      type: String,
      default: "items",
    },

    showArrayIndex: {
      type: Boolean,
      default: true,
    },

    showDataTypes: {
      type: Boolean,
      default: true,
    },

    showComma: {
      type: Boolean,
      default: true,
    },

    iconStyle: {
      type: String,
      default: "circle",
    },

    theme: {
      type: String,
      default: "default",
    },

    copyable: {
      type: Boolean,
      default: true,
    },
    addable: {
      type: Boolean,
      default: true,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    removable: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    viewerClasses: function () {
      return "json-vuer " + this.theme;
    },
  },
  watch: {
    value(val) {
      this.src = val;
    },
  },
  data() {
    return {
      src: null,
      showEditor: false,
      editingKv: {
        name: "",
        value: "",
        namespace: "",
      },
    };
  },
  created() {
    this.src = this.value;

    Dispatcher.on("EDIT_JSON_KEY_VALUE", this.editJsonKv.bind(this));

    Dispatcher.on("REMOVE_JSON_KEY_VALUE", this.remvoeJsonKv.bind(this));
  },

  mounted() {},

  methods: {
    editJsonKv(data) {
      this.showEditor = true;
      this.editingKv = data;
    },
    remvoeJsonKv(data) {
      const path = data.namespace.split("/");
      path.shift();

      if (path.length < 1) {
        this.$delete(this.src, data.name);
        return;
      }

      let obj = this.src;
      for (let p of path) {
        obj = obj[p];
      }

      console.log(path);

      if (data.parentType === "array") {
        obj.splice(data.name, 1);
        this.$set(this.src, path[0], this.src[path[0]]);
      } else {
        delete obj[data.name];
        this.$set(this.src, path[0], Object.assign({}, this.src[path[0]]));
      }
    },
    onFieldChange(data) {
      console.log(data);
      this.showEditor = false;

      const path = data.namespace.split("/");
      path.shift();

      if (path.length < 1) {
        return;
      }

      let obj = this.src;
      for (let p of path) {
        obj = obj[p];
      }

      if (data.parentType === "array") {
        obj.splice(data.name, 1, data.value);
        this.$set(this.src, path[0], this.src[path[0]]);
      } else {
        obj[data.name] = data.value;
        this.$set(this.src, path[0], Object.assign({}, this.src[path[0]]));
      }
    },
  },
};
</script>

<style lang="scss">
@import "./styles/index.scss";
</style>