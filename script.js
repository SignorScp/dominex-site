const server = "play.dominex.it";

/* DESCRIZIONI CASUALI PLAYER */

const playerDescriptions = [
"Abitante dell’universo Dominex",
"Esploratore dell'universo Dominex",
"Membro della community Dominex",
"Costruisce nuove città nell'universo Dominex",
"Viaggiatore dell'universo Dominex",
"Parte dell’universo Dominex"
];

/* PLAYER COUNTER + PLAYER LIST */

fetch("https://api.mcsrvstat.us/2/" + server)
.then(response => response.json())
.then(data => {

const counter = document.getElementById("playercount");
const list = document.getElementById("playerlist");

/* Se server offline */

if(!data.online){

if(counter) counter.innerText = "Offline";
if(list) list.innerHTML = "Server Offline";

return;
}

/* Protezione dati */

let online = 0;
let max = 0;

if(data.players){
online = data.players.online || 0;
max = data.players.max || 0;
}

/* COUNTER (senza bug) */

if(counter){
counter.innerText = online + " / " + max;
}

/* LISTA PLAYER */

if(list){

list.innerHTML = "";

if(data.players && data.players.list && data.players.list.length > 0){

data.players.list.forEach(player => {

let div = document.createElement("div");
div.className = "player";

/* Descrizione casuale */

let randomDesc = playerDescriptions[
Math.floor(Math.random() * playerDescriptions.length)
];

div.innerHTML =
'<img src="https://mc-heads.net/body/' + player + '/80">' +
'<div class="player-name">' + player + '</div>' +
'<div class="player-desc">' + randomDesc + '</div>';

list.appendChild(div);

});

}else{

list.innerHTML = "Nessun player online";

}

}

})
.catch(error => {

console.error("Errore caricamento player:", error);

const counter = document.getElementById("playercount");

if(counter){
counter.innerText = "Errore";
}

});


/* COPIA IP */

function copyIP(){

navigator.clipboard.writeText("play.dominex.it")
.then(() => {
alert("IP copiato!");
})
.catch(() => {
alert("Errore durante la copia.");
});

}


/* FAQ ANIMATE */

document.addEventListener("DOMContentLoaded", () => {

document.querySelectorAll(".faq-question").forEach(button => {

button.addEventListener("click", () => {

const item = button.parentElement;
const answer = button.nextElementSibling;

item.classList.toggle("active");

if(answer.style.maxHeight){
answer.style.maxHeight = null;
}else{
answer.style.maxHeight = answer.scrollHeight + "px";
}

});

});

});


/* MENU DROPDOWN */

document.addEventListener("DOMContentLoaded", () => {

const dropdown = document.querySelector(".dropdown");
const button = document.querySelector(".dropbtn");

if(button && dropdown){

button.addEventListener("click", function (e) {
e.stopPropagation();
dropdown.classList.toggle("active");
});

document.addEventListener("click", function (e) {
if (!e.target.closest(".dropdown")) {
dropdown.classList.remove("active");
}
});

}

});
