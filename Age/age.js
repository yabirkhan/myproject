// varibles :- these are containers which store values
// [a-z][A-z][0-9]   ex-> a=10 user="aman"

// datatype:- to specify the type of value stored in variable
// number :- all integer values except decimal
// string :- paragraph or character
// float  :- all decimal values


// to declare varibles we use ( var , let , const )

// var a = 10;

// console.log(a)

// console.log("hello world")


// let user = "yavi5674635y6jhn577hb*^&%^$r"

// console.log(user);


// ==================================================

// const a = "5.76";

// console.log(a);


// console.log(typeof(a));


// ===================================================

// console.log("hey there")

// alert("hello world")

// var num = prompt("enter something")

// console.log(num);


// let result =  confirm("this is to confirm")


// console.log(result);


// ==============================================================

// operators

// ================     arithmatic -> + - / * %

// gives remainder
// console.log(15%4);

// ====================  relational operator

// answers in boolean (true and false)

// ==  -> equal
// === -> equal with type check
// !=  -> not equal
// !==
// <    -> less than
// >    -> greater
// <=   -> less than or equal
// <==   
// >=   -> greater equal
// >==


// =================== assignment operator

// let a=10
// a+=5  // a=a+5
// console.log(a);



// +=
// -=
// /=
// *=
// %=


// ===================================

// TYPE CASTING``

// let num1 = prompt("Ënter the value ")

// num1 = parseInt(num1)

// let num2 = prompt("Ënter the value ")

// num2 = parseInt(num2)
// console.log(num1+num2);



// let num1 = parseInt(prompt("Ënter the value "))
// let num2 = parseInt(prompt("Ënter the value "))
// console.log(num1+num2);

// console.log(typeof(num1),typeof(num2));



// let num1 = parseFloat(prompt("Ënter the value "))
// let num2 = parseFloat(prompt("Ënter the value "))
// console.log(num1+num2);

// ===================================================


// condional statements

// if statement
// if(condtion){

// }


// to start the new set of conditions


// let num1 = 5
// let num2 = 5

// if(num1 ===  num2){
//     console.log("equal");  
// }


// ============== when you have only 2 dependent conditions
// if else statement



// let num1 = 587
// let num2 = 5

// if(num1 ===  num2){
//     console.log("equal");  
// }

// else{
//     console.log("not equal ");
    
// }


// =============== when there are more than 2 dependent conditions

// if else + if  else

// num1 = parseInt(prompt("Ënter the value "))
// num2 = parseInt(prompt("Ënter the value "))

// if(num1 > num2){
//     console.log("num1 is greater");
// }
// else if(num2 > num1){
//     document.writeln("num2 is greater");
// }
// else{
//     console.log("both are same");
    
// }


// ============== program to check whether the number is even or odd


// num = parseInt(prompt("enter the value to check -"))

// if(num%2==0){
//     document.writeln('even');
// }
// else{
//     document.writeln('odd');
// }


// ==========================================================

// nested if -> if inside an if

// let usermail = prompt("enter your mail id -")

// if(usermail === "abc@gmail.com"){

//     let password = prompt("enter the password -")

//     if(password === "Abc@123"){
//         console.log("login success");
//     }

//     else{
//         console.log("password did not match");
        
//     }
// }

// else{
//     console.log("user not found");   
// }


// ================================================


// logical operators

// and operator (&&)

// cond1    &&    cond2           result
// true                true            true
// false               true            false
// true                false           false



// or operator ( || )

// cond1    &&         cond2           result
// false               false            false
// false               true             true
// true                false           true


// not operator ( ! )
// true  false
// false true


// age = parseInt(prompt("enter your age - "))

// if(age > 18 && age < 60){
//     console.log("eligible");
// }
// else{
//     console.log("not eligible");
    
// }



// ====================


// gen = prompt("Ënter your gender -")

// gen = gen.toLowerCase();

// // console.log(gen);

// if(gen === "male" || gen === "female"){
//     console.log("valid");
    
// }
// else{

//     console.log("invalid");
// }


// -====================================================


// greter between three values

// a>b and a>c
// b>a and b>c
// c>a and c>b


// num1 = parseInt(prompt("Ënter the value "))
// num2 = parseInt(prompt("Ënter the value "))
// num3 = parseInt(prompt("Ënter the value "))

// if(num1 > num2  && num1 > num3){
//     console.log("num1 is greater");
// }

// else if(num2 > num1  && num2 > num3){
//     console.log("num2 is greater");
// }

// else if(num3 > num2  && num3 > num1){
//     console.log("num 3 is greater");
// }

// else{
//     console.log("either two or all values are equal");
// }



