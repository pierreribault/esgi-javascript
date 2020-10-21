function type_check_v1(arg1, arg2) {
    if(arg2 === "null") {
        return arg1 === null
    }

    if(arg2 === "array") {
        return Array.isArray(arg1)
    }

    return typeof(arg1) === arg2
}

function type_check_v2(arg, object) {
    if(!type_check_v1(object, "object")) {
        return false
    }

    if(object.hasOwnProperty('type') && !type_check_v1(arg, object.type)) {
        return false
    }

    if(object.hasOwnProperty('value') && arg !== object.value){
        return false
    }

    if(object.hasOwnProperty('enum')) {
        return (Array.isArray(object.enum) && object.enum.includes(arg))
    }

    return true
}

function type_check(object, conf) {
    if(!type_check_v1(object, "object") || !type_check_v1(conf, "object")) {
        return false
    }

    if(!conf.hasOwnProperty('type')) {
        return false
    }
    
    if(typeof(object) !== conf.type) {
        return false
    }

    if(conf.hasOwnProperty('properties')) {
        for(let propertyName in conf.properties) {
            if(object.hasOwnProperty(propertyName) && !type_check_v2(object[propertyName], conf.properties[propertyName])) {
                return false
            }
        }
    }

    return true
}

console.log(type_check_v1(1, "number"))
console.log(type_check_v1(null, "null"))
console.log(type_check_v1([2,3], "array"))
console.log(type_check_v2(1, {type: "string"}))
console.log(type_check_v2(1, {type: "number", value: 1}))
console.log(type_check_v2(1, {type: "string", value: 1}))
console.log(type_check_v2(1, {type: "number", value: 1, enum: 4}))
console.log(type_check_v2(1, {type: "number", value: 1, enum: [1,2]}))
console.log(type_check_v2(1, {type: "number", value: 1, enum: [3,4]}))

console.log(type_check({props1: 3}, {type: "object", properties: {props1: {type: "number"}}}))