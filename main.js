function startGame() {
    populateElements();
}
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
plates = [ "panda1", "deer1", "fox1",
           "panda2", "deer2", "fox2" ]

function populateElements() {
    document.getElementById("plates-container").innerHTML = "";
    for ( let plate in plates ) {
        const plateId = getRandomElement(plates);
        const image = plateId.substring(0, plateId.length -1)+".png";
        document.getElementById("plates-container").innerHTML +=
        `<div class="plate" id="${plateId}" onclick="showImage('${plateId}','${image}')"><img id="${plateId}-image" src="${image}"></div>`
        plates = plates.filter( plate => plate != plateId )
    }
    document.getElementById("plates-container").innerHTML += `<p id="tries">Tries: 0</p>`
}
var pair = [];
var tries = 0;
var score = 0;
function showImage( plateId ) {
    document.getElementById(plateId+"-image").style.visibility = "visible";
    document.getElementById(plateId).style.pointerEvents = "none";
    pair.push(plateId);
    if ( pair.length == 2 ) {
        checkPair();
    }
    if ( score == 3) {
        setTimeout(function() {
            window.alert("Congratulations!\nYou finished the game in "+tries+" tries!");
        }, 500);
    }
}
function checkPair() {
    if ( pair[0].substring(0, pair[0].length-1) != pair[1].substring(0, pair[1].length-1) ) {
        var el1 = pair[0];
        var el2 = pair[1];
        setTimeout(function() {
            document.getElementById(el1+"-image").style.visibility = "hidden";
            document.getElementById(el1).style.pointerEvents = "auto";
            document.getElementById(el2+"-image").style.visibility = "hidden";
            document.getElementById(el2).style.pointerEvents = "auto";
        }, 500);
    } else {
        score += 1;
    }
    tries += 1;
    document.getElementById("tries").innerHTML = "Tries: "+tries;
    pair = [];
};
