import  { useState } from 'react';

function generateRandom() {
    return  (Math.floor(Math.random() * 1000) + 1);
  }

export default function LottaryGame() { 
const [randomNumber, setRandomNumber] = useState(generateRandom());
  const [isWinner, setIsWinner] = useState(false);

  
    let handleClick = () => {

    let newRandomNumber = generateRandom();
    setRandomNumber(newRandomNumber); 

    let firstnum = Math.floor(newRandomNumber / 100);
    let secondnum = Math.floor((newRandomNumber % 100) / 10);
    let thirdnum = newRandomNumber % 10;
    let sum = firstnum + secondnum + thirdnum;

      if (sum === 15) {
        setIsWinner(true);

      } else {
        setIsWinner(false);
      }
    }

    return (
        <div>
            <h1> {isWinner === true ?<p>Lottary! Congratulations! You win!</p> : <p>Lottary</p> }</h1>
            <h3>Lottary ticket: {randomNumber}</h3>
            <button onClick={handleClick}>new Ticket</button>
           
          
    
        </div>

)
}
