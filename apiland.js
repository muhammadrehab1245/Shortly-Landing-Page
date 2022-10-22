let hambtn=document.querySelector('.hamburger')
let weblinks=document.getElementsByClassName('weblinks')[0]
let navbar=document.getElementsByClassName('navbar')[0]
let btns=document.getElementsByClassName('btns')[0]
//let x = window.matchMedia("(max-width: 1250px)")
//let navopen=false;


/*
if (x.matches) {
    console.log(1)
hambtn.addEventListener('click',()=>{
navbar.classList.toggle('resnav')
    if (navopen===false) {
        navbar.style.height='245px'
        weblinks.style.opacity='1'
        btns.style.opacity='1' 
        navopen=true;
    }
    else{
        navbar.style.height='40px'
        weblinks.style.opacity='0'
        btns.style.opacity='0'
        navopen=false;
    }
})
}

else{
    console.log(2)
    navbar.style.height= '60px';
    weblinks.style.opacity='1'
        btns.style.opacity='1'
    
}*/


hambtn.addEventListener('click',()=>{
    navbar.classList.toggle('resnav');
    weblinks.classList.toggle('resweb');
    btns.classList.toggle('resweb');
})