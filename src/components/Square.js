import React, { useState } from "react";
import "./Square.css";
function Square(props) {
const {value} = props;
//  const {isX} = props

  return (
    <button className="box" onClick={props.onSquareClick} >{value}</button>
  );
}

export default Square;
