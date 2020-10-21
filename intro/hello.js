console.log('Hello world')

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
console.log(prop_access(prairie, "animal.type.name.test"))