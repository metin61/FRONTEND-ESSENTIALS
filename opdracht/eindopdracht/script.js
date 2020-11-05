let voornaam = prompt("Wat is je voornaam?");
let achternaam = prompt("Wat is je achternaam?");
let  email = prompt("Wat is je email?");
let  leeftijd = prompt("Wat is je leeftijd?");
let  woonplaats = prompt("Wat is je woonplaats?");

document.querySelector("#voornaam").innerHTML = voornaam;
document.querySelector("#achternaam").innerHTML = achternaam;
document.querySelector("#email").innerHTML = email;
document.querySelector("#leeftijd").innerHTML = leeftijd;
document.querySelector("#woonplaats").innerHTML = woonplaats;

    
document.querySelector("#kopjenaam").innerHTML = "Welkom" + " " + voornaam + " " + achternaam;

if(leeftijd == "16") {
    document.querySelector(".midden").style.backgroundColor = 'orange';
}
if(leeftijd == "17") {
    document.querySelector(".midden").style.backgroundColor = 'blue';
}
if(leeftijd == "18") {
    document.querySelector(".midden").style.backgroundColor = 'gold';
}
if(leeftijd == "19") {
    document.querySelector(".midden").style.backgroundColor = 'green';
}
if(leeftijd == "") {
    document.querySelector(".midden").style.backgroundColor = 'red';
}
console.log();