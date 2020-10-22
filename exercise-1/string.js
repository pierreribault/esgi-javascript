function camelCase(string) {
    if(typeof(string) !== 'string') {
        return ""
    }

    return string.replace('_', ' ').split(' ').map(word => toUpperCase(word)).join('')
}

function prop_access(object, path) {
    let result = object

    if(object === null || typeof(object) === 'undefined') {
        return path + " not exist"
    }

    if(path === null || path == "") {
        return ""
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


const prairie = {
    'animal' : {
        'region': "france",
        'couleur': ["bleu", "blanc", "rouge"],
        'type' : {
            'name': 'chien'
        }
    }
}

console.log(prop_access(null, "test"))