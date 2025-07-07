"use strict";
//basic types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3];
let arr = [1, true, "hello"];
//Tuple
let person = [1, 'brad', true];
//Tuple Array
let employee;
employee = [
    [1, 'bard'],
    [2, 'jhon'],
    [3, 'jill'],
];
//uninon
let pid;
pid = '22';
//enum  
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: 'jhon'
};
//Type Assertion
let cid = 1;
// let customerID= <number>cid
let customerId = cid;
//fuctions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'john',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classs
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registerd`;
    }
}
const brad = new Person(1, "Bard Traversy");
const mike = new Person(2, 'Mike Jordan');
console.log(brad.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'shawn', 'developer');
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jill']);
strArrayArray.push(1);
