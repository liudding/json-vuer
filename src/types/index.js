import JsonObject from "./object.vue";
import JsonString from "./string";
import JsonInteger from "./integer";
import JsonBoolean from "./boolean";
import JsonDate from "./date";
import JsonFloat from "./float";
import JsonFunction from "./function";
import JsonNan from "./nan";
import JsonNull from "./null";
import JsonUndefined from "./undefined"

export default {
    types: {
        object: JsonObject,
        array: JsonObject,
        string: JsonString,
        integer: JsonInteger,
        boolean: JsonBoolean,
        date: JsonDate,
        float: JsonFloat,
        function: JsonFunction,
        nan: JsonNan,
        null: JsonNull,
        undefined: JsonUndefined
    },

    getType(obj) {
        let type = this.detectType(obj);
        // some extra disambiguation for numbers
        if (type === 'number') {
            if (isNaN(obj)) {
                type = 'nan';
            } else if ((obj | 0) != obj) {
                //bitwise OR produces integers
                type = 'float';
            } else {
                type = 'integer';
            }
        }
        return type;
    },
    
    //source: http://stackoverflow.com/questions/7390426/better-way-to-get-type-of-a-javascript-variable/7390612#7390612
    detectType(obj) {
        return {}.toString
            .call(obj)
            .match(/\s([a-zA-Z]+)/)[1]
            .toLowerCase();
    },
    
    getJsonTypeNodeByName(type) {
        return this.types[type];
    },

    getJsonTypeNode(item) {
        const type = this.getType(item);

        return this.types[type];
    }
}