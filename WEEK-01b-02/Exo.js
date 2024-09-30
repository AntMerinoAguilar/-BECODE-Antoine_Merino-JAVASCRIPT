// 02.Running-JS.md
// alert("Hello there !");
// console.log("I am in the console");


// 04.Variables.md
/* let myName = "Antoine";
console.log(myName);
alert(myName); */

/*let exchangeRate = 0.93;
console.log(50 * exchangeRate);
console.log(132 * exchangeRate);
// le taux de change a changé, je peux juste modif la var
exchangeRate = 0.91;
console.log(50* exchangeRate);
console.log(132 * exchangeRate);*/


// 04b.Practice.md
/*var a = "3";
var b = "8";
//Do not change the code above
let c = a;
a = b;
b = c;
//Do not change the code below
console.log("a is " + a);
console.log("b is " + b);*/


// 06b.Practice.md
/*const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!
console.log(message);
let whisper = message.toLowerCase().trim();
console.log(whisper);*/

/*let a = "crapaud";
let b = a[a.length-1];
console.log(a);
console.log(b);*/

/*const word = "skateboard"; //Don't change this line!
console.log(word);
let wordSlice = word.slice(word.indexOf("b"),word.length);
console.log(wordSlice);
let newWord = wordSlice.replace("o","e");
console.log(newWord);
let facialHair = word.slice(word.indexOf("b"),word.length).replace("o","e");
console.log(facialHair);*/


// 07.Numbers.md
/*let randomInt = Math.floor(Math.random() * 11);
console.log(randomInt);
let randomFloat = (Math.random() * 4) + 1;
console.log(randomFloat);*/


// 08.Practice.md
/*const city = "Brussels";
let weatherCondition = "rainy";
let temperature = 24.16879;
const weatherText = `The weather in ${city} is ${weatherCondition} and it's ${parseInt(temperature)}°C outside`;
console.log(weatherText);*/

/*const name = prompt("What is your name?");
alert(`Welcome ${name}!`);*/

/*const name = prompt("What's your name ?");
let age = prompt("How old are you ?");
let live = prompt("In which country do you live ?");
alert(`Welcome ${name}, you are ${age} years old and you live in ${live}`);*/

/*let pricesWithoutVAT = prompt("What's your price VAT free in dollars ?");
alert(`Your price with VAT is ${pricesWithoutVAT * 1.21} $`);*/

/*const pi = Math.PI
let radius = prompt("What's the radius in cm of the circle you want to calculate the surface ?");
alert(`The surface of this circle is ${(radius **2) * pi} cm²`);*/

/*let num1 = prompt("What's your first number ?");
let num2 = prompt("What's your second number ?"); 
alert(`The sum of yours two numbers is ${parseInt(num1) + parseInt(num2)}.`);*/


//11.Conditionals.md
/*let favFood = "lasagna";
switch(favFood){
    case "pizza":
        console.log(`That's right! ${favFood} is my favourite!`);
        break;
    case "hamburger":
        console.log(`That's right! ${favFood} is my favourite!`);
        break;
    case "carbonara":
        console.log(`That's right! ${favFood} is my favourite!`);
        break;
    case "lasagna":
        console.log(`That's right! ${favFood} is my favourite!`);
        break;
    case "hot-dog":
        console.log(`That's right! ${favFood} is my favourite!`);
        break;
    default:
        console.log("Fav food not found...I'm hungry");
        break;
}*/


//11b.Exercise.md
/*const name = prompt("What's your name ?");
let favAni = prompt("which do you prefer, cats or dogs ?");
favAni = favAni.toLowerCase();

switch(true){
    case favAni === "cats" || favAni === "cat":
        console.log(`Hello ${name}, I agree with you ${favAni} are better !`);
        break;
    case favAni ==="dogs" || favAni ==="dog":
        console.log(`Hello ${name}, I agree with you ${favAni} are better !`);
        break;
    default:
        console.log(`Hello ${name}, sorry I don't know this animal...`);
        break;
}*/

/*const mystery = "Paaaa7";
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
    console.log("YOU GOT IT!!!");
} else {
    console.log("TRY AGAIN");
}*/

/*let age = prompt("How old are you ?");

if (age<18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (age==18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
    alert("Powering On. Enjoy the ride!");
}*/

