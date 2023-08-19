// traditional:

// function functionName(parameters){block of stuff to do}
function greeter(){
    console.log("standard message");
}

/**
 * 
 * @param {string} customMessage Required! Some message to display.
 */

function greeterWithMesage(customMesage){
    console.log("customMessage is: " + customMesage);
}

/**
 * 
 * @param {string} customMesage Optional. Some message to display in the console.log output.
 */

function greeterWithDefault(customMesage = "default message"){
    console.log("customMessage is: " + customMesage);
}

greeterWithDefault();

greeterWithDefault("some custom message");

// ES6 style:
/**
 * 
 * @param {string} customMesage Optional. Some message.
 */

let greeterWithDefaultES6 = (customMesage = "default value again") => {
    console.log("customMessage is: " + customMesage);
    return customMessage;
}

// Function not executed, just copied around:
// let storedCustomMessage = greeterWithDefaultES6;

// Function executed, returned value copied around:

let storedCustomMessage = greeterWithDefaultES6();

console.log("The returned value from the ES6 function is: " + storedCustomMessage);

// let someComplexVariable = (someValue * someOtherValue - someResultFromSomeFunction())

// IIFEs:
//immediately invoked function expressions

// let someNewFunction = () => {

// }

// let someUserJwt = "blah blah pretend it's a JWT"
// ((someUserJwt) => 
// {
// 	// async checkJwtWithAPI(someUserJwt)
// 	console.log(someUserJwt);
// }
// )();

// let checkUserJwt = (someUserJwt) => {
// 	console.log(someUserJwt);
// }
// checkUserJwt();

// (() => {
// 	console.log("custom message from IIFE: " + customMessage);
// })();

// callbacks 

let someFunctionWithCallback = (someMessage, someCallback) => {

	someCallback(someMessage);

}

someFunctionWithCallback("hello world", console.log);


// let someForm = (inputBox, callback) => {
// 	callback(inputBox);
// }

// someForm(emailBox, validateEmail);

// blocks and scope:

{

let counter = 0;

for (let index = 0; index <= 10; index++) 
{
    let counter = 5;
    counter++;
}

console.log(counter);

}

// let someForm = (inputBox, callback) => {
// 	callback(inputBox);
// }

// someForm(emailBox, validateEmail);



// blocks and scope 


//{

// counter = 0; equivalent to below:
// var counter = 0;

// for (let index = 0; index <= 10; index++) 
// {
// 	var counter = 5;
// 	counter++;
// }

// console.log(counter);

// }



// closures 

// function GameData(){

// 	let highScore = 0;

// 	function setHighScore(newNumber){
// 		highScore = newNumber;
// 	}

// 	setHighScore(99);
// 	return highScore;
// }

// console.log(GameData());


let eevee = {
	name: "Eevee",
	type:"normal",
	attack: function () {
		console.log("Eevee did an attack!");
	},
	ability: () => {
		console.log("Some ability was triggered!!! Woohoo!");
	},
	hobbies: {
		cycling: {
			skillLevel: "high"
		}
	}
}

// eevee.attack;
// eevee.attack();
// eevee.ability();

let eeveeAbility = eevee.ability;
let eeveeCyclingSkillLevel = eevee.hobbies.cycling.skillLevel;
let {ability, attack, name, type, hobbies: { cycling: {skillLevel}}} = eevee;

console.log("Eevee's cycling skill level is: " + skillLevel);
console.log("Eevee cycling skill with dot notation: " + eeveeCyclingSkillLevel);

// No unintended variables declared!
// console.log("Unintented variables: " + hobbies);


eeveeAbility();
ability();