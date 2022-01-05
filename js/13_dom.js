// console.log(window);

console.log("La largeur de mon écran est : " + window.innerWidth + "px.");

console.log("Le chemin de mon document est : " + document.documentURI);

console.log(document.getElementById("title"));

let title = document.getElementById("title");

title.innerText;

console.log(title.innerText);

console.log(title.innerHTML);

// Modifier le contenu TEXT

title.innerText = "les poèmes du monde";

title.innerText = "Les poèmes du <em>monde</em>";

title.innerHTML = "Les poèmes du <em>monde</em>";

// selectionner un élément pr son ID
document.getElementById("title").style.color = "red";

document.getElementById("title").style.fontSize = "3rem";

document.getElementById("title").style.textAlign = "center";

document.getElementById("title").style.textTransform = "uppercase";

title.style.border = ('1px solid black');

// selectionner un élément pr sa CLASSE

let deuxieme = document.getElementsByClassName("deuxieme");

console.log(deuxieme);

console.log(deuxieme[1]);

// selectionner un élément pr la balise

let baliseH1 = document.querySelector("h1");
console.log(baliseH1);
baliseH1.addEventListener('click', () => {
    baliseH1.style.color = 'green';
})

let paragraphe = document.getElementsByTagName("p");
console.log(paragraphe);

// let baliseLi = document.querySelector("li:last-child").style.color = 'blue';
// console.log(baliseLi);

// selectionner un élément pr le selecteur CSS
console.log(document.querySelector(".poeme"));

let classPoeme = document.querySelectorAll(".poeme"); /* Après un querySelectorAll "on boucle" */
for (poeme of classPoeme) {
    poeme.style.color = 'yellow';
}
// Recuperer ls atributs HTML

let a = document.querySelector("a");

// recuper le HREF
console.log(a.getAttribute("href"));

// Pr changer le HREF on met 'setAtribute'

console.log(document.querySelectorAll("a"));

// Changer le style

document.querySelector(".poeme").style.color = "green";

document.querySelector('address').style.backgroundColor = 'green';


console.log(window);

let section = document.querySelector('#section');

console.log(section);

//  document.querySelectorAll('#section p');
let p = document.querySelector('#section p');

p.style.backgroundColor = "red";


document.querySelector('#section address').style.fontSize = '2rem';

// let baliseAddress = document.body.querySelector('address:nth-child(1)').style.backgroundColor = "blue";

// console.log(baliseAddress);

// Les évènements

// On écoute le clic sur les balises H2

let baliseH2 = document.querySelectorAll("h2");
console.log(baliseH2);
for (let baliseH2 of balisesH2) {
    baliseH2.addEventListener('click', () => {
        baliseH2.style.color = 'green';
    })

}
for (let baliseH2 of balisesH2) {
    baliseH2.addEventListener('click', function() {
        this.style.color = 'green';
    })

}

let baliseAddress = document.querySelector