function camelCase(string) {
    if(string == null || string === 'object') {
        return string
    }
    
    return string.replace('_', ' ').split(' ').map(word => toUpperCase(word)).join('')
}

function prop_access(object, path) {
    let result = object

    if(path == null || path == "" || object == null) {
        return object
    }

    path.split('.').forEach(element => {
        if(result[element] == undefined) {
            result = path + " not exist"
            return
        }

        result = result[element]
    })

    return result
}

function toUpperCase(string) {
    return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase()
}