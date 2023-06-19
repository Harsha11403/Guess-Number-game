let randomNumber=Math.ceil(Math.random()*100);
console.log(randomNumber);
let inputText=document.getElementById("userInput");  //taking user input
let gameResult=document.getElementById("gameOutput");  
function checkGuess()
{
    let inputNumber=parseInt(inputText.value);
    if(inputNumber > randomNumber)
    {
        gameResult.textContent="Too High! Try Again...";
        gameResult.style.backgroundColor="Red";
    }
    else if(inputNumber < randomNumber)
    {
        gameResult.textContent="Too Low! Try Again...";
        gameResult.style.backgroundColor="Red";
    }
    else if(inputNumber === randomNumber)
    {
        gameResult.textContent="Hurray!!!You  Win..."
        gameResult.style.backgroundColor="green";
    }
    else{
        gameResult.textContent="Invalid Input.Try Again!!!"
        gameResult.style.backgroundColor="red";
    }
    
}