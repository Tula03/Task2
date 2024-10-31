function isInstanceOf(value, classConstructor) {
    // Check if either value or classConstructor is undefined
    if (typeof value === 'undefined' || typeof classConstructor === 'undefined') {
        return false;
    }
    // Check if classConstructor is a function (i.e., a class)
    if (typeof classConstructor !== 'function') {
        throw new TypeError('The second argument must be a class constructor.');
    }
    // Use instanceof to check if value is an instance of classConstructor or its superclass
    return value instanceof classConstructor;
}

class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(isInstanceOf(dog, Dog)); 
console.log(isInstanceOf(dog, Animal)); 
console.log(isInstanceOf(dog, Object)); 
console.log(isInstanceOf(dog, Array)); 
console.log(isInstanceOf(undefined, Dog)); 
console.log(isInstanceOf(dog, undefined)); 
