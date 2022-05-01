import styled from "styled-components";

export const Main = styled.main`
  background-color: rgb(238, 238, 238);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StopWatchBox = styled.div`
  height: 85vh;
  width: 23vw;
  background-color: #0d0c1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Heading = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
`;

export const TimerBox = styled.div`
  margin: 3rem 0;
  width: 100%;
  display: flex;
  height: 12%;
  justify-content: center;
  align-items: center;
`;

export const Digits = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 3rem;
  color: #f5f5f5;
`;
export const DigitsMiliSec = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 3rem;
  color: #e42a2a;
`;

export const ControlButtonsBox = styled.div`
  margin: 3rem 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 10vw;
  height: 5vh;
  border-radius: 14px;
  margin: 0px 6px;
  display: flex;
  border: 2px solid #e42a2a;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #f5f5f5;
`;

export const ButtonPause = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  width: 10vw;
  height: 5vh;
  border-radius: 14px;
  margin: 0px 6px;
  display: flex;
  border: 2px solid #e42a2a;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #f5f5f5;
  background-color: #e42a2a;
`;
