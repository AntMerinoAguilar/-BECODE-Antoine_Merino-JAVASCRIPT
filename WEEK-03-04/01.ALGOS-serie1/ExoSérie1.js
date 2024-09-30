

//Copier code autre pc  !!!!!!





//05.exo.md
/*function sortDrinkByPrice(drinks) {
    if (!Array.isArray(drinks) || drinks.some(item => typeof item !== "object")) {
        return "Error. That's not an array of objects";
    }
    let drinksSorted = [];
    for (let i = 0; i < drinks.length; i++) {
        let inserted = false;
        for (let j = 0; j < drinksSorted.length; j++) {
            if (drinks[i].price < drinksSorted[j].price) {
                drinksSorted.splice(j, 0, drinks[i]);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            drinksSorted.push(drinks[i]);
        }
    }
    return drinksSorted;
}
let drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
];
console.log(sortDrinkByPrice(drinks));*/


//06.exo.md
/*function numberOfLegs(chickens,cows, pigs) {
    let chickenLegs = 2;
    let cowLegs = 4;
    let pigLegs = 4;
    if (typeof chickens !== "number" || chickens < 0 || typeof cows !== "number" || cows < 0 || typeof pigs !== "number" || pigs < 0) {
        return "Error. That's not a number for each animal";
    }
    return chickens*chickenLegs + cows*cowLegs + pigs*pigLegs;
}
console.log(numberOfLegs(2,3,5));
console.log(numberOfLegs(-2,0,1));
console.log(numberOfLegs("5",2,8));*/


//07.exo.md
/*function profitableGamble(probability, prize, pay) {
    if (typeof probability !== "number" || probability < 0 || typeof prize !== "number" || prize < 0 || typeof pay !== "number" || pay < 0) {
        return "Error. These are not psoitive numbers";
    }
    if (probability * prize > pay) {
        return true;
    } else {
        return false;
    }
}*/

/*function profitableGamble(probability, prize, pay) {
    if (typeof probability !== "number" || probability < 0 || typeof prize !== "number" || prize < 0 || typeof pay !== "number" || pay < 0) {
        return "Error. These are not psoitive numbers";
    }
    return probability * prize > pay;
}
console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
console.log(profitableGamble(0.2, -50, 9));
console.log(profitableGamble("0.9", "3", "2"));*/


//08.exo.md
/*function totalFrames(fps, minutes) {
    if (typeof fps !== "number" || fps < 0 || typeof minutes !== "number" || minutes < 0) {
        return "Error. These are not positive numbers";
    }
    return fps * minutes * 60;
}
console.log(totalFrames(1, 1));
console.log(totalFrames(-10, 1));
console.log(totalFrames(10, 0));
console.log(totalFrames(10, "4"));*/


//09.exo.md
/*function calculateFuel(distance) {
    if (typeof distance !== "number" || distance <= 0) {
        return "Error. That's not a postive number greater than zero for the distance";
    }
    let total = 10 * distance;
    if (total < 100) {
        return 100;
    } else {
        return total;
    }
}*/

/*function calculateFuel(distance) {
    if (typeof distance !== "number" || distance <= 0) {
        return "Error. That's not a postive number greater than zero for the distance";
    }
    let total = 10 * distance;
    return Math.max(total, 100);
}
console.log(calculateFuel(15));
console.log(calculateFuel(23.5));
console.log(calculateFuel(3));
console.log(calculateFuel("15"));
console.log(calculateFuel(0));
console.log(calculateFuel(-10));*/