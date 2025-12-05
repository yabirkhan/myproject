// let one = document.getElementById('one');
// let two = document.getElementById('two');
// let three = document.getElementById('three');

// let slide = document.getElementsByClassName('slide');

// function clickHandle(){
    
//   for(let i=0;i<slide.length;i++){
//     // slides[i].style.display = "none";
//     slide[i].style.opacity = "0";
//   }
   
//   document.querySelector(".one").style.opacity= "1";
// }

// one.addEventListener('click',clickHandle)

// clickHandle();



// // **************************************************************

// two.addEventListener('click',clickHandle)
// {

// for(let i=0;i<slide.length;i++){
//     // slides[i].style.display = "none";
//     slide[i].style.opacity = "1";
//   }
   
//   document.querySelector(".two").style.opacity= "1";
// }




// three.addEventListener('click',clickHandle)
// {

// for(let i=0;i<slide.length;i++){
//     // slides[i].style.display = "none";
//     slide[i].style.opacity = "2";
//   }
   
//   document.querySelector(".three").style.opacity= "1";
// }




// *****************************************************************




let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

let slide = document.getElementsByClassName('slide');


function clickHandle(){
    
  for(let i=0;i<slide.length;i++){
    // slides[i].style.display = "none";
    slide[i].style.opacity = "0";
  }

  // document.querySelector(".one").style.display= "block";
  document.querySelector(".one").style.opacity= "1";
}

one.addEventListener('click',clickHandle)

clickHandle();



two.addEventListener('click',function(){
    
  for(let i=0;i<slide.length;i++){
    // slides[i].style.display = "none";
      slide[i].style.opacity = "0";
  }

  // document.querySelector('.two').style.display= "block";
  document.querySelector('.two').style.opacity= "1";
})


three.addEventListener('click',function(){
    
  for(let i=0;i<slide.length;i++){
    // slides[i].style.display = "none";
    slide[i].style.opacity = "0";
  }

  // document.querySelector('.three').style.display= "block";
  document.querySelector('.three').style.opacity= "1";
})

