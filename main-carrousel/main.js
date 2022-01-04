let nbr = 4;
let p = 0;

container = document.getElementById('container');
g = document.getElementById('g');
d = document.getElementById('d');

container.style.width = (600 * nbr) + 'px';
for (i = 1; i <= nbr; i++) {
    div = document.createElement('div');
    div.className = 'photo';
    div.style.backgroundImage = `url('img/card${i}.jpg')`;
    div.style.backgroundPosition = 'bottom';
    container.appendChild(div);
}

g.onclick = function() {
    if (p > -nbr + 1)
        p--;
    container.style.transform = "translate(" + p * 600 + "px)";
    container.style.transiton = "all 0.5s ease";
}

d.onclick = function() {
    if (p < 0) p++;
    container.style.transform = "translate(" + p * 600 + "px)";
    container.style.transiton = "all 0.5s ease";
}


// section 2
let nbr1 = 4;
let p1 = 0;

container1 = document.getElementById('container1');
g1 = document.getElementById('g1');
d1 = document.getElementById('d1');

container1.style.width = (600 * nbr1) + 'px';
for (i = 1; i <= nbr1; i++) {
    div1 = document.createElement('div1');
    div1.className = 'photo';
    div1.style.backgroundImage = `url('img/card${i}.jpg')`;
    div1.style.backgroundPosition = 'bottom';
    container1.appendChild(div1);
}

g1.onclick = function() {
    if (p1 > -nbr1 + 1)
        p1--;
    container1.style.transform = "translate(" + p1 * 600 + "px)";
    container1.style.transiton = "all 0.5s ease";
}

d1.onclick = function() {
    if (p1 < 0) p1++;
    container1.style.transform = "translate(" + p1 * 600 + "px)";
    container1.style.transiton = "all 0.5s ease";
}


// section 3
let nbr2 = 4;
let p2 = 0;

container2 = document.getElementById('container2');
g2 = document.getElementById('g2');
d2 = document.getElementById('d2');

container2.style.width = (600 * nbr2) + 'px';
for (i = 1; i <= nbr2; i++) {
    div2 = document.createElement('div2');
    div2.className = 'photo';
    div2.style.backgroundImage = `url('img/card${i}.jpg')`;
    div2.style.backgroundPosition = 'bottom';
    container2.appendChild(div2);
}

g2.onclick = function() {
    if (p2 > -nbr2 + 1)
        p2--;
    container2.style.transform = "translate(" + p2 * 600 + "px)";
    container2.style.transiton = "all 0.5s ease";
}

d2.onclick = function() {
    if (p2 < 0) p2++;
    container2.style.transform = "translate(" + p2 * 600 + "px)";
    container2.style.transiton = "all 0.5s ease";
}