
var prixPure=document.querySelector(".total")
let heart = document.querySelectorAll('.fa-heart');
let pobel = document.querySelectorAll('.fa-trash');
var prix=document.querySelectorAll('.produit__prix');
let produit=document.querySelectorAll(".articlChoisir__articl");

function total(){
   let somme=0;
  let price=0;
    for(let i=0 ; i<prix.length;i++){
        price=prix[i].innerHTML;
        price=parseInt(price)
       somme=somme+price;
    }
    prixPure.textContent=somme;
    return somme;
}

function Jaime(){
    for(let i=0 ; i<heart.length;i++){
        heart[i].addEventListener('click', function() {
        heart[i].classList.toggle("toggle");
        });
    }
}

function suprimer(){
let price=0;
for(let i=0 ; i<pobel.length;i++){
pobel[i].addEventListener('click', function() {
    produit[i].style.display="none";
    price=prix[i].innerHTML;
    price=parseInt(price);
    console.log(price)
    prixPure.textContent= total()-price;
})

}
}
Jaime();
suprimer();
total();
let test = prixPure.textContent
localStorage.removeItem("key");
localStorage.setItem("key", JSON.stringify(test));
let piece=produit.length;
localStorage.removeItem("piece");
localStorage.setItem("piece", JSON.stringify(piece));




let bar = document.getElementById('bar');
let liste=document.querySelector('.test');


let menu = document.getElementById('menu');


menu.addEventListener("click",function(){
    liste.style.display= 'block';
});


bar.addEventListener("click",function(){
    liste.style.display= 'none';
});

