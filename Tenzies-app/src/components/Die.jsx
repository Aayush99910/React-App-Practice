import React, { useEffect, useState } from "react";

export default function Dice(props) {
  let className = 'grid-item';
  if (props.isHeld) {
    className = 'grid-item selected-grid'
  }
  return (
    <div className={className} onClick={() => {props.selectDie(props.id)}}>
      {props.value}
    </div>
  )
}