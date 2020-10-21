function camelCase(string) {
    if(string == null || string === 'object') {
        return string
    }

    return string.replace('_', ' ').split(' ').map(word => toUpperCase(word)).join('')
}

function prop_access(object, path) {
    let result = object

    if(path == null || path == "") {
        return object
    }

    if(object == null) {
        return "test not exist"
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


console.log(toUpperCase('un test'))
console.log(camelCase('un test'))
console.log(prop_access(prairie, "animal.test"))