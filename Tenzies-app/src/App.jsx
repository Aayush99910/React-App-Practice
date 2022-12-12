import React, { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    let newArray = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor((Math.random() * 6) + 1);
      const newObject = {
        value: randomNumber,
        isHeld: false,
        id: nanoid()
      }
      newArray.push(newObject);
    } 
    return newArray;
  }


  function rollDice() {
    setDice(allNewDice())
  }

  function updateDie(selectedId) {
    setDice(
      dice.map((die,index) => {
        return die.id === selectedId ? {...die, isHeld: !die.isHeld} : die
      })
    )
  }


  const diceElements = dice.map((die, index) => {
    return (
      <Die
         value={die.value}
         isHeld={die.isHeld}
         key={index}
         id={die.id}
         selectDie={updateDie}
      />
    )
  })

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
      <button 
        className="roll-btn" 
        onClick={rollDice}>Roll</button>
    </main>
  )
}