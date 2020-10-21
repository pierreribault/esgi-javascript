function type_check_v1(arg1, arg2) {
    return typeof(arg1) === arg2
}

function type_check_v2(arg, object) {
    if(object.hasOwnProperty('type') && (typeof(arg) !== object.type)) {
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

function type_check()

console.log(type_check_v1(1, "number"))
console.log(type_check_v2(1, {type: "string"}))
console.log(type_check_v2(1, {type: "number", value: 1}))
console.log(type_check_v2(1, {type: "string", value: 1}))
console.log(type_check_v2(1, {type: "number", value: 1, enum: 4}))
console.log(type_check_v2(1, {type: "number", value: 1, enum: [1,2]}))
console.log(type_check_v2(1, {type: "number", value: 1, enum: [3,4]}))