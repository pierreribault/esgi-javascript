function camelCase(string) {
    return string.split(' ').map(word => toUpperCase(word)).join('')
}

function prop_access(object, path) {
    let result = object

    if(path == null || path == "") {
        return object
    }

    path.split('.').forEach(element => {
        if(result[element] == undefined) {
            result = `${path} not exist`;
            return
        }

        result = result[element]
    })

    return result
}

function toUpperCase(string) {
    return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase()
}