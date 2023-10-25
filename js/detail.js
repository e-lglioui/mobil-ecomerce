let heart = document.querySelector('#heart');

heart.addEventListener('click', function() {
    heart.classList.toggle("toggle");
});

  let elements = document.querySelectorAll('.tailQantite__x');
  elements.forEach(function(element) {
    element.addEventListener("click", function() {
      
      element.style.color = '#fff';
      element.style.backgroundColor = 'black';
    });
  });
  const plusButton = document.getElementById("plus");
  const moinButton = document.getElementById("moin");
  const resultElement = document.getElementById("result");

  let resultValue = 1;

  plusButton.addEventListener("click", function() {
    resultValue++;
    resultElement.textContent = resultValue;
  });

  moinButton.addEventListener("click", function() {
    if (resultValue > 1) {
      resultValue--;
      resultElement.textContent = resultValue;
    }
  });

  let bar = document.getElementById('bar');
  let liste=document.querySelector('.test');


  let menu = document.getElementById('menu');
 
  
  menu.addEventListener("click",function(){
      liste.style.display= 'block';
  });


  bar.addEventListener("click",function(){
      liste.style.display= 'none';
  });

