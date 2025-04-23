// JAVASCRIPT MAPS

// const fruits=new Map([
//     ["apples",500],
//     ["banana",300],
//     ["oranges",200]
// ]);
// console.log(new Map);

// const fruits=new Map();
// fruits.set("apples", 500);
// fruits.set("banana", 300);
// fruits.set("oranges", 200);
// console.log(fruits);

// JS MAP METHODS

// const fruits=new Map([
//     ["apples",500],
//     ["banana",300],
//     ["oranges",200]
// ]);
// console.log(fruits.size);

// const fruits=new Map([
//     ["apples",500],
//     ["banana",300],
//     ["oranges",200]
// ]);
// console.log(fruits.delete("apple"));
//  console.log(fruits.clear);

// Map.has-return type
// console.log(fruits.has("apples"));

// let text = "";
// fruits.forEach(function(value , key){
//     text += key + '=' +value;
// })
// console.log(text);


// Map.entries


// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);

// let text="";
// for(const x of fruits.keys()){
//     text+=x;
// }
// console.log(text);

// map.Values
// let text="";
// for(const x of fruits.values()){
//     text+=x;
// }
// console.log(text);

// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);


// create objects
// const apples={name:"Apples"};
// const bananas={name:"Bananas"};
// const oranges={name:"Oranges"};
// const fruits = new Map();
// fruits.set(apples,500);
// fruits.set(bananas,500);
// fruits.set(oranges,500);
// console.log(fruits.get("apples"));


// destructuring-Destructuring in JavaScript is a feature introduced in ES6 that simplifies the extraction of values from arrays and objects into distinct variables.
//  It provides a concise way to unpack values, making code cleaner and more readable. Destructuring can be applied to both arrays and objects.

// create an object
// const person={
//     firstname:"John",
//     lastname:"Doe",
//     age:50

// };
// destructuring
// let{firstname,lastname}=person;
// console.log(person);

// let{lastname,firstname}=person;
// console.log(person);

// order of properties does not matter


// Alies creation


// const person={
//         firstname:"John",
//         lastname:"Doe",
//         age:50
//      };
//     //  destructuring
//     let{lastname:name}=person;
//     console.log(person);
