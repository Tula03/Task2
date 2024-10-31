Array.prototype.last = function() {
    if (this.length === 0) {
        return -1; 
    }
    return this[this.length - 1]; 
};


const arr1 = [1, 2, 3, 4];
console.log(arr1.last()); 

const arr2 = [];
console.log(arr2.last()); 

const arr3 = JSON.parse('[5, 6, 7, 8]');
console.log(arr3.last()); 

const arr4 = JSON.parse('[]');
console.log(arr4.last()); 