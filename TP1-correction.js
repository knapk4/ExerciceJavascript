// Exercice 1

/**
 * Dit bonjour au prénom
 * @param {string} prenom
 */
function hello(prenom) {
  console.log("Bonjour " + prenom);
}

// Exercice 2

/**
 * Affiche le résultat de l'addition
 * @param {number} nombre1
 * @param {number} nombre2
 */
function addition(nombre1, nombre2) {
  console.log(nombre1 + nombre2);
}

// Exercice 3

/**
 * Affiche le montant du bénéfice ou déficit
 * @param {number} prixAchat
 * @param {number} prixVente
 */
function benefice(prixAchat, prixVente) {
  let benefice = prixVente - prixAchat;
  if (benefice > 0) {
    console.log("Gain de " + benefice + "€");
  } else {
    console.log("Perte de " + benefice * -1 + "€");
  }
}

// Exercice 4

/**
 * Affiche le plus grand nombre parmis les trois
 * @param {nombre} nombre1
 * @param {nombre} nombre2
 * @param {nombre} nombre3
 */
function afficherPlusGrandNombre(nombre1, nombre2, nombre3) {
  let max = nombre1;
  if (nombre2 > max) {
    max = nombre2;
  } else if (nombre3 > max) {
    max = nombre3;
  }
  console.log("Le plus grand nombre est " + max);
}

// Exercice 5

/**
 * Affiche le plus grand nombre
 * @param  {...number} nombres
 */
function afficherPlusGrandNombre(...nombres) {
  let max = nombres[0];
  for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > max) {
      max = nombres[i];
    }
  }
  console.log("Le plus grand nombre est " + max);
}

// Exercice 6

/**
 * Vérifie si la note est comprise entre 0 et 20
 * @param {number} note
 * @returns boolean
 */
function verifierNote(note) {
  if (note < 0 || note > 20) {
    return false;
  } else {
    return true;
  }
}

/**
 * Calcul la moyenne de l'élève
 * @param  {...number} notes
 */
function calculerMoyenne(...notes) {
  let somme = 0;
  for (let note of notes) {
    if (verifierNote(note)) {
      somme += note;
    } else {
      console.log("La note " + note + " n'est pas valide");
    }
  }
  return somme / notes.length;
}

/**
 * Affiche la mention correspondant à la moyenne
 * @param {number} moyenne
 * @returns
 */
function afficherMention(moyenne) {
  if (moyenne < 4) {
    return "Catastrophique";
  } else if (moyenne < 10) {
    return "Insuffisant";
  } else if (moyenne < 14) {
    return "Passable";
  } else if (moyenne < 18) {
    return "Bien";
  } else {
    return "Très Bien";
  }
}

/**
 * Permet d'afficher le bulletin de l'élève
 * @param {string} eleve
 * @param  {...number} notes
 */
function bulletin(eleve, ...notes) {
  let moyenne = calculerMoyenne(...notes);
  console.log(
    eleve +
      " a obtenu une moyenne de " +
      moyenne +
      " (" +
      afficherMention(moyenne) +
      ")"
  );
}

// Exercice 7

/**
 * Effectue le calcul
 * @param {nombre} nombre1 
 * @param {nombre} nombre2 
 * @param {string} operateur 
 */
function operation(nombre1, nombre2, operateur) {
  console.log(eval(nombre1 + operateur + nombre2));
}

// Exercice 8

/**
 * Dessine une pyramide
 * @param {number} nombre 
 */
function pyramideHorizontale(nombre) {
  let ligne = "";
  for (let i = 0; i < nombre; i++) {
    ligne += "#";
    console.log(ligne);
  }
  for (let i = nombre - 1; i > 0; i--) {
    ligne = ligne.substring(0, i);
    console.log(ligne);
  }
}

// Exercice 9

/**
 * Affiche le montat de billets/pièce de chaque sorte nécessaire
 * @param {number} nombre 
 */
function billetEtPieces(nombre) {
  let monnaies = [
    500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
  ];

  for (let monnaie of monnaies) {
    let nbrMonnaie = Math.floor(nombre / monnaie);
    if (nbrMonnaie !== 0) {
      if (monnaie >= 5) {
        console.log(`Billets de ${monnaie}€ : ` + nbrMonnaie);
      } else {
        console.log(`Pièces de ${monnaie}€ : ` + nbrMonnaie);
      }
    }
    nombre -= nbrMonnaie * monnaie;
  }
}

// Exercice 10

/**
 * Affiche le nombre le plus proche de 0
 * @param  {...number} nombres 
 */
function nombrePlusProchedeZero(...nombres) {
  let min = nombres[0];
  for (let nombre of nombres) {
    if (isNaN(nombre)) {
        throw new Error("Le nombre " + nombre + " n'est pas valide");
    }
    if (Math.abs(nombre) < Math.abs(min)) {
      min = nombre;
    }
  }
  console.log(min);
}

