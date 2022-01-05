// Les ternaires
let heure = prompt("Entrez votre heure"),
    bon = "";

bon = (heure <= 18) ? 'Bonjour' :
    'Bonsoir';
alert(bon);

// Ternaire en condition 

if (heure <= 18) {
    bon = 'bonjour';
} else {
    bon = 'Bonsoir';
}
alert(bon);