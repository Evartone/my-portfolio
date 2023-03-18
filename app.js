let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');


menu.onclick = () =>{
    
    menu.classList.toggle('fa-times'); 
    header.classList.toggle('active');

}

function verificar() {

     alert("Cv indisponivel de momento!")
     alert("hey")

}