// a)add b)sub c)div  d)mul enter choice -:  Task



// =============================================================================



// switch case statement -> jump stateement


// opt = prompt("a)morning b)evening\nEnter choice - ")

// switch(opt){
//     case 'a':
//         console.log("morning");
//     break;

//     case 'b':
//         console.log("evening");
//     break;

//     default:
//         console.log("wrong choice");
// }

// ============================================================================

// ternary operator - single line if else

// condition ? true statement : false statement

// num =51;

// console.log(num%2==0?"even":"odd");


// ===== compare two values using ternary

// num1=  425
// num2 = 425

// console.log((num1>num2)?"num 1 is greater":(num2>num1)?"num2 is gretaer":"both are equal");


// =================================


// loops :- continous statements

// ek kaam he 
// baar baar krna he
// continous krna he

// ===> loop
// start value
// stop value
// step value

// entry controlled

//     while loop 
//     for loop

// exit controlled 
//     do while loop

// =====================  WHILE LOOP =====


// hello 10 times

// let a=5;

// while(a<17){
//     console.log("hello",a);
//     a++;
// }


// 1----------------10

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// =========================

// 10---------------------1

// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }


// ========= series of even number

// let i=10;
// while(i<=100){
//     if(i%2==0){
//          console.log(i); 
//     }
//     i++;
// }


// =========================================

// let i=1;
// while(i<=10){
//     console.log(i**2);
//     i++;
// }


// ==================================

// SUM OF THE SERIES

// 1+2+3+4+5 =?

// total = 0;
// let i=1;
// while(i<=5){
//     total = total + i;
//     i++;
// }

// console.log(total);


// 0   + 1   = 1
// 1 + 2 = 3
// 3 + 3  = 


// ============================


// 4 -> 4*3*2*1 = ?




// ******************************* While loop ************************************************//


// ******************************** Prime number*********************************/

// let num = prompt("Enter the number")

// test = true

// while(num%2==0){
//     if(num%2==0){
//         test = false
//         break;
//     }
// }

// if(test){
//     console.log("prime number");
// }
// else{
//     console.log("not a prime  number");
// }










/********************************* Age ******************************** */


// let age =parseInt(prompt("enter a value"))
// if(age>=18){
//     console.log("age is valid");

//     else{
//         console.log("age is not valid");
//     }
    
// }


/************************************* Calculator **************************** */


// let num1 = parseInt(prompt("enter a first value"))
// let num2 = parseInt(prompt("enter a  second value"))
// let ans = num1/num2;

// console.log(ans);


/*********************************** Sum Of Series ************************************************** */




// num = parseInt(prompt("enter the value"))

// fact = 1;
// let i=1;
// while(i<=num){
//     fact = fact* i
//     i++;
// }

// console.log("factorial of " + num + " is " + fact);

// document.writeln(total);

// num = parseInt(prompt("enter the value"))

// fact = 1;
// let i=1;
// while(i<=num){
//     fact = fact* i;
//     i++;
// }

// console.log("factorial of " + num + " is " + fact);

// ********************************* Pattern ******************************************

// for(let i=0; i<5; i++){
//     for(let j=1; j<=5; j++){
//         document.writeln("i");
//     }
//     document.writeln("<br>")
// }



// for(let i=1;i<=5;i++){
//     for(let j=5;j>=i;j--){
//         document.writeln(i);
//     }
//     document.writeln("<br>")

    
// }

// for(let i=1;i<=5;i++){
//     for(let j=1; j<=5;j--){
//         document.writeln(i);
//     }
//     document.writeln("<br>")

    
// }



// for(let i=1; i<=5; i++){
//     for(let j=1; j<=5; j++){
//         document.writeln(i);
//     }
//     document.writeln("<br>")
// }



// for(let i=1;i<=5;i++){
//     for(let j=5; j>=i;j--){
//         document.writeln(i);
//     }
//     document.writeln("<br>")

    
// }



// for(let i=1;i<=5;i++){
//     // for(let j=5;j>=i;j--){
//     //     document.writeln("i");
//     // }
//     // document.writeln("<br>")

//     \
// }

// ********************************************************************//

// let ele = document.getElementById("btn");

// ele.addEventListener("click",function(){
//     let main = document.querySelector('.main');
//     main.classList.toggle('theme')


//     console.log(main);
    
// })
//   **************************************  SlideBar  ************************************************




// ****************************************** Local Storage **************************************************

localStorage.setItem("data",JSON.stringify([1,2,3,4,5,6,7]))

// let data = localStorage.getItem("data")

// let data = localStorage.removeItem("data")

let data = localStorage.removeItem("userdata")

console.log(JSON.parse(data));
