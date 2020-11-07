import JsonVuer from './json-vuer'

JsonVuer.install = function (Vue) {
    Vue.component(JsonVuer.name, JsonVuer)
}

export default JsonVuer