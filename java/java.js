//1st Assignment

alert ("First Assignment");

var English = '"Hello World!"';
console.log(English);
alert(English);

var Arabic = '"!اهلا و سهلا"';
console.log(Arabic);
alert(Arabic);

var Dutch = '"Ohi Wereld!"';
console.log(Dutch);
alert(Dutch);



//2nd Assignment

alert ("Second Assignment");

console.log("I'm awesome");
alert("I'm awesome !!");

//3rd Assignment

alert ("Third Assignment");

var x;
console.log("The value of X will be: Undefined");
alert("The value of X will be: Undefined");
console.log(x)
alert(x);

x = 6;
console.log("The value of X will be = " + x);
alert("The value of X will be = " + x);
alert(x);

//4th Assignment

alert ("Fourth Assignment");

var y = ("black");
console.log("The value of Y is = " + y);
alert("The value of Y is = " + y);


var y = ("white");
console.log("The value of Y is = " + y);
alert("And now the value of Y is = " + y);


//5th Assignment

alert ("Fifth Assignment");

var z = 7.25;
console.log(z);
alert("if Z is = " + z);

var a = Math.round(z);
console.log(a);
alert("then the nearest integer number will be =" + a);

if (a > z) {

    console.log("The highest value of between A and Z is = " + a);
    alert("The highest value between A and Z is = " + a);
    
} else {
    
    console.log("The highest value of between A and Z is = " + z);
    alert("The highest value between A and Z is = " + z);
}

//6th Assignment

alert ("Sixth Assignment");

var Animals = [];
console.log("the value of the array is = Empty");
alert("the value of the array is = Empty");
console.log(Animals);

Animals = ["cat " , "dog " , "horse "];
console.log(Animals);
alert("but now the value of the array is = " + Animals);

var myFavAnimal = ("baby pig");
console.log(myFavAnimal);
alert("My favorite animal is : " + myFavAnimal);

Animals.push(myFavAnimal);
console.log(Animals);
alert("After we add my favorite animal to the array it will be like this : " + Animals);


//7th Assignment

alert ("Seventh Assignment");

var myString = "this,is,a,test";
console.log(myString);
alert(myString);
console.log(myString.length);
alert("the length of my Strings is = " + myString.length);

//8th Assignment

alert ("Eighth Assignment");

var first = "S";
console.log("The value of my first variable is: " + first);
alert("The value of my first variable is: " + first);
alert("and the type of my first variable is : String ");


var second = 1;
console.log("The value of my second variable is: " + second);
alert("The value of my second variable is: " + second);
alert("and the type of my second variable is: Number ");


var third = false;
console.log("The value of my third variable is: " + third);
alert("The value of my third variable is: " + third);
alert("and the type of my third variable is: Logic " );


var fourth = ["A", "B", "C"];
console.log("The value of my fourth variable is: " + fourth)
alert("The value of my fourth variable is: " + fourth);
alert("and the type of my fourth variable is: List");

console.log(typeof first);
console.log(typeof second);
console.log(typeof third);
console.log(typeof fourth);
var type = [typeof first , typeof second , typeof third , typeof fourth]
console.log(type);
alert("the actual type of my variables is : " + type);

alert(" And now we will compare between the types of my variable !")
if (typeof first === typeof second) {
    console.log("Same Type");
    alert("Same Type");

} else if (typeof first === typeof third) {
    console.log("Same Type");
    alert("Same Type");

} else if (typeof first === typeof fourth) {
    console.log("Same Type");
    alert("Same Type");

} else if (typeof second === typeof third) {
    console.log("Same Type");
    alert("Same Type");

} else if (typeof second === typeof fourth) {
    console.log("Same Type");
    alert("Same Type");

} else if (typeof third === typeof fourth) {
    console.log("Same Type");
    alert("Same Type");

} else {
    console.log("and the result is : 'NOT SAME TYPE!'");
    alert("and the result is : 'NOT THE SAME TYPE!'");

}

//9th Assignment

alert ("Ninth Assignment");

var x = 7;
console.log(x);
alert("the value of x is = " + x);

x = x % 3;
console.log(x);

console.log("And 7 % 3 is = " + x);
alert("And 7 % 3 is = " + x);

//10th Assignment

alert ("Tenth Assignment");

var array = ["a", 7, true];
console.log("If the values of my array are: " + array);
alert("If the values of my array are: " + array);
console.log("and the type of my values are: " + typeof array)
alert("and the type of my values are: " + typeof array)

if (array === ["a", 7, true]){

    console.log("Yes, you can store multiple types in one array");
    alert("Yes, you can store multiple types in one array");
    
}else {

    console.log("No, you can't store multiple types in one array");
    alert("No, you can't store multiple types in one array");

}



if (6/0 === Infinity && 10/0 === Infinity) {
    
    console.log("Yes, you can compare infinities");
    alert("Yes, you can compare infinities");
} else {
  
    console.log ("No, you cannot compare infinities");
    alert("No, you cannot compare infinities");
}

alert("Here we go i have done my assignment !!")
alert("Also i want to say SORRY to Chileshe Lukwesa because if have copied part of here homework")

