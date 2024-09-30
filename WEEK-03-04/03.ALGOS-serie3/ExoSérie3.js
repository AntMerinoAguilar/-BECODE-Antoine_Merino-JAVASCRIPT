//00.exo.md
//---ma 1ère méthode -> on passe par une array de valeur string unique qu'on transorme en array de valeur de chiffre unique
/*function oddishOrEvenish(num) {
    if (typeof num !== "number") {
        return "Error. That's not a number";
    }
    let arrStr = [];
    arrStr = Math.abs(num).toString().split("");
    let arrNum = [];
    for(let i = 0; i < arrStr.length; i++) {
        arrNum.push(parseInt(arrStr[i]));
    }
    let total = 0;
    for(let i = 0; i < arrNum.length; i++) {
        total += arrNum[i];
    }
    return total % 2 === 0 ? "Evenish" : "Oddish";
}*/

//---méthode simplifiée -> on utilise un for...of qui va itérer chaque caractère du string
/*function oddishOrEvenish(num) {
    if (typeof num !== "number") {
        return "Error. That's not a number";
    }
    let stringNum = Math.abs(num).toString();
    console.log(stringNum);
    let total = 0;
    for (let caract of stringNum) {
        total += parseInt(caract);
    }
    return total % 2 === 0 ? "Evenish" : "Oddish";
}
console.log(oddishOrEvenish(453));
console.log(oddishOrEvenish(443));
console.log(oddishOrEvenish(3));
console.log(oddishOrEvenish(0));
console.log(oddishOrEvenish(-453));
console.log(oddishOrEvenish(-41));
console.log(oddishOrEvenish("453"));
console.log(oddishOrEvenish(true));*/


//01.exo.md
/*function getTotalPrice(grocerie) {
    if (!Array.isArray(grocerie) || grocerie.some(item => typeof item !== "object" || Array.isArray(item))) {
        return "Error. Put a valid array of grocerie objects";
    }
    let totalPrice = 0;
    for (let i = 0; i < grocerie.length; i++) {
        totalPrice += grocerie[i].quantity * grocerie[i].price;
    }
    return totalPrice.toFixed(1);
}
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
]));
console.log(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
]));
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
]));
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
]));
console.log(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
]));
//test de Error
console.log(getTotalPrice("hello"));
console.log(getTotalPrice(10));
console.log(getTotalPrice(true));
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    [{ product: "Cereals", quantity: 1, price: 2.50 }]
]));*/


//02.exo.md
//---méthode en utilisant un for
/*function reverseOdd(str) {
    if (typeof str !== "string" || str.includes(".") || str.includes("  ")) {
        return "Error. Put a valid string";
    }
    let arrOfStr = str.split(" ");
    for (let i = 0; i < arrOfStr.length; i++) {
        let numOfLetters = arrOfStr[i].length;
        if (numOfLetters % 2 !==0) {
            arrOfStr[i] = arrOfStr[i].split("").reverse().join("");
        }
    }
    return arrOfStr.join(" ");
}*/

//---méthode en utilisant la méthode .map()
/*function reverseOdd(str) {
    if (typeof str !== "string" || str.includes(".") || str.includes("  ")) {
        return "Error. Put a valid string";
    }
    let arrOfStr = str.split(" ");
    let finalArrOfStr = arrOfStr.map(el => {
        if (el.length % 2 !== 0) {
            return el.split("").reverse().join("");
        }
        return el;
    })
    return finalArrOfStr.join(" ");
}
console.log(reverseOdd("Bananas"));
console.log(reverseOdd("One two three four"));
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));*/


//03.exo.md
//---méthode en passant par des array de caractère dans une array globale et en comparant le dernier index avec le 1er
/*function isSmooth(sentence) {
    if (typeof sentence !== "string" || sentence.includes(".")) {
        return "Error. Put a valid sentence";
    }
    let arrLowerSentence = sentence.toLowerCase().split(" ");
    let subArrSentence = arrLowerSentence.map(el => el.split(""));
    for (let i = 0; i < subArrSentence.length - 1; i++) {
        if (subArrSentence[i][subArrSentence[i].length - 1] === subArrSentence[i + 1][0]) {
            return true;
        }
        return false;
    }
}*/

