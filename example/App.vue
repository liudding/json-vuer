<template>
  <div id="app">
    <json-viewer :value="json" theme="default"/>
  </div>
</template>

<script>


export default {
  name: "App",
  data() {
    return {
      json: {
        name: "ding",
        gener: 1,
        male: true,
        foods: ["apple", "banana"],
        birthday: new Date,

        company: {
          name: "Menco",
          employees: 20,
        },
        age: 20.3,
        ud: undefined,
        comp: null,

        friends: [{
          name: 'eru',
          age: 18
        }, {
          name: 'ning',
          age: 20
        }, {
          name: 'she',
          age: 18
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
