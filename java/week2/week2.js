// Q1


function sumAll() {

    console.log("We have an argument of three numbers 1, 55, 43 ");
    var y = 0;
    for (let i = 0; i < arguments.length; i++) {

        y += arguments[i];
    }
    console.log("and the sum of this three numbers is = " + y);
}

var result = sumAll(1, 55, 43);


// Q2


var colorCar = function (color) {
    console.log("a " + color + " car");
}

colorCar("red");



// Q3


const objectList = { name: 'BMW', type: '7 Series', color: 'black' };

function objContent() {

    for (const key of Object.keys(objectList)) {
        console.log(key + ' = ' + objectList[key]);
    }
}
objContent();

// Q4

function vehicleType(color, code) {
    if (code === 1) {
        console.log("a " + color + " Car");
    } else if (code === 2) {
        console.log("a " + color + " motorbike");
    } else {
        console.log("Wrong Code !!");
    }
}

vehicleType("blue", 2);

// Q5

console.log(3 == 3);

// Q6



var vehicle = function (age) {

    if (age == "blue", 1, 5) {
        console.log("a blue used Car");

    } else if (age == "green", 3, 1) {
        // Q9
        console.log("a green new caravan");

    } else {
        console.log("Wrong Code !!");
    }
    return;
}

vehicle("blue", 1, 5);

// Q7 Q8


var vehicles = ["car", "motorbike", "caravan", "bike"];
var i;
i = 2;
console.log(vehicles[i]);

// Q9

vehicle("green", 3, 1);

// Q10

function advertisement() {

    for (i = 0; i < vehicles.length; i++) {

        console.log("Amazing Joe's Garage, we service " + vehicles[i]);
    }

}
advertisement();

// Q11 

vehicles.push("airplane");

advertisement();

// Q12

var emptyObject = {};
console.log("this is an empty " + typeof emptyObject);

// Q13 Q14

const myTeachers = [{ name: "Philipp Beau", modules: "HTML and CSS" }, { name: "Ivana Setiawan", modules: "HTML and CSS" }, { name: "Unmesh Joshi", modules: "Commands" }, { name: "Jim Cramer", modules: "JavaScript" }, { name: "Frank Versnel", modules: "JavaScript" }]

for (i = 0; i < myTeachers.length; i++){

    console.log(myTeachers[i]);
}

// Q15 ...

function foo(func) {
    bar(func) 
}

function bar() {
    console.log('Hello, I am bar!');
}

foo(bar);

// Q16

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

// this is the first way 

console.log(JSON.stringify(x) == JSON.stringify(y));
console.log(JSON.stringify(x) === JSON.stringify(y));
console.log(z == y);
console.log(JSON.stringify(z) == JSON.stringify(x));

// this is the second way

for (i = 0; i < x.length; i++) {

    if (x[i] == y[i] && x[i] === y[i] && typeof x == typeof y) {

        console.log("x == y and x === y is true");
    } else {
        console.log("x == y and x === y is false")
    }

}
console.log("is z == y :" + z == y); // this is true because z = y

for (i = 0; i < x.length; i++) {

    if (x[i] == z[i] && x[i] === z[i] && typeof x == typeof z) {

        console.log("x == z and x === z is true");
    } else {
        console.log("x == z and x === z is false");
    }

}

// Q17

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log("o1 = " + o1.foo + " o2 = " + o2.foo + " o3 = " + o3.foo);

o2 = { foo: 'not bar' };

console.log("o1 = " + o1.foo + " o2 = " + o2.foo + " o3 = " + o3.foo);
console.log("as per the result ... it will not change the value of o3 but it will be affected if we changed the order of our codes");

// Q18

bar = 42; 
console.log(typeof typeof bar);

