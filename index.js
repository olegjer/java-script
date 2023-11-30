// document.querySelector("h1").innerHTML = "Oleg"

// document.querySelector("button").onclick = function() {
//     document.querySelector("h1").innerHTML = "Ne Oleg"
// }

// JavaScript Output
// document.getElementById("demo").innerHTML = "<b> bold </b>"

// alert(5 + 6);
// let messege =  prompt("What's your messege?");

// console.log(messege);

// let sign = prompt("What's your sign?");
//console.log(sign, sign.toLowerCase());

//if (sign.toLowerCase() === "scorpio") {
//  alert("Wow! I'm a Scorpio too!");
//}

// let userName = "Oleg";
// console.log("Hello " + userName);

// document.getElementById("myH").innerHTML = "My First Page";
// document.getElementById("myP").innerHTML = "My first paragraph.";
// let a=5;
// console.log(a)

// const student = {
//   firstName: "ram",
//   lastName: null,
//   class: 10,
// };

// console.log(student);
// console.log(student.class);
// console.log(student.firstName);
// console.log(student.lastName);

// alert("Oleg");
// alert(22);
// alert(true);
// alert(undefined);
// alert(null);
// alert({});

// console.log(Number("Oleg"))
// console.log(Number("125"))
// console.log(Number(undefined))
// console.log(Number(null))
// console.log(Number(true))
// console.log(Number(false))

// const number = prompt("Enter a number: ");
// const number2 = prompt("Enter a number: ");
// const number3 = prompt("Enter a number: ");
// if (number > 0) {
//   console.log("The number is positive");
// }
// // check if number is 0
// else if (number == 0) {
//   console.log("The number is 0");
// }
// // if number is neither greater than 0, nor zero
// else {
//   console.log("The number is negative");
// }
// console.log("The if...else if...else statement is easy");

// ----------------------------------------------------------------

// Task 1
// console.log(-5 + 8 * 6);
// console.log((55 + 9) % 9);
// console.log(20 + (-3 * 5) / 8);
// console.log(5 + (15 / 3) * 2 - (8 % 3));
// //Task 2
//---------------------------------
// DIVIDING NUMBERS--------------------

// const number1 = Number(prompt("Enter a 1 number: "));
// const number2 = Number(prompt("Enter a 2 number: "));

// alert(number1 / number2);

//----------------------
//all numbers are different

// let num1 = 2,
//   num2 = 3,
//   num3 = 4;

//    if (num1 == num2 || num2 == num3 || num3 == num1) {
//     console.log("Neither all are equal or different");
//   } else {
//     console.log("All numbers are different");
//   }

// //All numbers are equal.
//   num1 = 2,
//   num2 = 2,
//   num3 = 2;
//   if (num1 == num2 && num2 == num3) {
//     console.log("All numbers are equal");

//   }
//   //all numbers not equal,not different.
//    num1 = 2,
//   num2 = 2,
//   num3 = 4;

// if (
//   (num1 == num2 && num1 != num3) ||
//   (num2 == num3 && num1 != num3) ||
//   (num3 == num1 && num1 != num2)
// ) {
//   console.log("Neither all are equal or different");
// }

//---------------
//Increasing order

// let num1 = 1524,
//   num2 = 2345,
//   num3 = 3321;
// if(num1<num2 && num2 <num3){
//   console.log("Increasing order");
// }
//Decresing order.
// num1=3321,
// num2=2345,
// num3=1524;
// if (num1>num2 && num2 >num3){
//   console.log("Decreasing order")
// }

//Neather decreasing or incresing.
// num1=1524,
// num2=1524,
// num2=1524;
// if (num1 > num2 && num2 > num3) {
//   // The numbers are in decreasing order
//   console.log("Decreasing order");
// } else if  (num1 < num2 && num2 < num3) {
//   // The numbers are in decreasing order
//   console.log("Decreasing order");
// }
// else {
//   // The numbers are neither increasing nor decreasing order
//   console.log("Neither increasing or decreasing order");
// }

