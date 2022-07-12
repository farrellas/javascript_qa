let nums = [1,2,3,4];
const first = nums.shift();
const last = nums.pop();
nums.unshift(5);
nums.push(0);
// console.log(nums);
// console.log(first);
// console.log(last);


class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Bob')

person.printNameArrow()
person.printNameFunction()