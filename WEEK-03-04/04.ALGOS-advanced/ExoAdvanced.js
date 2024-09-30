//00.exo.md
/*function FizzBuzz (num) {
    if (typeof num !== "number" || isNaN(num)) {
        console.log("Error. Put a valid number in argument");
        return;
    }
    if (num < 0) {
        for (let i = -1; i >= num; i-- ) {
            switch (true) {
                case i % 15 === 0:
                    console.log("FizzBuzz");
                    break;
                case i % 3 === 0:
                    console.log("Fizz");
                    break;
                case i % 5 === 0:
                    console.log("Buzz");
                    break;
                default:
                    console.log(i);
                    break;
            }
        }
    } else {
        for (let i = 1; i <= num; i++) {
            switch (true) {
                case i % 15 === 0:
                    console.log("FizzBuzz");
                    break;
                case i % 3 === 0:
                    console.log("Fizz");
                    break;
                case i % 5 === 0:
                    console.log("Buzz");
                    break;
                default:
                    console.log(i);
                    break;
            }
        }
    }
}
FizzBuzz("6");
FizzBuzz(-6);
FizzBuzz(6);
FizzBuzz(20);*/


//01.exo.md
//---méthode utilisant la méthode d'array .reduce(), cette méthode réduit les valeurs de l'array à une valeur, ici cette valeur est un objet,
//---cette objet on l'a créé comme valeur initiale dans le .reduce(). Pour la lisibilité on a créé la variable reduceCallBack au préalable.
//---Qui va comprendre l'accumulateur, la current value et la fonction à effectuer. On retourne à chaque fois l'accumulateur.
//---Ensuite vérifier pour chaque valeur de arrayNoteText si elle existe dans l'obj comparateur, si pas return false,
//---si oui on diminue dans l'obj la valeur de la clé se référant à la valeur de arrayNoteText
/*function ransomNote(noteText, magazineText) {
    if (typeof noteText !== "string" || typeof magazineText !== "string") {
        return "Error. Arguments must be string";
    }
    let arrayNoteText = noteText.toLowerCase().split(" ");
    let arrayMagazineText = magazineText.toLowerCase().split(" ");
    let reduceCallBack = (objAccum, wordArray) => {
        if(!objAccum[wordArray]) {
            objAccum[wordArray] = 1;
        } else {
            objAccum[wordArray] ++;
        }
        return objAccum;
    };
    let comparateur = arrayMagazineText.reduce(reduceCallBack, {});
    for (let i = 0; i < arrayNoteText.length; i++) {
        if (!comparateur[arrayNoteText[i]]) {
            return false;
        } else {
            comparateur[arrayNoteText[i]] --;
        }
    }
    return true;
}*/

//---méthode de tri et comparaison directe : Tout d'abord on transforme les 2 strings en 2 array ET on .sort() les array
//---pour qu'elles soient ordonnés de manière lexicographique (alphabétique). Ensuite on va effectuer une boucle while à travers les 2 array ordonnées simultanément,
//---si les 2 valeurs respectives des arrays sont strictement égales, ça veut dire qu'il existe une correspondance, alors on augmente l'index pour chaque array, ainsi de suite.
//---Si les 2 valeurs respectives des arrays ne sont pas égales, il y a 2 option : soit noteWords[i] est supérieur (lexicographiquement parlant) à magazineWords[j],
//---dans ce cas ça veut dire que le mot qu'on veut trouver est potentiellement plus "loin" dans l'array magazine, ou du moins qu'on ne l'a pas encore passé,
//---on continue de chercher le mot correspondant dans l'array magazine en augmentant j++.
//---2ème option : si noteWords[i] est inférieur (lexicographiquement parlant) à magazineWords[j] signifie que nous avons dépassé le point où le mot de noteWords aurait dû apparaître dans le magazineWords.
//---On peut directement conclure que ransomNote ne peut pas être construite, et on retourne false
/*function ransomNote(noteText, magazineText) {
    if (typeof noteText !== "string" || typeof magazineText !== "string") {
        return "Error. Arguments must be string";
    }
    const noteWords = noteText.toLowerCase().split(' ').sort();
    const magazineWords = magazineText.toLowerCase().split(' ').sort();
    let i = 0;
    let j = 0;
    while (i < noteWords.length && j < magazineWords.length) {
        if (noteWords[i] === magazineWords[j]) {
            i++;
            j++;
        } else if (noteWords[i] < magazineWords[j]) {
            return false;
        } else {
            j++;
        }
    }
    return true;
}*/


//---méthode en utilisant un Map(): méthode "similaire" à .reduce() avec la création d'un object vide où on rajoute les valeurs (mots) de l'array magazine comme clé
//---et les occurences de chaque mot comme valeur. Sauf que ici on crée un Map, le principe reste le même, on parcourt grâce à forEach() chaque mot de l'array magazine
//---et on les .set() dans le Map avec sa fréquence comme valeur. Ensuite, on parcourt chaque valeur (mot) de l'array noteText avec .every() pour vérifier que toutes les valeurs
//---se trouvent bien dans le map, avec une fréquence supp à 0. Si pas on return false, si oui, on décrémente chaque fois qu'un mot apparait, ensuite quand tout est vérifié, return true
/*function ransomNote(noteText, magazineText) {
    if (typeof noteText !== "string" || typeof magazineText !== "string") {
        return "Error. Arguments must be string";
    }
    let arrayMagazineText = magazineText.toLowerCase().split(" ");
    let arrayNoteText = noteText.toLowerCase().split(" ");
    const magazineWords = new Map();
    arrayMagazineText.forEach(word => {
        magazineWords.set(word, (magazineWords.get(word) || 0) + 1)
    });
    return arrayNoteText.every(word => {
        if (!magazineWords.has(word) || magazineWords.get(word) === 0) {
            return false;
        }
        magazineWords.set(word, magazineWords.get(word) - 1);
        return true;
    });
}*/

//---    PAS FINI !!!
/*function ransomNote(noteText, magazineText) {
    if (typeof noteText !== "string" || typeof magazineText !== "string") {
        return "Error. Arguments must be string";
    }
    let arrayNoteText = noteText.toLowerCase().split(" ");
    let arrayMagazineText = magazineText.toLowerCase().split(" ");
    for (let word of arrayNoteText) {
        let wordIndex = arrayMagazineText.indexOf(word);
        if (wordIndex === -1) {
            return false;
        }
        arrayMagazineText.splice(wordIndex, 1);
    }
    return true;
}

let noteText = "this is secret a note to you from a secret admirer"
let magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"
console.log(ransomNote(noteText, magazineText));*/