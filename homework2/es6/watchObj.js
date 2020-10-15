/* global Proxy */
export default function watchObj(node, callback) {
    let validator = {
        get(target, prop) {
            if(typeof target[prop] === 'function' && target[prop] !== null){
                target.querySelector.bind(target)
            }
            if (typeof target[prop] === 'object' && target[prop] !== null) {
                return new Proxy(target[prop], validator)
            }
        },
        set(target, property, value) {
            target[property] = value;
            callback(property, value)
            return true;
        }
    }
    
    return new Proxy(node,validator)
}