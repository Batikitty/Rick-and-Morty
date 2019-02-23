window.onload = function () {
    getCharacterInfo (getParameter ()).then ((character)=> {
        let image = document.getElementById('image');
        image.src = character.image
        let info = document.getElementById('info');
        info.innerHTML = `Name: ${character.name} <br /> Specie: ${character.species}`;
    });
    
}

function getParameter (){
    let URL = document.location.href;
    if (URL.indexOf('?')>0) {
        let getAfter = URL.split ('?')[1];
        let get = getAfter.split('=')[1];
        return get;
    }
}

var getCharacterInfo = function (get) {
    return fetch(`https://rickandmortyapi.com/api/character/${get}`)
        .then((resp) => resp.json())
        .then((value) => {
            return value;
        });
}