//---------------------------------------------------------------
//LOOP JAVA
// for(let i=0; i<10; i++){
//     console.log("kak menja zebalo eto");
// }
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// +++++++++++++++++++
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;  // sum = sum + i
// }
// console.log('sum:', sum);
// ++++++++++++++++
// let a=0;
// while(a<10) {
//     console.log("a less then 10");a++;
// }
// +++++++++++++
// program to display numbers
// let i = 1;
// const n = 5;

// // do...while loop from 1 to 5
// do {
//     console.log(i);
//     i++;
// } while(i <= n);

//task 1.-----
// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//       console.log(i + " is even");
//   } else {
//       console.log(i + " is odd");
//   }
// }
//
// //Task 2-------
// let number = parseInt(prompt("Enter a number: "));
// for (i = 1; i <= 10; i++) {
//   console.log(number + "*" + i + "=" +(number * i));
// }

//---------------------------------------------------------------------

//ARREY.-----------------
//Task 1--------------

// let arr=[1,2,3,4,5,6,7,8,9,10];
// // sample array
// let sum = 0; // initial value is 0
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]; // add each element to the sum
// }
// console.log("Sum using For loop: " + sum);

// Task2-------------------------------------
// let sum = 0;
// const arr = [20, 30, 25, 35, -16, 60, -100];

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]; // add each element to the sum
// }

// const average = sum / arr.length;
// console.log(average);
//Task 3--------------------------------------

// let array = [25, 14, 56, 15, 36, 56, 77, 18, 29, 49]; // sample array
// // let max = Math.max(...array)
// // let min = Math.min(...array)
// // console.log(max,min);
// let min = array[0];
// let max = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (max < array[i]) {
//     max = array[i];
//   }
//   if (min > array[i]) {
//     min = array[i];
//   }
// }
// console.log(min, max);
//----------------------------------------------------------------------------
//FUNCTION--------------------------------------------------

// function SayHi(){
//     let message =" hello everyone";
//     alert(message);
// }
// SayHi();
// SayHi();
// SayHi();

// function showMessage(from, text) { // параметры: from, text
//     alert(from + ': ' + text);
//   }
//   showMessage();

// function greet() {
//     console.log("Hi there!");
// }

// // calling the function
// greet();

// function add(a, b) {
//   return a + b;
// }

// // take input from the user
// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// // calling function
// let result = add(number1, number2);

// // display the result
// console.log("The sum is " + result);


// TASK 1.1----------------------------------------------------------
// function showArray() {
//   let arr = "[1,24,52,63,86,41,22]";
//   alert(arr);
// }
// showArray();
// Task 1.2--------------------------------------------------------
// x = findMax(1, 123, 500, 115, 44, 88);

// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }
// Task 2-------------------------------------
// Write a JavaScript function to calculate the factorial of a number (a non-negative integer n ). The function accepts the number as an argument.
// Note:
// The factorial of a number is the product of all the integers from 1 to that number and it is represented by n!
// For example, the factorial of 6! is 1*2*3*4*5*6 = 720. 
// The factorial is not defined for negative numbers, and the factorial of zero is one, 0! = 1.

// function factorial(a){
//     let sum = 1;
//     for (let i = 1; i<=a; i++){
//         sum = sum *i
//         }
//         console.log(sum);
// }
// factorial(6);
 
// task 3-------------------------

// Write a JavaScript function that takes a number as a parameter and check the number is prime or not. 
// Note: 
// Prime numbers are the numbers that are only divisible by themselves and 1, in other words, if we try to divide them by another number, the result is not a whole number. 
// So, if we divide the number by anything other than 1 or itself, we will get a remainder that is not zero. 
// Negative numbers can not be prime.

// function isPrime(a) {
//     if (a < 0) return false;
//     if(a== 1) return true;

//     for ( let i= 2; i<= a- 1; i++) {
//         console.log(i);
//         if(a % i==0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(10));

// ---------------------------------------------------
// DOM----------------------------------------------------
// Task 1------------


// const paragraphEl = document.getElementById("text");
// console.log(paragraphEl);
// function js_style() {
//     paragraphEl.style.backgroundColor = "green";
//     paragraphEl.style.color ="white";
// }
