let bar = document.getElementById('bar');
let liste=document.querySelector('.test');
let panier =document.querySelectorAll(".panier");
 var qeury=window.matchMedia("(max-width: 600px)")

let menu = document.getElementById('menu');


menu.addEventListener("click",function(){
    liste.style.display= 'block';
});


bar.addEventListener("click",function(){
    liste.style.display= 'none';
});


let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("card");
  
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.margin = "auto";
  }



