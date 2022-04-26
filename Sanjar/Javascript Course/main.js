// for(let i=1; i<=100; i++){
//   if(i%3==0){
//     console.log("fizz");
//   }
//   else if(i%5==0 && i%3!==0){
//     console.log("Buzz");
//   }
//   else if(i%5==0 && i%3==0){
//     console.log("FizzBuzz");
//   }
//   console.log(i)
// }


// let k = 5;
// let string = "";
// for (let i = 1; i <= k; i++) {

//   for (let z = 0; z < k - i; z++) {
//     string += " ";
//   }

//   for (let x = 0; x < i; x++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//let friends = ['Donald', 'Olaf', 'Vladimir']; console.log('Hello ' + friends[0]); console.log('Hello ' + friends[1]); console.log('Hello ' + friends[3]);

// let friends = ["Joe", "Pascal", "Martin"]


// for (let i = 0; i < friends.length; i++)
// console.log("Hello " + friends[i])


// let array = [2, 43, 5, 63, 3];

// console.log(array.slice(-1))

// let array = [5, 3, 7, 8, 5];
    
    
//     let sum = array.reduce(function(a, b){
//         return a + b;
//     }, 0);
    
//     console.log(sum);

// let array = [25, 47, 5, 63, 4]

// let number = 0;
//     for (let i = 0; i < array.length; i++) {
//         number = array[i];
//     }
//   console.log(number);


// let arr = [56, 32, 555, 8, 74];
// let largest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log(largest);

// let str='';
// for (let index = 0; index < 5; index++)
// {
//     str =  " ".repeat(5-index) + "*".repeat(index+1);
//     console.log(str);
// }

// let me = {
//     name: "Tom",
//     age: 28,
//     hairColor: "brown",
//     eyeColor: "black"
// }

// console.log(me)

// let person = { name: 'John!', age: 25, isMarried: false }; console.log(person.numChildren); person.lastName = 'Smith'; person.isMarried();

// let mathStuff = {
//     PI: 3.14,
//     square: function(x) {
//       return x * x;
//     },
//     half: function (x) {
//       return x / 2;
//     }
//   };
  
//   console.log(mathStuff.square(4))


// let a1 = [ 'John', 'Frances' ];
// let a2 = [];
// let a3 = [][];
// let a4 = [[]];


// function introduce(name, age) {
//     console.log(`My name is ${name}, I am ${age} years old`)
// }
 
// let friends = [
//     {name: 'John Carmack', age: 23},
//     {name: 'Frances Northcutt', age: 25},
//     {name: 'John Nas', age: 66},
// ]
 
// for(let i=0; i<friends.length; i++){
//     introduce(friends[i].name, friends[i].age);
// }

// --------


// function isInRange(value, range){
//     if(value >= range.min && value <= range.max){return true;} else {return false};
// }
 
// console.log(isInRange(4, { min: 0, max: 5 }))
// console.log(isInRange(4, { min: 4, max: 5 }))
// console.log(isInRange(4, { min: 6, max: 10 }))
// console.log(isInRange(5, { min: 5, max: 5 }))

// -----



// let me = {
//     firstName: 'Murat',
//     lastName: 'Yaşar',
//     age: 40,
//     isMarried: true,
//     numOfKids: 2,
//     kids: [
//         {name: 'Ihsan', age: 13, hobbies: ["Drawing", "Computer Games", "Chatting"]},
//         {name: 'Orhan', age: 6, hobbies: ["Swimming", "Eating", "Running"]}
//     ],
//     workExp: {
//         intMarketing: 5,
//         webDeveloper: 0
//     }
// }
 
// console.log(me)
// console.log(me.kids[0].hobbies[1]); // prints "Computer Games"





// DOM

// let input = document.getElementById("name")
// console.log(input.placeholder) 



// function setBackground() {
//   let inputElement = document.getElementById("colorInput");
//   let color = inputElement.value;
//   let divElement = document.getElementById("myDiv");
//   divElement.style.backgroundColor = color;
// }



let msg1 = document.getElementById("message1")  
 let msg2 = document.getElementById("message2")  
 let msg3 = document.getElementById("message3")  
 let answer = Math.floor(Math.random()*100) + 1;  
 let no_of_guesses = 0;  
 let guesses_num = [];  
 function play(){  
   let user_guess = document.getElementById("guess").value;  
   if(user_guess < 1 || user_guess > 100 ){  
     alert("Please Enter a number Between 1 to 100");  
   }  
   else{  
     guesses_num.push(user_guess);  
     no_of_guesses+= 1;  
     if(user_guess < answer){  
  msg1.textContent = "Your Guess is Too low"  
  msg2.textContent = "No. Of Guesses : " +  
  no_of_guesses;  
  msg3.textContent = "Guessed Number Are: " +  
  guesses_num;  
     }  
     else if(user_guess > answer){  
       msg1.textContent = "Your Guess is Too High"  
       msg2.textContent = "No. Of Guesses : " +  
       no_of_guesses;  
       msg3.textContent = "Guessed Number Are: " +  
       guesses_num;  
     }  
     else if(user_guess == answer){  
       msg1.textContent = "Yahhhh You won It!!"  
       msg2.textContent = "the Number was " + answer  
       msg3.textContent = " You guessd it in " +  no_of_guesses  +"Guesses";   
     }  
   }  
 }