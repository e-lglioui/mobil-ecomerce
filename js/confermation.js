let span = JSON.parse(localStorage.getItem("key"));
let piece= JSON.parse(localStorage.getItem("piece"));
 let prixPure = document.getElementById('pricspan');
 let prixTotal=document.getElementById('prix');
let nombre=document.getElementById('pieces');
let datAchat=document.getElementById('datAchat');
let datrecep=document.getElementById('datrecep');
const date = new Date();
nombre.textContent=piece;
 prixPure.textContent=span;
 prixTotal.textContent=parseInt( prixPure.textContent)+6;
//dat 
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}/${year}`;
let receptDate = `${day+3}/${month}/${year}`;
datAchat.textContent=currentDate;
datrecep.textContent=receptDate;




let bar = document.getElementById('bar');
let liste=document.querySelector('.test');


let menu = document.getElementById('menu');


menu.addEventListener("click",function(){
    liste.style.display= 'block';
});


bar.addEventListener("click",function(){
    liste.style.display= 'none';
});
