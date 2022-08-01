const object1 = { a: 1, b: 2, c: 3 };
const object2 = {};

function isEmpty(obj) {
    for(const property in obj) {
        if(obj.hasOwnProperty(property))
            return false;
    }

    return true;
}

const result1 = isEmpty(object1)
const result2 = isEmpty(object2)

console.log('object1 is empty', result1) // false
console.log('object2 is empty', result2) // true