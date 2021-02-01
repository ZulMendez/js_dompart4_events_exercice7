let body = document.body;
console.log(body);

// 1
let boite = document.querySelector('#content')
console.log(boite);

let para = boite.querySelector('#content, p');
console.log(para);

let titre = boite.querySelector('#content, h1');
console.log(titre);

let titre2 = boite.querySelector('#content, h2');
console.log(titre2);

body.addEventListener('click', (e) => {
    let cible = e.target
    if(cible == boite){
        cible.style = 'border: solid red 5px'
    } else if(cible == para){
        cible.style = 'color: red; font-weight: bold;'
    } else if(cible == titre){
        cible.style = 'text-decoration: underline; background-color: yellow;'
    } else if(cible == titre2){
        let longueur = cible.innerText.length;
        cible.innerText = cible.innerText.slice(0, (longueur - 1));
    }
})

// 2
let text = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";
let secondP = document.querySelectorAll('p')[1];
let sectIon = document.querySelector('section');
console.log(sectIon);

sectIon.style = 'height: 50px; width: 100%'

sectIon.addEventListener('mouseenter', () => {
    sectIon.innerText = text;
});
sectIon.addEventListener('mouseout', () => {
    sectIon.innerText = " ";
});