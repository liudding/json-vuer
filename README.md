# json-vuer

A json viewer and editor for vue


![demonstration](./preview.png)


- [json-vuer](#json-vuer)
  - [Features](#features)
  - [Installation](#installation)
  - [Props](#props)
  - [Themes](#themes)



## Features

* Nested Node can be collapsed/expanded
* Object keys can be sorted
* Json Editor
* Display Object and array size
* Theme support and totally customizable
* Copy to clipboard


## Installation

Install the component with npm:
```shell
npm install json-vuer --save
```

with yarn:
```shell
yarn add json-vuer
```

then, in your application javascript, add:
```javascript
import JsonVuer from "json-vuer"
Vue.use(JsonVuer)
```

and then add the component into your html where you want
```html
<template>
    <div>
        <json-vuer :value="json" 
                   :indentWidth="4" 
                   :showObjectSize="true" 
                   :showDataTypes="true" 
                   :copyable="true"/>
    </div>
</template>
```



## Props

| Name           | Type                    | Default | Description                                                  |
| -------------- | ----------------------- | ------- | ------------------------------------------------------------ |
| value          | JSON                    | null    | Can be any valid json, like object, array, string, etc       |
| v-model        | JSON                    |         |                                                              |
| name           | string \| false \| null | empty   | name of root node. use false or null or empty string for no name |
| indentWidth    | integer                 | 4       | Indent width for nested objects, like object and array       |
| showObjectSize | boolean                 | true    | set to false to hide object and array size                   |
| objectSizeName | string                  | items   | name of the object size                                      |
| showArrayIndex | boolean                 | true    | set to false to hide array index                             |
| showDataTypes  | boolean                 | true    | set to false to hide data types                              |
| showComma      | boolean                 | true    | set to false to hide commas                                  |
| theme          | string                  | default | Packaged themes: "default", "night", "iron-man", "greenscreen" and you can customize the appearance as you like, [see Themes](#themes) . |
| iconStyle      | string                  | circle  | style of expand/collapse icons. Accepted values are "circle", triangle", "square", "chevron". |
| copyable       | boolean                 | true    | set to true to display a copy button on every json node      |
| addable        | boolean                 | false   | set to true to display a add button on every nested node     |
| editable       | boolean                 | false   | set to true to display a edit button on every base type node |
| removable      | boolean                 | false   | set to true to dispaly a delete button on every node         |
| sort           | boolean                 | false   | set to true to sort object keys                              |
|                |                         |         |                                                              |
|                |                         |         |                                                              |
|                |                         |         |                                                              |



## Themes

There are two steps to customize a theme

1. customize the **SCSS** below
2. add `theme="my-theme"` to `JsonVuer` component

```scss
.json-vuer.my-theme { // name of your theme
    background-color: #fff;
    
    .json-name { // customize json key/name 
        color: #000;
        &.array-index { color: #0000FF; }
    }

    .json-value {
        &__object {
            margin-left: 4px;
            .fold-line { border-left: 1px dotted #aaa; }
        }

        &__string { color: #FF0000; }
        &__boolean { color: #0000FF; }
      
        &__integer,
        &__float { color: rgb(47, 100, 71);}
      
        &__null,
        &__undefined,
        &__nan {
            box-sizing: border-box;
            padding: 0 4px;
            border-radius: 4px;
            color: #0000FF;
            background-color: #0000;
            font-size: 11px;
        }
    }

    .json-braces {
        &__start {}
        &__end {}
        &__object {}
        &__array {}
    }

  	.json-comma,
    .json-quotes { color: #000; }

    .json-colon {
        margin: 0 4px;
        color: #000;
        font-weight: bold;
    }

    .json-data-type-label {
        color: #aaa;
        margin-right: 8px;
    }

    .json-toggle {
        padding: 0 8px 0 0;
        color: #000;
        font-size: 13px;

        &__collapsed {}
	      &__expanded {}
    }

    .json-ellipsis {
        color: #000;
        font-weight: bold;
        padding: 0 5px;
    }

    .json-object-size {
        color: #aaa;
        font-size: 12px;
        margin-left: 8px;
    }

    .json-node-toolbar {
        margin-left: 4px;
        color: #000;
        font-size: 14px;
    }
}

```

