const navBtn = document.getElementById('btn');
const clsBtn = document.getElementById('cls');
const menu = document.querySelector("ul.menu");
navBtn.addEventListener("click",function(){
    // menu.classList.toggle('show');
    menu.classList.add('show');
    navBtn.style.display="none";
    clsBtn.style.display="block";
})

clsBtn.addEventListener("click",function(){
    menu.classList.remove('show');
    navBtn.style.display="block";
    clsBtn.style.display="none";
})