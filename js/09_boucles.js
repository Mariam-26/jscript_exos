// Les boucles
let i = "";

// Boucles WHILE
// while (x < 10) {
//     alert("La valeur de x est :" + x);
//     x++;
// }

let nom = "Mariam";

while (nom != 'Ouédraogo') {
    nom = prompt('Entrez le nom');
}


// Boucle DO WHILE

// do {
//     alert(`x est égale : ${x}`);
//     x--
// }
// while (x > 10);

// Boucle FOR

for (i = 0; i < 10; i++) {
    alert(`La valeur de i est : ${i}`);
}

for (let compteur = 0; compteur <= 10; compteur++) {
    console.log(compteur);
}

let users = ["Mariam", "Dominique", "Severine", "Ali"];
console.table(users);
// Ancienne méthode
for (let user = 0; user < users.length; user++) {
    console.log(users[user]);
}

// Nouvelle méthode

// For in
for (let user in users) {
    console.log(users[user]);
}

// For of
// for (let valeur of users) {
//     console.log(valeur);
// }

// For each

users.forEach((valeur) => {
    console.log(valeur);
});
users.forEach((valeur, index) => {
    console.log(valeur, index);
});
users.forEach((valeur, index, tableau) => {
    console.log(tableau);
});