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


// =================================================

// do while loop  --> exit controlled


// hello 10 times

// n = 11
// do{
//     console.log("hello",n);
//     n++;
// }
// while(n<=10);

// ===========================================

// a=1
// do{
//     console.log(a*2);
//     a++;
// }
// while(a<=10);


// ========================================================


// for loop -> entry controlled


// for(let i=1;i<=10;i++){
//     console.log(i);
// }


// for(let i=10;i>=1;i--){
//     console.log(i);
// }

// ===============================

// let num = prompt("Enter the number to print  the table -")

// for(let i=1;i<=10;i++){
//     console.log(i*num);
// }



// ============================ PRIME NUMBER =========================

// let num = prompt("Enter the number to print  the table -")
// test = true

// for(let i=2;i<num;i++){
//     if(num%i===0){
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




// ===============================


// let num = prompt("Enter the number");

// let test = true;

// let i=2;

// do{
//     if(num%2==0){
//         test = false
//         break;
//     }
//     i++;
// }
// while(i<num);

// if(test){
//     console.log("prime number");
// }
// else{
//     console.log("not a prime  number");
// }



// ======================================================================



// nested loop

// i=3
// while(i<=7){
//     j=1;
//     while(j<=10){
//         document.writeln(`${i*j}, `);
//         j++;
//     }
//     document.writeln("<br>")
//     i++;
// }



// i=3
// do{
//     j=1;
//     do{
//         document.writeln(`${i*j}, `);
//         j++;
//     }
//     while(j<=10);
//     document.writeln("<br>")
//     i++;
// }
// while(i<=7);



// for(let i=3;i<=7;i++){
//     for(let j=1;j<=10;j++){
//         document.writeln(`${i*j}, `);
//     }
//     document.writeln("<br>")
// }


// user =  "raj"
// age = 33
// document.writeln(`the user name is ${user} and his age is ${age}` )


// ============================================================



// for(let n=1;n<=400;n++){
//     test = true

//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             test = false
//             break;
//         }
//     }

//     if(test){
//         document.writeln(`${n}, `);
//     }
   
// }

// ====================================================/

// *****
// *****
// *****
// *****
// *****


// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         document.writeln("*");
//     }
//     document.writeln("<br>")
// }



// *
// **
// ***
// ****
// *****


// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         document.writeln("*");
//     }
//     document.writeln("<br>")
// }


// *****
// ****
// ***
// **
// *


// for(let i=1;i<=5;i++){
//     for(let j=5;j>=i;j--){
//         document.writeln("*");
//     }
//     document.writeln("<br>")
// }


// 1
// 12
// 123
// 1234
// 13345

// 1
// 22
// 333
// 4444
// 55555

// 54321
// 5432
// 543
// 54
// 5

// 

// for(let i=1; i<5; i++){
//     for(let j=i; j<=5; j++){
//         document.writeln("1");
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


// ==============================================

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// let t = 1;
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         document.writeln(`${t} `);
//         t++;
//     }
//     document.writeln("<br>")
// }



// ============================================================================

// to store multiple values in single variable :- ARRAY


// array is another data type which ca store multiple values in single variable
// every value in array will have its own specific unique posisition value -: index
// index  = position of value - 1

// let data = [45,65,7.6,45,49,74.5,43]

// data[2] = 100;

// console.log(data[2]);

// add element at last
// data.push(1000)

// removes element at last
// data.pop()

// add element at start
// data.unshift("1000")

// removes element from start
// data.shift()
// console.log(data);

// find the element and get its index if found
// let ind = data.indexOf(7.906)
// console.log(ind);

// find length of array
// console.log(data.length);


// =====================================


// Object

// it is another way of storing data in key value format

// let data = {
//     username:"yabir",
//     course:"python dev"
// }

// console.log(data.username);

// console.log(data['course']);

// if key is present then the value will get update
// if key is not present then the pair will be addeed

// data.age = 22;
// data['username'] = "YABIR"

// console.log(data);

// ========================================================

// json :- JAVA SCRIPT OBJECT NOTATION

// [
//     {

//     }
// ]


// ================================================


// let data = {
//     username:"yabir",
//     course:"python dev",
// }

// console.log(data.cap);


// instance object creation

// const person = new Object();

// person.name = "aman"
// person.age = 34

// console.log(person);


// ==============================================================

// functions :- it is a block of code which helps to increase the code reusability


