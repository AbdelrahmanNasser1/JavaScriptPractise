"use strict";
function myFunction() {
    let firstName = "Abdelrahman";
    let secondName = "Nasser";
    console.log(typeof firstName + " " + typeof secondName);
    const json = JSON.parse("55");
    console.log(typeof json);
}
const circu = (diameter) => {
    return diameter * Math.PI;
};
console.log(circu(5));
/*Arrays*/
let strings = ["khaled", "reda", "monir", "tarek"]; // strings only
strings[4] = "tamer";
for (let i = 0; i < strings.length; i++) {
    console.log("number index" + i + ": " + strings[i]);
}
let numbers = [1, 2, 3, 4];
for (let i = 0; i < numbers.length; i++) {
    console.log("number index" + i + ": " + numbers[i]);
}
let mixedArray = ["tamer", 3, 4, "sa"];
mixedArray[0] = 1;
for (let i = 0; i < mixedArray.length; i++) {
    console.log("number index" + i + ": " + mixedArray[i]);
}
let ninja;
ninja = {
    name: "tarek",
    belt: "red",
    age: 24,
};
let ninjaTwo;
ninjaTwo = {
    name: "tarek",
    age: 24,
    beltColor: "red",
};
let numbs = []; // initialize it to avoid error
numbs.push(1);
//union types
let mixedValues = [];
mixedValues.push("hello");
mixedValues.push(0);
mixedValues.push(true);
console.log(mixedValues);
let uid;
uid = "123";
uid = 123;
//dynamic assign (any)
let dynamicValue;
let dynamicArray = [];
let greet;
greet = () => {
    console.log("Hello");
};
const sum = (a, b, c = 'teraf') => {
    return a;
};
let res = sum(4);
console.log(res);
const minus = (a, b) => {
    console.log(a - b);
};
minus(10, 7);