//---méthode en utilisant directement la métode charAt() sur les strings
/*function isSmooth(sentence) {
    if (typeof sentence !== "string" || sentence.includes(".")) {
        return "Error. Put a valid sentence";
    }
    let arrLowerSentence = sentence.toLowerCase().split(" ");
    for (let i = 0; i < arrLowerSentence.length - 1; i++) {
        if (arrLowerSentence[i].charAt(arrLowerSentence[i].length - 1) === arrLowerSentence[i + 1].charAt(0)) {
            return true;
        }
        return false;
    }
}
console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
console.log(isSmooth("Someone is outside the doorway"));
console.log(isSmooth("She eats super righteously"));
console.log(isSmooth("Someone is ."));
console.log(isSmooth(158));*/


//04.exo.md
//---méthode en passant d'une array de nombres à une array de strings, ensuite on split("") les strings
//---pour n'avoir que des arrays de caractères individuels, ce qui nous permet d'utiliser .includes()
/*function sevenBoom(arrayOfNum) {
    if (!Array.isArray(arrayOfNum) || arrayOfNum.some(item => typeof item !== "number")) {
        return "Error. Put a valid array of numbers";
    }
    let arrayOfStringNum = [];
    for (let i = 0; i < arrayOfNum.length; i++) {
        arrayOfStringNum.push(arrayOfNum[i].toString().split(""));
    }
    for (let i = 0; i < arrayOfStringNum.length; i++)
    if (arrayOfStringNum[i].includes("7")) {
        return "Boom!";
    }
    return "there is no 7 in the array";
}*/

//---méthode en utilisant un for qui va parcourir chaque élément de l'array et le transformer en string,
//---et dans ce for on utilise un autre for qui va parcourir le string pour voir si il y a un caractère "7"
/*function sevenBoom(arrayOfNum) {
    if (!Array.isArray(arrayOfNum) || arrayOfNum.some(item => typeof item !== "number")) {
        return "Error. Put a valid array of numbers";
    }
    for (let i = 0; i < arrayOfNum.length; i++) {
        let numToString = arrayOfNum[i].toString();
        for (let j = 0; j < numToString.length; j++) {
            if (numToString[j] === "7") {
                return "Boom!";
            }
        }
    }
    return "there is no 7 in the array";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));
console.log(sevenBoom("[1, 2, 3, 4, 5, 6, 7]"));
console.log(sevenBoom("hello"));
console.log(sevenBoom(7));
console.log(sevenBoom(true));*/


//05.exo.md
//---méthode en passant par une array et includes pour voir si on est en C ou en F, puis on push
//---dans une nouvelle array juste le nombre en string, ensuite on transforme ce string en nombre et on calcule
/*function convert(temp) {
    if (typeof temp !== "string") {
        return "Error. The temperature must be a string";
    }
    let tempArr = temp.split("");
    if (!tempArr.includes("°") || (!tempArr.includes("C") && !tempArr.includes("F") && !tempArr.includes("c") && !tempArr.includes("f"))) {
        return "Error. Put a valid temperature";
    }
    let arrOfNumCel = [];
    let i = 0;
    while(tempArr[i] !== "°") {
        arrOfNumCel.push(tempArr[i]);
        i ++;
    }
    let numTemp = parseFloat(temp.slice(0, temp.length - 2));
    if (tempArr.includes("C") || tempArr.includes("c")) {
        return `${Math.round((numTemp * 9/5) + 32)}°F`;
    } else if (tempArr.includes("F") || tempArr.includes("f")) {
        return `${Math.round((numTemp - 32) * 5/9)}°C`;
    }
}*/

