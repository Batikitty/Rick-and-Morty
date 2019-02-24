var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var getCharacterInfo = function () {
    let randomPage = getRandomNumber(1, 25);
    return fetch(`https://rickandmortyapi.com/api/character/?page=${randomPage}`)
        .then((resp) => resp.json())
        .then((value) => {
            let randomCharacter = getRandomNumber(0, value.results.length - 1);
            return value.results[randomCharacter];
        });
}

var setCharacterInfo = function (img, div) {
    getCharacterInfo().then(character => {
        let imagen = document.getElementById(img);
        let info = document.getElementById(div);
        imagen.src = character.image;
        info.style.display= "block";
        info.firstElementChild.innerHTML = `Name: ${character.name} <br /> Specie: ${character.species}`;
    });
}