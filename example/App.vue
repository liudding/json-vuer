<template>
  <div id="app">
    <json-viewer :value="json" iconStyle="circle" theme="night" :showArrayIndex="true" :showComma="true"/>
  </div>
</template>

<script>


export default {
  name: "App",
  data() {
    return {
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
        nested: [{
          string: 'first',
        }, {
          string: 'second',
          obj: {
            string: "json vuer"
          }
        }]
      },
    };
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