//---méthode en effectuant directement sur le string mis en argument la méthode .endsWith() pour déterminer
//---si le string termine par "°C" ou "°F", une suite on utilise .slice() pour récupérer que le nombre
/*function convert(temp) {
    if (typeof temp !== "string") {
        return "Error. The temperature must be a string";
    }
    let numTemp = parseFloat(temp.slice(0, temp.length - 2));
    if (temp.endsWith("°C") || temp.endsWith("°c")) {
        return `${Math.round((numTemp * 9/5) + 32)}°F`;
    } else if (temp.endsWith("°F") || temp.endsWith("°f")) {
        return `${Math.round((numTemp - 32) * 5/9)}°C`;
    } else {
        return "Error. Put a valid temperature";
    }
}
console.log(convert("35°C"));
console.log(convert("35.9°C"));
console.log(convert("19°F"));
console.log(convert("19°f"));
console.log(convert("33"));
console.log(convert(33));*/


//06.exo.md
//---méthode for pour itérer chaque élément de l'array de base et vérifier s'il est diff de l'élément de l'array avec des erreurs.
//---on push dans l'élément en question dans l'array créer UNIQUEMENT s'il est différent ET s'il n'y est pas déjà dans l'array dans lequel on veut push
/*function findBrokenKeys(supposedTyped, actuallyTyped) {
    if (typeof supposedTyped !== "string" || typeof actuallyTyped !== "string") {
        return "Error. Arguments must be strinngs";
    }
    let lowerSupposed = supposedTyped.toLowerCase();
    let lowerActually = actuallyTyped.toLowerCase();
    let arrOfLowerSuppo = lowerSupposed.split("");
    let arrOfLowerActu = lowerActually.split("");
    let arrOfBrokenKeys = [];
    for (let i = 0; i < arrOfLowerSuppo.length; i++) {
        if (arrOfLowerSuppo[i] !== arrOfLowerActu[i] && !arrOfBrokenKeys.includes(arrOfLowerSuppo[i])) {
            arrOfBrokenKeys.push(arrOfLowerSuppo[i]);
        }
    }
    return arrOfBrokenKeys;
}*/

//---méthode en utiliant un .filter() pour créer une array contenant uniquement les éléments uniques.
//---On va itérer chaque valeur de l'array de base pour voir si l'élément est différent de l'array avec des erreurs,
//---tout en utilisant .indexOf(), qui renvoie le premier indice pour lequel on trouve un élément donné dans une array,
//---donc si l'élément est déjà apparru dans l'array de base, on ne va pas le prendre en compte
/*function findBrokenKeys(supposedTyped, actuallyTyped) {
    if (typeof supposedTyped !== "string" || typeof actuallyTyped !== "string") {
        return "Error. Arguments must be strinngs";
    }
    let lowerSupposed = supposedTyped.toLowerCase();
    let lowerActually = actuallyTyped.toLowerCase();
    let arrOfLowerSuppo = lowerSupposed.split("");
    let arrOfLowerActu = lowerActually.split("");
    let arrOfBrokenKeys = arrOfLowerSuppo.filter((lettre, index) => {
        return arrOfLowerSuppo.indexOf(lettre) === index && lettre !== arrOfLowerActu[index];
    })
    return arrOfBrokenKeys;
}*/

//---méthode en utilisant un ensemble Set(), on va stocker toutes les clés cassées dedans en utilisant .add(),
//---mais Set ne store que des valeurs uniques, donc pas de doublons, ensuite on transforme le Set en array avec Array.from() 
/*function findBrokenKeys(supposedTyped, actuallyTyped) {
    if (typeof supposedTyped !== "string" || typeof actuallyTyped !== "string") {
        return "Error. Arguments must be strinngs";
    }
    let lowerSupposed = supposedTyped.toLowerCase();
    let lowerActually = actuallyTyped.toLowerCase();
    let arrOfLowerSuppo = lowerSupposed.split("");
    let arrOfLowerActu = lowerActually.split("");
    let BrokenKeysSet = new Set();
    for (let i = 0; i < arrOfLowerSuppo.length; i++) {
        if (arrOfLowerSuppo[i] !== arrOfLowerActu[i]) {
            BrokenKeysSet.add(arrOfLowerSuppo[i]);
        }
    }
    return Array.from(BrokenKeysSet);
}
console.log(findBrokenKeys("HELLO","hevvO"));
console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));*/