//             CLASS

// class ClassName{
//   constructor(prop1,prop2){
//     this.prop1=prop1;
//     this.prop2=prop2;

//   }
// }

// let obj=new ClassName("arg1","arg2");
// console.log(obj.prop1);


// this keyword refers to the object it belongs 







// class Dog{

//   constructor(dogName , weight ,colour,breed){
//     this.dogName=dogName;
//     this.weight=weight;
//     this.colour=colour;
//     this.breed=breed;
//   }
// }

// let dog =new Dog("JavaScript",2.4,"brown","chihuahua");

// console.log(dog.dogName , "is a" ,);





// CLAss     it is a convention to start a class name with a capital letter

// class Person{
//   constructor(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;

//   }
// }
// let p=new Person("Maaike");

// console.log("hi",p.firstname,p.lastname);





//  default argument
// class Person{
//   constructor(firstname,lastname="doe"){
//     this.firstname=firstname;                    
//     this.lastname=lastname;

//   }
// }

// let p=new Person("Maaike");

// console.log("hi",p.firstname,p.lastname);

// default argument should always be trailing argument





//          Method
// function on a class are called methods
// we don't use function keyword.We start directly withh the name

// class Person{
//     constructor(firstname,lastname="doe"){
//       this.firstname=firstname;
//       this.lastname=lastname;
//     }
//     greet (){
//       console.log("Hi there !",this.firstname);
//     }
//   }
  
  
//   let p=new Person("Maaike", "van putten");
//   p.greet();


// class Person{
//     constructor(firstname,lastname="doe"){
//       this.firstname=firstname;
//       this.lastname=lastname;
  
//     }
  
//     greet (){
//       console.log("Hi there !",this.firstname);
//     }
  
//     compliment(name,object){
//       return "This is wonderful" +object+ ","+name;
//     }
//   }
  
  
//   let p=new Person("Maaike", "van putten");
//   p.greet();
//   let compliment =p.compliment("Harry","hat");
//   console.log(compliment);


// properties- hold the data of the class

// class Person{
//     constructor(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname; 
//     }
// }
// let p=new Person("Maria", "Saga");
// console.log(p.firstname);


//  Getters AND Setters


// class Person {
//     #firstname;
//     #lastname;
  
//     constructor(firstname,lastname){
//       this.#firstname=firstname;
//       this.#lastname=lastname;
//     }
  
//     get firstname(){
//       return this.#firstname;
//     }
  
//     set firstname(firstname){
//       this.#firstname=firstname;
  
//     }
  
//     get lastname(){
//       return this.#lastname;
//     }
  
//     set lastname(lastname){
//       this.#lastname=lastname;
//     }
    
//   }
  
//   let p=new Person("Maaike", "van putten");
//   console.log(p.firstname);


// inheritance-transfer properties and methods from parent class to child class     23 april 2025 

// class vehicle{
//     constructor(color,currentspeed,maxspeed){
//         this.color=color;
//         this.currentspeed=currentspeed;
//         this.maxspeed=maxspeed;
//     }
//     move(){
//         console.log("moving at",this.currentspeed);
//     }
//     accelerate(amount){
//         this.currentspeed+=amount;
//     }     
// }
// class Motorcycle extends vehicle{
//     constructor(color,currentspeed,maxspeed,fuel){
//         super(color,currentspeed,maxspeed);
//         this.fuel=fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }

// }
// let motor=new Motorcycle("blue",0,150,"petrol");
// console.log(motor.color);
// motor.accelerate(40);
// motor.move();


// PROTOTYPES

// class Person{
//         constructor(firstname,lastname){
//           this.firstname=firstname;
//           this.lastname=lastname;
//         }

// greet(){
//     console.log("Hi there")
// }
// }
// Person.prototype.introduce=function(){
//     console.log("Hi I'm ",this.firstname );

// };
// Person.prototype.favouriteColor="green";
// let p=new Person("Saurabh");
// console.log(p.favcolor);
// p.introduce();


