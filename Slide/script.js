let first = document.getElementById('first');
let sec = document.getElementById('sec');
let third = document.getElementById('third');

let slides = document.getElementsByClassName('slide');


function clickHandle(){
    
  for(let i=0;i<slides.length;i++){
    // slides[i].style.display = "none";
    slides[i].style.opacity = "0";
  }

  // document.querySelector(".one").style.display= "block";
  document.querySelector(".one").style.opacity= "1";
}

first.addEventListener('click',clickHandle)

clickHandle();



sec.addEventListener('click',function(){
    
  for(let i=0;i<slides.length;i++){
    // slides[i].style.display = "none";
      slides[i].style.opacity = "0";
  }

  // document.querySelector('.two').style.display= "block";
  document.querySelector('.two').style.opacity= "1";
})


third.addEventListener('click',function(){
    
  for(let i=0;i<slides.length;i++){
    // slides[i].style.display = "none";
    slides[i].style.opacity = "0";
  }

  // document.querySelector('.three').style.display= "block";
  document.querySelector('.three').style.opacity= "1";
})

