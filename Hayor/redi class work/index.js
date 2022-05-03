
		let gameDifi = '';
        let guess = document.getElementById('input');
        let miniGuess = 1;
        let maxiGuess = 1000;

    
        let count  = 0
        let randomNumber = Math.round(Math.random() * 10+1)
        
function set() {
    const gameDifi = document.getElementById("gameDifi")
   
    if(gameDifi.value === "easy"){
        maxiGuess = 100
        randomNumber = Math.round(Math.random() * 10+1)
        let list = document.getElementById("list")
        list.textContent = ""
       console.log( randomNumber)
    }
    if(gameDifi.value === "mid"){
        maxiGuess = 100
        randomNumber = Math.round(Math.random() * 50+1)
       let list = document.getElementById("list")
         list.textContent = ""
        console.log( randomNumber)
    }
    if(gameDifi.value === "hard"){
        maxiGuess = 1000
        randomNumber = Math.round(Math.random() * 100+1)
        let list = document.getElementById("list")
        list.textContent = ""
        console.log( randomNumber)
    }
    return randomNumber
}



    
    
    let totalCount = 0
    function newGame() {
      randomNumber = Math.round(Math.random() * 100 - 1)
        let list = document.getElementById("list")
        list.textContent = ""
        count = 0
        document.getElementById("btn").disabled = false;
        document.getElementById("result").innerText  = ""
        document.getElementById("count").innerText = ""
        document.getElementById("inputValue").value = ""
        document.getElementById("help").textContent ="help"


    }
    function guessGame() {
        const userGuess = document.getElementById("inputValue").value
        if(userGuess != "") {

            let list = document.getElementById("list")
            let list_item = document.createElement("li")
            list.appendChild(list_item)
            list_item.textContent = userGuess
        }
    if (userGuess == randomNumber && userGuess != "") {
    totalCount++;
      document.getElementById("result").innerText = "congratulation you have guessed the correct value after " + totalCount + " times"
      document.getElementById("btn").disabled = true;
    }

    if (userGuess > randomNumber && userGuess != "") {
        totalCount++;
        document.getElementById("result").innerText = "your guess is higher than the correct number"
    }

    else if (userGuess < randomNumber  && userGuess != "") {
        totalCount++;
        document.getElementById("result").innerText = "your guess is lower than the correct number" 
    }

    count += 1
    document.getElementById("count").innerText = count

    if(count === 20) {
        document.getElementById("count").innerText = "Sorry you have excided the total number of counts"   
    }

    
    

    if(count === 20){
        document.getElementById("btn").disabled = true;
       
        

    }
}

const help = document.getElementById("help")
const newElement = document.createElement("h2")
help.appendChild(newElement)

function suggestValue(){
let derivedNum = Math.round((miniGuess/2 + maxiGuess/2))
newElement.textContent = `I think you can try this value:  ${derivedNum}`

}