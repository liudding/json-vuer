<template>
  <div class="data-field-editor">
    <form>
      <div class="form-group">
        <label>name</label>
        <input type="text" v-model="kv.name" />
      </div>

      <div class="form-group">
        <label>type</label>

        <select>
          <option v-for="item in dataTypes" :key="item" value="string">{{ item }}</option>
        </select>
      </div>

        <div class="form-group">
        <label>value</label>
        <textarea v-model="kv.value"></textarea>
      </div>

      <div class="form-group">
        <label></label>
        <button @click="onSubmit" type="button">submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// import DataType from './types'
export default {
  model: {
    prop: "kv",
    event: "update",
  },
  props: {
    kv: Object,
  },
  data: () => {
    return {
      dataTypes: ['string', 'integer', 'boolean', 'null'],
      converters: {
        string: val => { return '' + val; },
        integer: val => { return +val; },
        boolean: val => { return !! val},
        null: () => { return null }
      }
    };
  },
  created() {
  },
  methods: {
    onSubmit() {
      this.kv.value = this.converters[this.kv.type](this.kv.value);
      this.$emit("update", this.kv);
    },
  },
};
</script>

<style lang="scss" scoped>
.data-field-editor {
  background-color: white;

  padding: 16px;

  form {
    position: relative;
    z-index: 1;
    background: #ffffff;
    max-width: 360px;
    // margin: 0 auto 100px;
    padding: 20px 45px;
    text-align: center;
    border-radius: 4px;

    .form-group {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin-bottom: 12px;

      label {
        width: 80px;
        height: 100%;

      }

      select,
      textarea,
      input {
        outline: 0;
        background: #f2f2f2;
        width: 100%;
        border: 0;
        padding: 12px 16px;
        box-sizing: border-box;
        font-size: 14px;
        border-radius: 4px;
      }

      textarea {
        resize: vertical;
      }
    }

    button {
      outline: 0;
      background: #4caf50;
      width: 100%;
      border: 0;
      border-radius: 4px;
      padding: 15px;
      color: #ffffff;
      font-size: 14px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.3 ease;
      cursor: pointer;

      &:hover,
      &:active,
      &:focus {
        background: #43a047;
      }
    }
  }
}
</style>