

// fetch("https://rickandmortyapi.com/api/character").then((value) => {
//     return value.json();
// }).then ((value) => {
//     console.log(value.results.length);
//     let imagen1 = document.getElementById("img1");
//     var random = Math.floor(Math.random() * (10))
//     imagen1.src = value.results[random].image;
//     let info1 = document.getElementById("inf1");
//     info1.innerHTML = "Name:" + " " + value.results[random].name + "<br />" + "Specie:" + " " + value.results[random].species;
// })
/*
 function show1(){
    if (document.getElementById("inf1").style.visibility=="hidden"){
         document.getElementById("inf1").style.visibility="visible";
    }
 }
*/
var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var getCharacterInfo = function () {
    let randomPage = getRandomInt(1, 25);
    return fetch(`https://rickandmortyapi.com/api/character/?page=${randomPage}`)
        .then((resp) => resp.json())
        .then((value) => {
            let randomCharacter = getRandomInt(0, value.results.length - 1);
            return value.results[randomCharacter];
        });
}

var setCharacterInfo = function (img, divInfo) {
    getCharacterInfo().then(character => {
        let imagen = document.getElementById(img);
        let info = document.getElementById(divInfo);
        imagen.src = character.image;
        info.style.display = "block";
        info.firstElementChild.innerHTML = `Name: ${character.name} <br /> Specie: ${character.species}`;
        
    });
}