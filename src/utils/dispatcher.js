



export default {
    listeners:{},


    on: function (action, callback, listener=null) {
        if (listener) {
            callback.bind(listener)
        }
        
        if (this.listeners[action]) {
            this.listeners[action].push(callback);
        } else {
            this.listeners[action] = [callback];
        }
    },

    dispatch: function (action, ...data) {
        if (!this.listeners[action]) {
            console.warn(`Action ${action} not registered`)
            return;
        }

        for (let cb of this.listeners[action]) {
            cb(...data);
        }
    }
}