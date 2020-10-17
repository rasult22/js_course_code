/* global Proxy */
export default function watchObj(node, callback) {
    let validator = {
        mainThis: null,
        get(target, prop, receiver) {
            this.mainThis = target
            if (typeof target[prop] === 'object' && target[prop] !== null ||typeof target[prop] === 'function' ) {
                return new Proxy(target[prop], validator, receiver)
            }
        },
        set(target, property, value) {
            target[property] = value;
            callback(property, value)
            return true;
        },
        apply(target, thisArg, args){
            return target.apply(this.mainThis,args)
        }
    }
    
    return new Proxy(node,validator)
}