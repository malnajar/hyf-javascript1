//1st Assignment

let English = '"Hello World!"';
console.log(English);
alert(English);

let Arabic = '"!اهلا و سهلا"';
console.log(Arabic);
alert(Arabic);

let Dutch ='"Ohi Wereld!"';
console.log(Dutch);
alert(Dutch);

//2nd Assignment

console.log("I'm awesome");
alert("I'm awesome");

//3rd Assignment

let x;
console.log("The value of x will be: Undefined");
alert("The value of x will be: Undefined");
alert(console.log(x));

x = 6;
console.log("The value of x will be =" + x);
alert("The value of x will be =" + x);


//4th Assignment

let y = "black";
console.log("The value of y is =" + y);
alert("The value of y is =" + y);


y = "white";
console.log("The value of y is =" + y);
alert("And now the value of y is =" + y);


//5th Assignment

let z = 7.25;
console.log(z);
alert(z);

let a = Math.floor(z);
console.log(a);
alert(a);

if (a > z) {
    c = a;
    console.log("The highest value of a= " + c);
    alert("The highest value of a= " + c);
    
} else {
    let c = z;
    console.log("The highest value of z= " + c);
    alert("The highest value of z= " + c);
}

//6th Assignment

let Animals = [];
console.log("the value of the array is = Empty");
alert("the value of the array is = Empty");
console.log(Animals);

Animals = ["cat", "dog", "horse"];
console.log(Animals);
alert("but now the value of the array is =" + Animals);

Animals.push("baby pig");
console.log("And after we add the value baby pig to the array is =" +Animals);
alert(Animals);

//7th Assignment

let myString = "this,is,a,test";
console.log(myString);
alert(myString);
console.log(myString.length);
alert("the length of my strings is =" + myString.length);

//8th Assignment

let first = "s";
console.log("The value of my first variable is: " + first);
alert("The value of my first variable is: " + first);
console.log(typeof first);
alert("and the type of my first variable is :" + typeof first);


let second = 1;
console.log("The value of my second variable is: " + second);
alert("The value of my second variable is: " + second);
console.log(typeof second);
alert("and the type of my second variable is: " + typeof second);


let third = false;
console.log("The value of my third variable is: " + third);
alert("The value of my third variable is: " + third);
console.log(typeof third);
alert("and the type of my third variable is: " + typeof third);


let fourth = ["A", "B", "C"];
console.log("The value of my fourth variable is:" + fourth)
alert("The value of my fourth variable is:" + fourth);
console.log(typeof fourth);
alert("and the type of my fourth variable is: " + typeof fourth);

console.log("My first variable is: string, my second variable is: number, my third variable is: boolean, and my fourth variable is: object");
alert("My first variable is: string, my second variable is: number, my third variable is: boolean, and my fourth variable is: object");

if (typeof first === typeof second || typeof first === typeof third || typeof first === typeof fourth) {
    console.log("Same Type");
    alert("Same Type");

} else if (typeof second === typeof third || typeof second === typeof fourth) {
    console.log("Same Type");
    alert("Same Type");

} else if (typeof third === typeof fourth) {
    console.log("Same Type");
    alert("Same Type");

} else {
    console.log("Not Same Type");
    alert("Not Same Type");
}

//9th Assignment

let x = 7;
console.log(x);
alert(x);

x = x % 3;
console.log(x);
alert(x);

console.log("The new value of x is = " + x);
alert("The new value of x is = " + x);

console.log("The new value of x is the result of 7 is divided by 3");
alert("The new value of x is the result of 7 is divided by 3");

//10th Assignment

let array = ["a", 7, true];

console.log("The value of my array are: " + array);
alert("The value of my array are: " + array);

console.log("Yes, you can store multiple types in an array");
alert("Yes, you can store multiple types in an array");



if (6/0 === Infinity && 10/0 === Infinity) {
    
    console.log("Yes, you can compare infinities");
    alert("Yes, you can compare infinities");
} else {
  
    console.log ("No, you cannot compare infinities");
    alert("No, you cannot compare infinities");
}

