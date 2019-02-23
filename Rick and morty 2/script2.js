
window.onload = function () {
    getCharacterInfo().then((resp) => {
        createItems(resp);
    });
}

var nextItem = 1;
var grid = document.getElementById('grid');
var div = document.getElementById('item');
var page = 1;

var createItems = function (allInfo) {
    for (let index = 0; index < allInfo.length - 1; index++) {
        let item = document.createElement('div');
        item.className = 'grid-item';
        item.id = 'item' + nextItem;
        let img = document.createElement('img');
        img.src = allInfo[index].image;
        let inf = document.createElement('div');
        let text = document.createElement('p');
        inf.className = 'inf'
        text.innerHTML = `Name: ${allInfo[index].name} <br /> Specie: ${allInfo[index].species}`;
        inf.appendChild(text);
        item.appendChild(inf);
        item.appendChild(img);
        item.addEventListener('click', function () { redirectDetail(allInfo[index].id); });
        grid.appendChild(item);
    }
}

var getCharacterInfo = function () {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((resp) => resp.json())
        .then((value) => {
            page++;
            return value.results;
        });
}

window.addEventListener('scroll', function () {
    scrollButtom();
    var scrollTop = document.documentElement.scrollTop ||
        document.body.scrollTop;
    var offsetHeight = document.body.offsetHeight;
    var clientHeight = document.documentElement.clientHeight;
    if (offsetHeight <= scrollTop + clientHeight) {
        getCharacterInfo().then((resp) => {
            createItems(resp);
        });
    }
})

var scrollButtom = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var redirectDetail = function (id) {
    location.href = `index3.html?id=${id}`;
}