import React, { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import  Confetti  from "react-confetti";

export default function App() {
  const [tenzies, setTenzies] = useState(false);
  const [dice, setDice] = useState(allNewDice());
  const [rounds, setRounds] = useState(0);
  const [lowScore, setLowScore] = useState(JSON.parse(localStorage.getItem("lowScore")) || 0);

  function allNewDice() {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      const newObject = generateNewDice();
      newArray.push(newObject);
    } 
    return newArray;
  }


  function rollDice() {
    setRounds(prevRoundValue => prevRoundValue + 1)
    if (tenzies) {
      setDice(allNewDice());
      setTenzies(false);
      setRounds(0);
      
      let lowScoreFromLocalStorage = JSON.parse(localStorage.getItem("lowScore"));

      
      if (typeof lowScoreFromLocalStorage === "number") {
        if (lowScoreFromLocalStorage === 0) {
          localStorage.setItem("lowScore", rounds);
          setLowScore(rounds);
        }else if (lowScoreFromLocalStorage > rounds){
          localStorage.setItem("lowScore", rounds);
          setLowScore(rounds);
        } else if (lowScoreFromLocalStorage , rounds) {
          // pass
        }
      } else {
        localStorage.setItem("lowScore", rounds);
        setLowScore(rounds);
      } 
      

    } else {
      setDice(oldDice => 
        oldDice.map(dice => { 
          return dice.isHeld ? dice : generateNewDice()
        })
      )
    }
  }


  function holdDice(selectedId) {
    setDice(oldDice => 
      oldDice.map(die => {
        return die.id === selectedId ? {...die, isHeld: !die.isHeld} : die
      })
    )
  }


  function generateNewDice() {
    return {
      value: Math.floor((Math.random() * 6) + 1), 
      isHeld: false, 
      id: nanoid()
    }
  }

  useEffect(() => {
    function checkWinner() {
      const allHeld = dice.every(die => die.isHeld);
      let firstNumber = dice[0].value;
      const allSameValue = dice.every(die => die.value === firstNumber)
      if (allHeld && allSameValue) {
        return true
      }

      return false
    }

    checkWinner() ? setTenzies(true) : setTenzies(false);
  }, [dice])


  const diceElements = dice.map((die, index) => {
    return (
      <Die
         value={die.value}
         isHeld={die.isHeld}
         key={index}
         id={die.id}
         toggleDie={holdDice}
      />
    )
  })

  return (
    <main>
      {tenzies && <Confetti />}
      <div className="title-container">
        <h1 className="title">Tenzies</h1>
        <p className="high-score">Low Score: {lowScore}</p>
        <p className="rounds">Number of rounds: {rounds}</p>
      </div>
      <p className="instructions">
        Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.
        To get a low score of all time try to beat the game in less amount of rounds.
      </p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button 
        className="roll-btn" 
        onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  )
}