// && = condition remplies
// let heure = prompt("Entrez votre heure");
// if (typeof heure == "number") {
//     if (heure >= 0 && heure < 12) {
//         alert("C'est le matin");
//     } else if (heure === 12) {
//         alert("Il est midi pile");
//     } else if (heure > 12 && heure <= 24) {
//         alert("C'est l'après midi ou le soir");
//     } else {
//         alert("Heure non valide");
//     }
// } else {
//     alert("Type d'heure non valide");
// }

// || = si l'une des conditions sont remplies

// let heure = prompt("Entrez une heure");

// if (heure < 0 || heure > 24) {
//     alert("L'heure est invalide");
// } else {
//     alert("L'heure est valide");
// }

// != permet de nier (false = true et true = false)

let heure = 20;

if (!(heure <= 19)) {
    alert("Il est plus de 19h");

} else {
    alert("Il est moins 19h");
}