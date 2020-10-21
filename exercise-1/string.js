function camelCase(string) {
    if(typeof(string) === 'null' || typeof(string) === 'object') {
        return ""
    }

    return string.replace('_', ' ').split(' ').map(word => toUpperCase(word)).join('')
}

function prop_access(object, path) {
    let result = object

    if(object === null || typeof(object) === 'undefined') {
        return path + " not exist"
    }

    if(typeof(path) === 'null' || path == "") {
        return object
    }

    path.split('.').forEach(element => {
        if(result[element] === undefined) {
            return result = path + " not exist"
        }

        result = result[element]
    })

    return result
}

function toUpperCase(string) {
    return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase()
}