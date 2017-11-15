//Q1

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log("the length of my string is: " + myString.length);
myString = myString.replace(/,/g, ' ');
console.log(myString);

//Q2

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log("My favorite animals are: " + favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkats');
console.log("the new value of the array when we add meerkats is: " + favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log("But Jason does not like giraffes so we deleted it : " + favoriteAnimals);

for (let i = 0; i < favoriteAnimals.length; i++){

    if (favoriteAnimals[i] == "meerkats") {
        console.log("The item you are looking for is at index: " + i)
    }
}