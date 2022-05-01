import React from "react";
import { ButtonGroup, ControlButtonsBox, Button, ButtonPause } from "./Style";

export function ControlButtons(props) {
  const StartButton = <Button onClick={props.handleStart}>Start</Button>;
  const ActiveButtons = (
    <ButtonGroup>
      <Button onClick={props.handleReset}>Reset</Button>
      <ButtonPause onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </ButtonPause>
    </ButtonGroup>
  );

  return (
    <ControlButtonsBox>
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </ControlButtonsBox>
  );
}
