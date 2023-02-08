/*var Name ="Osanda";
Name ="Lelum";
alert(Name);*/

//If we want to create variable without changing value
/*const Name ="Osanda";
Name ="Lelum";
alert(Name);*/

//variables creating using let keyword 

/*
if(true){
    var Name ="Osanda";
}

alert(Name);
*/
/*
if(true){
    let Name ="Osanda";
}

alert(Name);
*/
/*
if(true){
    let Name ="Osanda";
    alert(Name);
}
*/
/*
if(true){
    let Name ="Osanda";
    Name="Lelum"
    alert(Name);
}
*/

//Template Strings

/*
let fname ="osanda"
let lname ="Lelum"
let Age ="26"


let result = fname +' ' + lname +' '+ Age+'  years old';
alert(result);

*/
/*
let fname ="osanda"
let lname ="Lelum"
let Age = prompt("'Guess  Osanda's Age..");

//Old method
let result = fname +' ' + lname +' '+ Age+'  years old';
alert(result);

*/

//Using Template String
//  back ticks = ``  <--- in the keyboard under the esc butoon

/*
let fname ="osanda"
let lname ="Lelum"
let Age = prompt("'Guess  Osanda's Age..");
let result = ` ${fname} ${lname} is ${Age}  years old`
alert(result);
*/

//Default Parameters

/*

function welcome(user,message){
    alert(`Hello ${user}, ${message}`);
}

//welcome("Osanda", "Welcome to the Pace");
//welcome("Dasun" ,"Welcome to the Pace");
welcome();

*/

// Assign Default Values
/*
function welcome(user="Mystry Person",message="Have a good day"){
    alert(`Hello ${user}, ${message}`);
}

//welcome("Osanda", "Welcome to the Pace");
//welcome("Dasun" ,"Welcome to the Pace");
welcome();
*/

//Arrow Function
//Arrow function is anonymous function it doesn't have name
/*
function Greetings(message){
    return alert(`${message} everyone !!!!!`);
}
Greetings("Good Morning");
*/
// if one argument no need parenthesis
//in the Arrow function no return statement
/*
let greeting = message => alert(`${message} everone!!!`);
greeting("Good Morning");
*/

/*
let createEmail = (subject,body) =>{
    if(!subject){
        throw new Error("The Subject is required");
    }
    if(!body){
        throw new Error("Add content in to the body");
    }
    return alert(`${subject} -${body} `)
}

createEmail("My Exam","I want to complete CPWD");
*/

//function Without argument
/*
function Greetings(){
    return alert(`Hello everyone !!!!!`);
}
Greetings();
*/
//Arrow Function and this Keyword
/*
function sayHi(){

}
console.log(this);
*/
// creating object
/*
let SL ={
    //add property
 mountains : ["Sripada","Piduruthalagala","Nuckels"],
  //add method
  printWithdash:function(){
   settimeout(function(){
    console.log(this.mountains.join(" - "))
   },3000)
  }
}

alert(SL.mountains);

*/
//
/*
let SL ={
    //add property
 mountains : ["Sripada","Piduruthalagala","Nuckels"],
  //add method
  printWithdash:function(){
   settimeout(function(){
    console.log(this.mountains.join(" - "))
   },3000)
  }
}
//Uncaught ReferenceError: settimeout is not defined
SL.printWithdash();
*/

//It  is still point to the window
/*
let SL ={
    //add property
     mountains : ["Sripada","Piduruthalagala","Nuckels"],
    printWithdash:function(){
   // console.log('inside the printWithdash',this);
   setTimeout(function(){
     console.log('inside the settimeout function',this);
    // console.log(this.mountains.join(" - "))
   },3000)
  }
}
//Uncaught ReferenceError: settimeout is not defined
SL.printWithdash();

*/
//

/*

let SL ={
    //add property
     mountains : ["Sripada","Piduruthalagala","Nuckels"],
    printWithdash:function(){
     console.log('inside the printWithdash',this);
   setTimeout(function(){
     // console.log('inside the settimeout function',this);
    // console.log(this.mountains.join(" - "))
   },3000)
  }
}
//Uncaught ReferenceError: settimeout is not defined
SL.printWithdash();

*/
//Annonymous function
/*
let SL ={
    //add property
     mountains : ["Sripada","Piduruthalagala","Nuckels"],
    printWithdash:function(){
   setTimeout(function(){
     console.log(this.mountains.join(" - "))
   },3000)
  }
}
//Uncaught ReferenceError: settimeout is not defined
SL.printWithdash();
*/

// changing to arrow function

/*
let SL ={
    //add property
     mountains : ["Sripada","Piduruthalagala","Nuckels"],
     //add method
    printWithdash:function(){
     setTimeout(()=> console.log(this.mountains.join(" - ")),3000);
  }
}
//Uncaught ReferenceError: settimeout is not defined
SL.printWithdash();
*/

