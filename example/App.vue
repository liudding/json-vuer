<template>
  <div id="app">
    <div id="control-panel"></div>
    <json-viewer
      :value="json"
      :theme="controls.theme"
      :iconStyle="controls.iconStyle"
      :showArrayIndex="controls.showArrayIndex"
      :showObjectSize="controls.showObjectSize"
      :showDataTypes="controls.showDataTypes"
      :showComma="controls.showComma"
      :objectSizeName="controls.objectSizeName"
      :sort="controls.sort"
      :indentWidth="controls.indentWidth"
      :copyable="controls.copyable"
      :addable="controls.addable"
      :editable="controls.editable"
      :removable="controls.removable"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      controls: {
        theme: "night",
        iconStyle: "circle",

        sort: true,
        indentWidth: 4,
        showComma: true,
        showArrayIndex: true,
        showObjectSize: true,
        showDataTypes: true,
        objectSizeName: "元素",
        copyable: true,
        addable: true,
        editable: true,
        removable: true,
      },

      json: {
        name: "ding",
        integer: 123456,
        boolean: true,
        array: ["str1", "str2", 1, 2],
        obj: {
          string: "this is a string",
          null: null,
        },
        float: 20.3,
        nested: [
          {
            string: "first",
          },
          {
            string: "second",
            obj: {
              string: "json vuer",
            },
          },
        ],
      },
    };
  },
  mounted() {
    let gui = new window.dat.GUI({ autoPlace: true });
    let guiContainer = document.getElementById("control-panel");
    guiContainer.appendChild(gui.domElement);

    gui
      .add(this.controls, "theme", {
        default: "default",
        night: "night",
        "iron-man": "iron-man",
        greenscreen: "greenscreen",
      })
      .name("theme");

    gui
      .add(this.controls, "iconStyle", {
        Circle: "circle",
        Triangle: "triangle",
      })
      .name("iconStyle");

    gui.add(this.controls, "showArrayIndex", true).name("Show Array Index");
    gui.add(this.controls, "showObjectSize", true).name("Show Object Size");
    gui.add(this.controls, "showDataTypes", true).name("Show Data Types");
    gui.add(this.controls, "showComma", true).name("Show Comma");

    gui.add(this.controls, "objectSizeName").name("Object Size Name");

    gui.add(this.controls, "indentWidth", 0, 20, 1).name("Indent Width");
    gui.add(this.controls, "sort", true).name("Sort");

    gui.add(this.controls, "copyable", true).name("Copyable");
    gui.add(this.controls, "addable", true).name("Addable");
    gui.add(this.controls, "editable", true).name("Editable");
    gui.add(this.controls, "removable", true).name("Removable");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
