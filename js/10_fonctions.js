// Les FONCTIONS
function salutation() {
    console.log('Bonsoir');
}
salutation();

/**
 * Cette fonction fait un console.log qui dit bonjour
 * @param {string} prenom Prénom de la personne
 * @param {string} nom Nom de la personne
 */
function maFonction(nom = 'strong', prenom = 'Alex') {
    alert(`Bonjour ${nom} ${prenom} !`);
}

maFonction("Mariam", "Ouedraogo");
maFonction(`Anna`, `olivia`);
maFonction();

/**
 * Cette fonction permet de mutiplier
 * @param {number} x Nombre1
 * @param {number} y Nombre2
 * @returns number
 */
function mult(x, y) {
    /* RETURN met fin à l'exécution d'une fonction */
    return x * y;
}
let resultat1 = mult(5, 9);
let resultat2 = mult(20, 4);

resultat1 += 3;
alert(resultat1);
alert(resultat2);

/**
 * Cette fonction addition 2 nombre
 * @param {number} nb1 Nombre1
 * @param {number} nb2 Nombre2
 * @returns number
 */
function addi(nb1, nb2) /* est égal à écrire : let ou const oubien var : "let addi = function(nb1, nb2)" */ {
    let total = nb1 + nb2;
    return total;
}
let addition = addi(2, 4);
console.log(addition);



// Les fonctions flechées

// mult () => {}