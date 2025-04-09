// let varcontainingFunction = function () {
//     let varInFunction = "I'm in a function";
//     console.log("hi there!", varInFunction);
// }
// varcontainingFunction();
// function parameter(args1, args2) {
//     return args1 + " " + args2;
// }
// const args1 = "hello";
// const args2 = "javascript";
// console.log(parameter(args1, args2));

// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }
// const x = 10;
// const y = 20;
// addTwoNumbers(x, y);

// function addTwoNumbers(){
//     let ip=prompt("enter the number")
//     let ou=prompt("enter the number")
//     return parseInt(ip)+parseInt(ou)
// }
// console.log(addTwoNumbers());
// function addTwoNumbers(x = 3, y = 7) {
//     console.log(x + y);
// }
// addTwoNumbers(5, 6, 8, 3);

// hello = () => {
//     return "Hello World!";
//   } 
//   console.log(hello());

// let addTwoNumbers = (x, y) => console.log(x+y);
// addTwoNumbers(5, 2);

// const arr = ["apple", "banana", "cherry"];
// const arr2 = ["elephant", ...arr, "monkey"]
// console.log(arr2);

// SPREAD OPERATOR - TOPIC

// let spread=["so","much","fun"];
// let meassage=["Javascript","is",...spread,"and","very","powerful"];

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);

// REST PARAMETER-  TOPIC 

// function someFunction(param1,param2 ){
//     console.log(param1, param2);
// }
// someFunction("hi","there","how are you");

// RETURNING FUNCTION

// let result= addTwoNumbers(4,5);
// console.log(result);
// let addTwoNumber = (x,y)=> { 
//     return(x+y);
// }
// let resultArr =[];
// for(let i=0; i<10; i++){
//     let result = addTwoNumber(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);

                                                            // VARIABLE SCOPE
// function testAvailability(x){
//     console.log("Available here:",x);
// }
// testAvailability ("hi");
// console.log("not available here:",X);

// function testAvailability(){
//     let y="I'll return";
//     console.log("Available here:", y);
//     return y;
// }
// let z=testAvailability();
// console.log("Outside the function:", z);
// console.log("Not Available here:", y);

                                                            //LET VERSUES VAR VARIABLES

// function doingStuff(){
//     if (true){
//         var x="local";
//     }
//     console.log(x);
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         let x="local";
//     }
// }
// doingStuff();

                       // CONSTANT
 // function doingStuff(){
 //     if(true){
 //         console.log(x);
 //         const x="local";
 //     }
 // }
 // doingStuff();

                                                  //GLOBAL VARIABLE

 //   let globalVar="Accesible Everywhere!";
 //   console.log("Outside function;",globalVar);
 //   function creatingNewScope(x){
 //     console.log("Acess to global vars inside function.",globalVar);
 //   }
 //   creatingNewScope("Some parameter");
 // console.log()

// let x="global";
// function doingStuff(){
//     let x="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

// let x="global";
// function doingStuff(x){
//     console.log(x);
// }
// doingStuff("param");

// function confuseReader(){
//     x="Guess my scope...";
//     console.log("Inside the function:",x);
// }
// confuseReader();
// console.log("Outside of function:",x);

                                                     //MISCELLANEOUS FUNCTION
// immediately invoke function                                     
// (function(){
//     console.log("IIFE!");
// })();

// (()=>{
//     console.log("run right way");
// })();

                                                      // RECURSIVE FUNCTION

// function gettRecursive(nr){
//     console.log(nr);
//     if (nr>0){     //base condition
//         gettRecursive(--nr);
//     }
// }
// gettRecursive(3);


// function logRecursive(nr){
//     console.log("Started function:", nr);
//     if (nr>0){
//         logRecursive(nr - 1);
//     }else{
//         console.log("done with recursion");
//     }
//     console.log("Ended Function:", nr);
// }
// logRecursive(3);