//Destructing objects , destructing obect or array structure in to the variables
/*

// Create object
let thingsToDO={
    morning:"Exercise",
    afternoon:"Lunch",
    evening:"Meditation",
    night:["coding","sleep"]
}
//object destructing
let { morning , afternoon} = thingsToDO;
 console.log(morning, ' -' ,afternoon)

 */


 //  also can change the value of the variable 
 /*
 let thingsToDO={
    morning:"Exercise",
    afternoon:"Lunch",
    evening:"Meditation",
    night:["coding","sleep"]
}
//object destructing
let { morning , afternoon} = thingsToDO;
morning = "riding";
 console.log(morning, ' -' ,afternoon)

 */

 /*
 let uniStudents = student =>{
    // using the dot notation 
    console.log(`${student.name} from ${student.university}`);
 }
// object as an argument 
 uniStudents({
    name : "osanda ",
    university:"UCSC"
 });
 */


// destructor using the 
/*
let uniStudents = student =>{
    let{name,university} =student;
    // using the dot notation 
    console.log(`${name} from ${university}`);
 }
// object as an argument 
 uniStudents({
    name : "osanda ",
    university:"UCSC"
 });
 */

 //destructor while taking argument
 /*
 let uniStudents = ({name,university}) =>{
   console.log(`${name} from ${university}`);
 }
// object as an argument 
 uniStudents({
    name : "osanda ",
    university:"UCSC"
 });
 */

 // destructin Array
/*
 //printing the first mountain
 let[firstMountain] =["Sripada","Piduruthalagala","Nuckels"];
 
 console.log(firstMountain);
 */
 //printing the second mountain

 /*
  let[,firstMountain] =["Sripada","Piduruthalagala","Nuckels"];
 
 console.log(firstMountain);\
 */


 //printing the third mountain

 /*
 let[ , ,firstMountain] =["Sripada","Piduruthalagala","Nuckels"];
 
 console.log(firstMountain);
 */

 //Restructuring
 /*
 var name ="Everest"
 var height = 8848;
// create object using variables
 var adventureClimbing ={name ,height};
 console.log(adventureClimbing)
 */

/*
 //restructure object property and method
 var name ="Everest"
 var height = 8848;
 var output = function(){
    console.log( `Mountain ${this.name} IS ${this.height} meter tall`);

 }
// create object using variables
 var adventureClimbing ={name ,height,output};

 adventureClimbing.output();
 */


 /*
// create object using variables and define in the function body
 var adventureClimbing ={
     name :"Everest",
     height : 8848,
     output : function(){
     console.log( `Mountain ${this.name} IS ${this.height} meter tall`);

 }

 };

 adventureClimbing.output();

 */

 // in the ES6 No need to use function keyword

 /*

 var adventureClimbing ={
    name :"Everest",
    height : 8848,
    output (){
    console.log( `Mountain ${this.name} IS ${this.height} meter tall`);

}

};

adventureClimbing.output();
*/
 //  ...  => combine two arrays in to one and combine two objects in to one

// spread and Rest operator
// doesnt modify or muted the original source
/*
var Mountain =["Sripada","Piduruthalagala","Nuckels"];
var MountainFromNepal = ['Everes','Fish Tail','Annapurna'];
var allMountains =[...Mountain , ...MountainFromNepal];
console.log(allMountains);  
*/

/*
var day ={
    brakfast: "bread with milk",
    lunch : "chicken friedrice"
}

var night ={
    dinner : "Noodles with soup"
}
//combine objects

var camping ={
    ...day,
    ...night
}

console.log(camping);

*/

//rest operator in ES6

/*
var rivers =["Mahaweli", "Kelani","Kalu","walawe"]
var[first,...rest]=rivers;

console.log(first);
console.log(rest);
*/

// classes constructor and Super

//classes

//we could create a function and add methods on the function object using the prototype
//in javascript functions are objects --inherit the behaviour of object

/*
function Holiday(destination,days){
    this.destination =destination;
    this.days = days;
}

Holiday.prototype.info = function(){
    console.log(this.destination +' | ' + this.days + 'days');
}

var sl = new Holiday('Sri Lanks', 30)
console.log(sl);
*/

/*
class Holiday{

}

console.log(Holiday);
*/

/*
class Holiday{


}

console.log(Holiday.prototype);
*/

/*
class Holiday{
    // this constructor method will set arguments as property in this Holiday class
 constructor(destination,days){
    this.destination = destination;
    this.days = days;
 }

 info(){
    console.log(`${this.destination} will take ${this.days} days`);
 }

}


const trip = new Holiday("Unawatuna , Sri Lanka" , 30)
console.log(trip.info());

console.log(Holiday.prototype);
*/
/*
class Holiday{

constructor(destination,days){
    this.destination = destination;
    this.days = days;
 }

 info(){
    console.log(`${this.destination} will take ${this.days} days`);
 }

}
const trip = new Holiday("Unawatuna , Sri Lanka" , 30)
console.log(trip.info());

*/


//Inheritance

//Super class
class Holiday{

    constructor(destination,days){
        this.destination = destination;
        this.days = days;
     }
    
     info(){
        console.log(`${this.destination} will take ${this.days} days`);
     }
    
    }

    // sub class
    class Expendition extends Holiday{
        constructor(destination,days,gear){
            //super keyword
            super(destination, days);
            this.gear =gear;
        }

        info(){
            super.info();
            //method overriding
            console.log(`Bring your ${this.gear.join(" and your ")}`)
        }

    }

    const tripWithGear = new Expendition("Everest" , 30 ,["sunglasses" , "Srilankan Flag", "Camera"]);
    tripWithGear.info();