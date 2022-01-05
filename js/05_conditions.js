let a = 23,
    b = 40.4,
    c = "50",
    d = -70;

let vrai = a < b,
    faux = b <= a,
    equival = c == b,
    equivalType = b === d,
    difval = d != a,
    difType = b !== a;

alert(
    "Stock de vrai est : " +
    vrai +
    "\nStock de faux est : " +
    faux +
    "\nStock de équivalent est : " +
    equival +
    "\nStock de équivalent en type est : " +
    equivalType +
    "\nStock de different en valeur est : " +
    difval +
    "\nStock de different en type est : " +
    difType
);

let heure = prompt("Entrez une heure");

if (typeof heure == "number") {
    if (heure < 12) {
        alert(`Bonjour !`);
    } else if (heure == 12) {
        alert("Il est midi !");
    } else {
        alert("Bonsoir !");
    }
} else {
    alert("Heure non valide");
}