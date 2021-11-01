// npm init (sets up package.json), npm i (reads package.json install node module &package you need), npm i prompt-sync(installing a specific package to package.json), node app.js (run the javascript file in the terminal)
// declare and initialize variables 
let name = "Alexis";
let age = 26;
let birthday = "July 7th";
let pineapplePizza = false;
let lifeEvents = [
    "I was born in Southfield, Michigan", 
    "I graduated from GVSU", 
    "I became a Grand Circus student 10/2021", 
    "I'm learning now that I'm unaccomplished and can't think of 4 things"];

// If/else for pineapplePizza
if (pineapplePizza === true) {
        console.log(`My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`);
} else { 
        console.log(`My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`);
    }
// Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the length of the lifeEvents array. Each iteration of the loop should log a new sentence from the lifeEvents array. You should only have one console.log method.
for (let i = 0; i<lifeEvents.length; i++){
    console.log(`${lifeEvents[i]}`);
}

let counter = 0; 

while (true) {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log(counter)
    if (randomNumber !==5) {
        counter++; 
        console.log(`${randomNumber} !== 5`);
    } else {
        counter++;
        console.log(`${randomNumber} === 5. It took ${counter} iterations to randomly generate the number 5.`)
        break;
    }
        
}



