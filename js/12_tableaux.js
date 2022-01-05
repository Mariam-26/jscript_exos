// Manipuler les tableaux

let tableau = [26, 'Mariam', true, 28.5];

// Pour inverser le tableau
tableau.reverse();

// Pour ajouter un/des valeurs ds un tableau

// Au début
tableau.unshift("Coucou", 'Ouedraogo');

// A la fin

tableau.push("Au revoir", 14);

// Retirer une valeur du tableau

// La première

let valeur = tableau.shift();

// La dernière 

let resultat = tableau.pop();

// Modifier des valeurs ds le tableau

tableau.splice(1, 0, 'Insérer');



console.table(tableau);
console.log(valeur);
console.log(resultat);