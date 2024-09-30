//00.exo.md
/*function countTrue(array) {
    if (!Array.isArray(array) || array.some(item => typeof item !== "boolean")) {
        return "Error. That's not an array of true or false value"
    }
    let totalTrue = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
            totalTrue ++;
        }
    }
    return totalTrue;
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
console.log(countTrue([true, "false", "true", false]));
console.log(countTrue([true, 41, false, true, false]));*/


//01.exo.md
/*function possibleBonus(myPosition, friendPosition) {
    const myPosNum = typeof myPosition === "number";
    const myPosNumInt = Number.isInteger(myPosition);
    const friendPosNum = typeof friendPosition === "number";
    const friendPosNumInt = Number.isInteger(friendPosition);
    if (!myPosNum || !myPosNumInt || !friendPosNum || !friendPosNumInt || myPosition <0 || friendPosition <0) {
        return "Error. These are not positive integer number";
    }
    const diff = friendPosition - myPosition;
    if(diff <= 6 && diff > 0) {
        return true;
    } else {
        return false;
    }
}*/

/*function possibleBonus(myPosition, friendPosition) {
    const myPosNum = typeof myPosition === "number";
    const myPosNumInt = Number.isInteger(myPosition);
    const friendPosNum = typeof friendPosition === "number";
    const friendPosNumInt = Number.isInteger(friendPosition);
    if (!myPosNum || !myPosNumInt || !friendPosNum || !friendPosNumInt || myPosition <0 || friendPosition <0) {
        return "Error. These are not positive integer number";
    }
    const diff = friendPosition - myPosition;
    return diff <= 6 && diff > 0;
}
console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));
console.log(possibleBonus(-1, 3));
console.log(possibleBonus("g", 3));
console.log(possibleBonus(5, true));*/


//02.exo.md
//---méthode en passant par un string et supprimant le signe - quand on a un nombre négatif
/*function num_of_digits(number) {
    const typeNum = typeof number === "number";
    const numInt = Number.isInteger(number);
    if (!typeNum || !numInt) {
        return "Error. That's not a integer number"
    }
    let numberInString = number.toString();
    if (numberInString[0] === "-") {
        numberInString = numberInString.slice(1);  // .slice(1) va couper le string à partir de l'index 1 jusqu'à la fin du string
    }
    const indexTotal = numberInString.length;
    return indexTotal;
}*/

//---méthode en utilisant la méthode Math.abs() lorsque l'on passe en string
/*function num_of_digits(number) {
    const typeNum = typeof number === "number";
    const numInt = Number.isInteger(number);
    if (!typeNum || !numInt) {
        return "Error. That's not a integer number"
    }
    let numberInString = Math.abs(number).toString();
    const indexTotal = numberInString.length;
    return indexTotal;
}
console.log(num_of_digits(1000));
console.log(num_of_digits(0));
console.log(num_of_digits(-12));  // Attention ici, Pour que le - ne soit pas compris comme un caractère quand on le passe en string, et donc l'index augmente de 1, il faut SOIT utiliser la valeur absolue SOIT effacer le "-" du string !!
console.log(num_of_digits("1000"));
console.log(num_of_digits(true));
console.log(num_of_digits());*/


//03.exo.md
/*function toArray(object) {
    if (typeof object !== "object" || object === null) {
        return "Error. That's not an object";
    }
    let resultArray = [];
    for (let key in object) {
        let pair = [];
        pair.push(key);
        pair.push(object[key]);
        resultArray.push(pair);
    }
    return resultArray;
}
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));
console.log(toArray("hello"));
console.log(toArray(4587));*/


//04.exo.md
/*function arrayOfMultiples(num, length) {
    if (typeof num !== "number" || typeof length !== "number" || length < 1) {
        return "Error. The arguments are not two correct numbers";
    }
    let arrayNumber = [];
    for (let i = 1; i<= length; i++) {
        arrayNumber.push(num * i);
    }
    return arrayNumber;
}
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(-12, 10));
console.log(arrayOfMultiples(0, 4));
console.log(arrayOfMultiples(0));
console.log(arrayOfMultiples("hello"));*/


//05.exo.md
/*function removeLeadingTrailing(numString) {
    return parseFloat(numString).toString();
}
console.log(removeLeadingTrailing("00230.000"));
console.log(removeLeadingTrailing("00230.010"));
console.log(removeLeadingTrailing("000.0001"));
console.log(removeLeadingTrailing("0.000"));
console.log(removeLeadingTrailing("30"));
console.log(removeLeadingTrailing("0"));*/


//06.exo.md
//---les 2 méthodes fonctionnent, la 1er très simple, la 2ème vérifie si la valeur est une array et si oui, prend sa valeur
/*function sortIt(arrayOfNum) {
    arrayOfNum.sort((a,b) => {
        return a - b;
    })
    return arrayOfNum;
}*/

/*function sortIt(arrayOfNum) {
    arrayOfNum.sort((a,b) => {
        let valeurA = Array.isArray(a) ? a[0] : a; 
        let valeurB = Array.isArray(b) ? b[0] : b;
        return valeurA - valeurB;
    })
    return arrayOfNum;
}
console.log(sortIt([4, 1, 3]));
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([[3], 4, [2], [5], 1, 6]));
console.log(sortIt([[4], [1], 10]));*/


//07.exo.md
/*function calculator(num1, mathOp, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Error, arguments are not correct";
    }
    switch (mathOp) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if(num2 === 0) {
                return "Can't divide by 0!";
            }
            return num1 / num2;
        default:
            return "Error, the math operator is not correct";
    }
}
console.log(calculator(2, "+", 2));
console.log(calculator(5, "*", 3));
console.log(calculator(8, "/", 4));
console.log(calculator(2, "-", 2));
console.log(calculator(-2, "/", 0));
console.log(calculator(-2, "*", 0));
console.log(calculator(2, "+", -5));*/


//08.exo.md
//---Pour vraiment faire l'exercice il faudrait déclarer une array de tous les pays existants et vérifier si le pays en argument existe dans la liste ou pas
/*function areaOfCountry(country, areaOfCountry) {
    if (typeof country !== "string" || typeof areaOfCountry !== "number" || areaOfCountry >= 148940000) {
        return "Error. Put a correct country or a correct area";
    }
    let totalArea = 148940000;
    let proportion = (areaOfCountry/totalArea * 100).toFixed(2);
    return `${country} is ${proportion}% of the total world's landmass`;
}*/

/*const countryList = ["Russie", "États-Unis", "Iran"] // etc etc 
function areaOfCountry(country, areaOfCountry) {
    if (!countryList.includes(country) || typeof areaOfCountry !== "number" || areaOfCountry >= 148940000) {
        return "Error. Put a correct country or a correct area";
    }
    let totalArea = 148940000;
    let proportion = (areaOfCountry/totalArea * 100).toFixed(2);
    return `${country} is ${proportion}% of the total world's landmass`;
}
console.log(areaOfCountry("Russie", 17098242));
console.log(areaOfCountry("États-Unis", 9372610));
console.log(areaOfCountry("Iran", 1648195));
console.log(areaOfCountry("chf", 1480000));*/


//09.exo.md
/*function reverseWords(word) {
    let newWord = word.trim().split(" ").reverse().filter(el => el).join(" ");
    return newWord;
}
console.log(reverseWords("  hello    world!    "));
console.log(reverseWords(" the sky is blue"));
console.log(reverseWords("a good example"));*/