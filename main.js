let params = (new URL(document.location)).searchParams;
let firstname = params.get('first-name'); 
let lastname = params.get('last-name'); 

let age = parseInt(params.get('age')); // is the number 18


let nametag = document.getElementById("nametag");
nametag.textContent = firstname;

console.log(nametag);
console.log(firstname);