/*let fruit = prompt("What's your favorite fruit ?");
fruit = fruit.toLowerCase();

switch (true) {
    case fruit === "banana" || fruit === "bananas":
        alert(`I also like ${fruit}.`);
        break;
    case fruit === "strawberry" || fruit === "strawberries":
        alert(`I LOVE ${fruit} !`);
        break;
    case fruit === "grape" || fruit === "grapes":
        grapeColor = prompt("Do you prefer purple or green grapes ?");
        grapeColor = grapeColor.toLowerCase();
        if(grapeColor === "purple" || grapeColor === "purples") {
            alert(`I don't like purple ${fruit}.`);
        } else if (grapeColor === "green" || grapeColor === "greens") {
            alert(`Well green grapes are ok...`);
        } else {
            alert("Sorry I don't understand.");
        }
        break;
    default:
        alert(`Sorry I don't understand your word "${fruit}".`);
        break;
}*/





//Copier code autre pc  !!!!!!





//21.Functions.md
/*let colours = function() {
    console.log("red, green and blue.");
}
let myColours = colours;
myColours();*/


/*function favFood(response) {
    console.log(`Your favorite food is ${response}.`);
}
favFood();*/


/*function favFood(response = "empty, please add your fav food") {
    console.log(`Your favorite food is ${response}.`);
}
favFood();*/


/*function favFood(response) {
    if (response === undefined) {
        console.log("Please enter your favorite food !");
    } else {
        console.log(`Your favorite food is ${response}.`);
    }
}
favFood();*/


/*function favNum(num) {
    return num;
}
console.log(`My fav number is ${favNum(9)}`)*/



//21b.exercises.md
/*function repeat(string, times) {
    if (typeof string === "string" && !isNaN(times) && times > 0) {
        let result = "" ;
        for (let i=1 ; i <= times ; i ++) {
            result += string;
        }
    console.log(result);
    }   else {
    console.log("Please try again")
    }
}
repeat("a",10);*/


/*function greet(firstName, lastName) {
    if (typeof firstName==="string" && typeof lastName==="string") {
        let initial = lastName.slice(0,1);
        console.log(`This is ${firstName} ${initial}.`)
    } else {
        console.log("Error, this is not a name. Try again")
    }        
}
greet("Antoine", "Merino");*/


/*function sum(num1, num2) {
    if (!isNaN(num1) && !isNaN(num2)) {
        return num1 + num2;
    } else {
        return "Error. That's not numbers";
    }
}
let result = sum(8,2);
console.log(result);*/


/*function isShortWeather(temp) {
    if (!isNaN(temp) && temp >= 24) {
        return true;
    } else if (!isNaN(temp) && temp < 24) {
        return false;
    } else {
        return "Error. That's not a temperature";
    }
}
console.log(isShortWeather(0));
console.log(isShortWeather(-10));
console.log(isShortWeather(20));
console.log(isShortWeather(30));
console.log(isShortWeather("gsdgs"));
console.log(isShortWeather(true));
console.log(isShortWeather());*/


/*function lastElement(array) {
    if (array.length > 0) {
        return array[array.length - 1];
    } else {
        return null;
    }
}
console.log(lastElement([8, 10, 1, 7, 0, 9]));*/


/*function capitalize(string) {
    if (typeof string === "string") {
        let newString = string.slice(0,1);  //let newString = string[0]; fait la même chose
        newString = newString.toUpperCase();
        newString += string.slice(1,string.length);  //string.slice(1); fait la même chose 
        return newString;
    }   else {
        return "Error. That's not a word";
    }
}
console.log(capitalize("hello"));*/


//---facon de faire avec .some() et on met un !==, ça veut dire qu'il faut au moins un qui satisfasse la condition
/*function sumArray(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers) || arrayOfNumbers.some(item => typeof item !== "number")) {
        return "Error. That's not an array of numbers";
    } else {
        let total = 0;
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            total += arrayOfNumbers[i];
        }
        return total;
    }
}
console.log(sumArray([4,5,1,9,0]));
console.log(sumArray(["4","s",1,"adf",true]));
console.log(sumArray([true]));*/

//---facon de faire avec .every() et on met un ===, ça veut dire qu'il faut que tous satisfassent la condition
/*function sumArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) && arrayOfNumbers.every(item => typeof item === "number")) {
        let total = 0;
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            total += arrayOfNumbers[i];
        }
        return total;
    } else {
        return "Error. That's not an array of numbers";
    }
}
console.log(sumArray([4,5,1,9,0]));
console.log(sumArray(["4","s",1,"adf",true]));
console.log(sumArray([true]));*/





//Copier code autre pc  !!!!!!





//23.FunctionExpressionsHigherOrder.md
/*const callManyTimes = function (func, times) {
    for (let i =0; i< times; i ++) {
        func();
    }
};
const rollDie = function () {
    const roll = Math.ceil(Math.random() * 6);
    console.log(roll);
};
callManyTimes(rollDie, 4);*/