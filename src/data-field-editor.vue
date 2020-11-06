<template>
  <div  class="data-field-editor">
    <form>
      <label>name</label>
      <input type="text" v-model="kv.name" />

      <select>
        <option value="string">string</option>
      </select>

      <label>value</label>
      <textarea v-model="kv.value"></textarea>

      <button>submit</button>
    </form>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'kv',
    event: 'update'
  },
  props: {
    kv: Object,
  },
  data: () => {
    return {};
  },
  methods: {
    submite() {
      this.$emit('update', this.kv)
    },
  },
};
</script>

<style>

.data-field-editor {
    background-color: white;
}

</style>