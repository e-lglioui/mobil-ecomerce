
var Nom = document.forms["personnelForme"]["Nom"];               
var email = document.forms["personnelForme"]["Email"];    
var phone = document.forms["personnelForme"]["Tel"];
var prenom = document.forms["personnelForme"]["Prenom"];
var type = document.forms["personnelForme"]["Type"];
var region = document.forms["AdresseForm"]["region"];
var adress = document.forms["AdresseForm"]["adress"];
var postal = document.forms["AdresseForm"]["postal"];
var pays = document.forms["AdresseForm"]["pays"];
let bar = document.getElementById('bar');
let liste=document.querySelector('.test');


let menu = document.getElementById('menu');


menu.addEventListener("click",function(){
    liste.style.display= 'block';
});


bar.addEventListener("click",function(){
    liste.style.display= 'none';
});

/* function valid(str){
    alert(str.value);
    var user = str.value; 
    var re = /^[a-z]{5,15}$/i;
    if (re.test(user)) { 
        str.style.border = "#945D0C solid 3px"; 
        return true; 
    } 

    else { 
        str.style.border = "red solid 3px"; 
        return false; 
    } 

}*/
/* prenom.addEventListener("input",valid(prenom));
Nom.addEventListener("input",valid(Nom));*/


phone.addEventListener("input",function(){
    var user = phone.value; 
    var re = /^[0-9]{9}$/; 
    if (re.test(user)) { 
       
        phone.style.border = " #945D0C solid 3px"; 
        return true; 
    } 
    else { 

        phone.style.border = "red solid 3px"; 
        return false; 
    }
});

postal.addEventListener("input",function(){
    var user = postal.value; 
    var re = /^[0-9]{9}$/; 
    if (re.test(user)) { 
       
        postal.style.border = " #945D0C solid 3px"; 
        return true; 
    } 
    else { 

        postal.style.border = "red solid 3px"; 
        return false; 
    }
});

 email.addEventListener("input", function(){
    var user = email.value; 
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(user)) { 
        email.style.border = "#945D0C solid 3px"; 
        return true; 
    } 
    else { 
        email.style.border = "red solid 3px"; 
        return false; 
    }
 });

  Nom.addEventListener("input",function(){
    var user = Nom.value; 
    var re = /^[a-z]{5,15}$/i;
    if (re.test(user)) { 
        Nom.style.border = "#945D0C solid 3px"; 
        return true; 
    } 
    else { 
        Nom.style.border = "red solid 3px"; 
        return false; 
    }
  }) ;

  prenom.addEventListener("input",function(){
    var user = Nom.value; 
    var re = /^[a - z]{5,15}$/i;
    if (re.test(user)) { 
        Nom.style.border = "#945D0C solid 3px"; 
        return true; 
    } 
    else { 
        Nom.style.border = "red solid 3px"; 
        return false; 
    }
  }) ;

  region.addEventListener("input",function(){
    var user = region.value; 
    var re = /^[a - z]{5,15}$/i;
    if (re.test(user)) { 
        regon.style.border = "#945D0C solid 3px"; 
        return true; 
    } 
    else { 
        region.style.border = "red solid 3px"; 
        return false; 
    }
  }) ;

  adress.addEventListener("input",function(){
    var user = adress.value; 
    var re = /^[a - z\d]{5,15}$/i;
    if (re.test(user)) { 
        adress.style.border = "#945D0C solid 3px"; 
        return true; 
    } 
    else { 
        adress.style.border = "red solid 3px"; 
        return false; 
    }
  }) ;
