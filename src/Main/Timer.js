import React from "react";
import { TimerBox, Digits, DigitsMiliSec } from "./Style";

export function Timer(props) {
  return (
    <TimerBox>
      <Digits>
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </Digits>
      <Digits>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.</Digits>
      <DigitsMiliSec>
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </DigitsMiliSec>
    </TimerBox>
  );
}
