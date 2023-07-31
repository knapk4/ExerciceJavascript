console.log("Bonjour à tous");

let monObjet = {
    "nom": "semifir",
    'age': 5,
};
console.log(monObjet.nom);

// let couleur = "vert";

// if (couleur === "rouge"){
//     console.log("Arrêtez vous!");
// } else if (couleur === "vert") {
//     console.log("Avancez!");
// } else if (couleur === "orange") {
//     console.log("Préparez vous à avancer");
// } else {
//     console.log("mauvaise couleur");
// }

// for (let nombre = 0; nombre < 101; nombre++) {
//     if (nombre%3 && nombre%5 === 0) {
//         console.log("FizzBuzz");
//     } else if (nombre%3 === 0) {
//         console.log("Buzz");
//     } else if (nombre%3 === 0) {
//         console.log("Fizz");
//     }
//   }

// Exercice COQ


/**
* Exercice 1 : Dire Bonjour à une personne
* @param {*} prenom 
*/

function direBonjour(prenom){
    console.log("Bonjour " + prenom);
}

direBonjour("Michel");

/**
* Exercice 2 : Afficher la somme de deux nombre
* @param {*} nombreUn 
* @param {*} nombreDeux 
*/
function sommeDeuxNombres(nombreUn, nombreDeux) {
    console.log(nombreUn+nombreDeux);
}

sommeDeuxNombres(2, 6);


/**
* Exercice 3 : Affiche si bénéfice ou perte
* @param {number} coutFabrication 
* @param {number} prixVente 
*/
function beneficeOuPerte(coutFabrication, prixVente) {
    if (prixVente - coutFabrication > 0) {
        console.log("Gain de " + (prixVente - coutFabrication));
    } else if (prixVente - coutFabrication < 0) {
        console.log("Perte de " + Math.abs(prixVente - coutFabrication));
    }
}

beneficeOuPerte(10,15);


/**
* Exercice 4 : Afficher le nombre le plus grand d'une liste de 3 chiffres
* @param {number} nombreUn 
* @param {number} nombreDeux 
* @param {number} nombreTrois 
*/
function nombrePlusGrand (nombreUn, nombreDeux, nombreTrois){
    console.log(Math.max(nombreUn, nombreDeux, nombreTrois));
}

nombrePlusGrand("le plus grand nombre est " + 42, 66, 12);


/**
* Exercice 5 : Afficher le nombre le plus grand d'un ensemble de chiffre
* @param  {...number} nombres 
*/
function trouverPlusGrand (...nombres) {
    let plusGrand = nombres[0];
    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] > plusGrand) {
            plusGrand = nombres[i];
        }
    }
    console.log(plusGrand);
}

trouverPlusGrand(42, 66, 12, 46, 99, 2);


/**
* Exercice 6 : Fonction qui donne la moyenne d'un éléve et sa mention
* @param {string} prenom 
* @param  {...number} notes 
*/
function afficherLaMoyenne (prenom, ...notes) {
    let somme = 0;
    for (let i=0 ; i < notes.length ; i++) {
        let note = notes[i]
        somme += note;
    }
    let moyenne = somme / notes.length;
    
    if (moyenne <= 4) {
        console.log("la moyenne de " + moyenne.toFixed(2) + " de " + prenom + " est catastrophique");
    } 
    else if (moyenne > 4 && moyenne <= 10) {
        console.log("la moyenne de " + moyenne.toFixed(2) + " de " + prenom + " est insuffisante");
    } 
    else if (moyenne > 10 && moyenne <= 14) {
        console.log("la moyenne de " + moyenne.toFixed(2) + " de " + prenom + " est passable");
    }
    else if (moyenne > 14 && moyenne <= 18) {
        console.log("la moyenne de " + moyenne.toFixed(2) + " de " + prenom + " est bien");
    }
    else if (moyenne > 18 && moyenne <= 20) {
        console.log("la moyenne de " + moyenne.toFixed(2) + " de " + prenom + " est très bien");
    }
}

