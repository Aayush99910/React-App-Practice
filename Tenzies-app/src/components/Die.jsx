import React, { useEffect, useState } from "react";

export default function Dice(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  return (
    <div className="grid-item"  style={styles} onClick={() => {props.toggleDie(props.id)}}>
      {props.value}
    </div>
  )
}