// function defination

// function call


// user defined functions

// function which takes nothing and return nothing
// function with no arg and no return value

// function greet(){
//     console.log("good morning");
// }

// greet();

// greet();

// greet();



// function which takes somehting and return nothing

// function greet(user){
//     console.log(`good morning ${user}`); 
// }

// greet("aman")
// greet("raj")



// function which takes nothing and return something

// function can only return single type of value -> number, float , array, object, String, boolean
// function returns back with value to the same place from where it was called


// function validate(){
//     let user = "abc_01";
//     let pass = "abc123";

//     if( user === "abc_01" && pass=== "abc123"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


// let res  = validate();

// console.log("res = ",res);


// =======================================================================

// function takes something and returns somehting


// function google_autheticate(user,pass){
//     if( user === "abc_01" && pass=== "abc123"){
//         return [true,user];
//     }
//     else{
//         return [false,null];
//     }
// }


// let res  = google_autheticate("abc_01","abc123");

// if(res[0]){
//     console.log(`Welcome ${res[1]}` );
    
// }
// else{
//     console.log("login failed");
// }


// ===============================================================================

// default value


// function greet(user="sir/mam"){
//     console.log(`good morning ${user}`); 
// }

// greet("aman")
// greet()


// =====================================================================

// let data = {
//     username:"yabir",
//     course:"python dev",
//     upper:function(){
//         this.username=this.username.toUpperCase();
//     }
// }

// data.upper()
// console.log(data.username);


// =========================================================================

// settimeout and setInterval

// function greet(user="sir/mam"){
//     console.log(`good morning ${user}`); 
// }

// setTimeout(function(){
// //  console.log("hello");
//     greet("aman")
    
// }, 2000);


// setInterval(function(){
//     greet();
// }, 2000);


//     =========================== Dom =============================


// dom -> document object model

// document -> your html

// getElementById();

// getElementsByClassName();

// getElementsByTagName();

// querySelector();

// querySelectorAll();


// ========

// let ele = document.getElementById('head');

// ele.style.backgroundColor = "black";
// ele.style.color ="white";
    // ele.style.fontSize = "45px";
    // ele.style.fontFamily = "roman";

//  ele.innerHTML = "this has changes";

// ele.style.backgroundColor = "red";

// ele.style.color = "white";
// console.log(ele);



 let main = document.getElementsByClassName('main');

// main[0].style.backgroundColor = "red";

// console.log(main);


// let p = document.getElementsByTagName('p');




// for(let i=0;i<p.length;i++){
//     p[i].style.backgroundColor = "red";

// }



//  const qry = document.querySelector('div p');

// qry.style.backgroundColor = "green";

// console.log(qry);


// const ele = document.createElement('h1');

// ele.innerHTML = "created para tag";

// document.body.appendChild(ele)

// console.log(ele);


// =================================================================


// function showAlert(){
//     alert("showing on click")
// }



// function showChange(){
    
//     let ele = document.getElementById('head');
//     let val =  document.getElementById("userInput");

//     console.log(val);
    

//     ele.innerHTML = val.value;
// }



// let date = new Date();
// console.log(date);


// ==================== add event listener

// let btn = document.getElementById('btn');

// btn.addEventListener("mouseover",function(){
//     let heading =  document.querySelector("h1");
    
//     setTimeout(() => {
//        heading.innerHTML = "changed the text" 
//     }, 2000);
    
// })


// =====================================

// document.getElementById("chk").addEventListener("click",function(event){
//     event.preventDefault();
// })


// ============================


// let ele  = document.getElementById('btn');

// ele.addEventListener("click",function(){
//     let main = document.querySelector('.main');
//     main.classList.toggle('theme')


//     console.log(main);
    
// })


// ==================================


// localStorage.setItem("data",JSON.stringify([1,2,3,4,5,6,7]))

// let data = localStorage.getItem("data")

// console.log(JSON.parse(data));


// =======================================

// let userData = [
//     {
//         üsername:"yavir",
//         course:"mern",
//         duration:"6 month"
//     },
//     {
//         üsername:"toufik",
//         course:"mern",
//         duration:"6 month"
//     },
//     {
//         üsername:"sohail",
//         course:"mern",
//         duration:"6 month"
//     }
// ]


let res = localStorage.setItem("users",JSON.stringify(users))



let users = localStorage.getItem("users");
console.log(JSON.parse(userData1));






