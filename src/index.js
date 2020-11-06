import JsonViewer from './json-viewer'

JsonViewer.install = function (Vue) {
    Vue.component(JsonViewer.name, JsonViewer)
}

export default JsonViewer