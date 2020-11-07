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
      :isRoot="true"
      :copyable="copyable"
      :addable="addable"
      :editable="editable"
      :removable="removable"
    ></json-node>

    <modal :show.sync="showEditor">
      <field-editor v-model="editingKv"></field-editor>
    </modal>
  </div>
</template>

<script>
import JsonNode from "./node";
import FieldEditor from "./data-field-editor";
import Modal from "./modal";
import Dispatcher from "./utils/dispatcher";

export default {
  name: "JsonViewer",
  components: { JsonNode, FieldEditor, Modal },
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
      default: "circle"
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
      return "json-viewer-container " + this.theme;
    },
  },
  data() {
    return {
      showEditor: false,
      editingKv: {
        name: "",
        value: "",
        namespace: "",
      },
    };
  },
  created() {
    Dispatcher.on(
      "EDIT_JSON_KEY_VALUE",
      function (data) {
        console.log("=== ", data);
        this.showEditor = true;
        this.editingKv = data;
      }.bind(this)
    );
  },

  mounted() {
  },

  methods: {},
};
</script>

<style lang="scss">
@import "./styles/index.scss";
</style>