afficherLaMoyenne("Rémy", 12, 14, 6, 9, 17, 18, 4);


/**
* Exercice 7 : Fonction qui fera le calcul de deux nombres suivant l'opérateur indiqué en paramètre
* @param {number} nombreUn 
* @param {number} nombreDeux 
* @param {operator} operateur 
*/
function resultatOperation (nombreUn, nombreDeux, operateur) {
    if (operateur == "+"){
        console.log(nombreUn+nombreDeux);
    } 
    else if (operateur == "-") {
        console.log(nombreUn-nombreDeux);
    } 
    else if (operateur == "*") {
        console.log (nombreUn*nombreDeux)
    } 
    else if (operateur == "/") {
        console.log (nombreUn%nombreDeux);
    } 
    else {
        console.log ("ce n'est pas un bon opérateur")
    }
}

resultatOperation (12, 14, "/");


/**
* Exercice 8 : Afficher une pyramide d'étoile
* @param {number} nombre 
*/
function afficherPyramide(nombre) {
    //partie haute pyramide d'étoile
    for (let i = 1; i <= nombre; i++) {
        let ligne = '';
        for (let j = 1; j <= i; j++) {
            ligne += '*';
        }
        console.log(ligne);
    }
    //partie basse pyramide d'étoile
    for (let i = nombre - 1; i >= 1; i--) {
        let ligne = '';
        for (let j = 1; j <= i; j++) {
            ligne += '*';
        }
        console.log(ligne);
    }
}

afficherPyramide(10);



/**
* Exercice 9 : Fonction qui retournera le nombre de billets et de pièces divisant un chiffre
* @param {number} nombreDecimal 
*/
function nombreBilletEtPiece (nombreDecimal) {
    if (typeof nombreDecimal !== "number") {
        console.log("Ce n'est pas un nombre correct.");
        return;
    }
    
    let billets = {
        'Billet de 500': 0,
        'Billet de 200': 0,
        'Billet de 100': 0,
        'Billet de 50': 0,
        'Billet de 20': 0,
        'Billet de 10': 0,
        'Billet de 5': 0
    };
    
    let pieces = {
        'Pièce de 2': 0,
        'Pièce de 1': 0,
        'Pièce de 0.50': 0,
        'Pièce de 0.20': 0,
        'Pièce de 0.10': 0,
        'Pièce de 0.05': 0,
        'Pièce de 0.02': 0,
        'Pièce de 0.01': 0
    };
    
    for (var billet in billets) {
        if (nombreDecimal >= parseInt(billet.split(' ')[3])) {
            billets[billet] = Math.floor(nombreDecimal / parseInt(billet.split(' ')[3]));
            nombreDecimal %= parseInt(billet.split(' ')[3]);
        }
    }
    
    for (var piece in pieces) {
        var value = parseFloat(piece.split(' ')[3]);
        if (isNaN(value)) {
            value = parseFloat(piece.split(' ')[2]);
        }
        if (nombreDecimal >= value) {
            pieces[piece] = Math.floor(nombreDecimal / value);
            nombreDecimal %= value;
        }
    }
    
    for (var billet in billets) {
        if (billets[billet] > 0) {
            console.log(billet + ' : ' + billets[billet]);
        }
    }
    
    for (var piece in pieces) {
        if (pieces[piece] > 0) {
            console.log(piece + ' : ' + pieces[piece]);
        }
    }
}

nombreBilletEtPiece (2437.57);



/**
* Affichier la temperature la plus basse d'un tableau
* @param  {...number} temperatures 
*/

function temperatureProcheZero (...temperatures) {
    let minTemperature = Infinity;
    for (let i = 0; i < temperatures.length; i++) {
        if (typeof temperatures [i] !== "number") {
            console.log("Ce n'est pas un nombre valide");
            return;
        }
        
        if (temperatures[i] < minTemperature) {
            minTemperature = temperatures[i];
        }
    }
    console.log("la température la plus basse est : " + minTemperature)
}

temperatureProcheZero(42, 33, 9, 11, 44, 98);