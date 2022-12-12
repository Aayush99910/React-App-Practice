import React, { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [tenzies, setTenzies] = useState(false);
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      const newObject = generateNewDice();
      newArray.push(newObject);
    } 
    return newArray;
  }


  function rollDice() {
    setDice(oldDice => 
      oldDice.map(dice => { 
        return dice.isHeld ? dice : generateNewDice()
      })
    )
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
      let firstNumber = dice[0].value;
      for (let i = 0; i < dice.length; i++) {
        const diceValue = dice[i].value;
        const diceHeld = dice[i].isHeld;
        if (diceValue !== firstNumber) {
          return false;
        } else if (!diceHeld) {
          return false;
        }
      }
      return true;
    }

    checkWinner() ? setTenzies(prevValue => !prevValue) : setTenzies(prevValue => prevValue);
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
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.
      </p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button 
        className="roll-btn" 
        onClick={rollDice}>{tenzies ? "Reset Game" : "Roll"}</button>
    </main>
  )
}