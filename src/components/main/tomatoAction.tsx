import React, { FC, useEffect, useRef, useState } from "react";
import { Params } from "../../config/type";
import CloseWrapper from "../custom/close-wrapper";

type P = {
  time: number;
  getUnFinishTomato: () => void;
  duration: number;
  finishTomato: (params: Params) => void;
};
const TomatoAction: FC<P> = (props) => {
  const [state, setState] = useState(props.time);
  let seconds = Math.floor((state / 1000) % 60);
  let min = Math.floor(state / 1000 / 60);
  let title = `${min < 10 ? `0${min}` : min}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
  const percent = (1 - state / props.duration) * 100;
  const timer: any = useRef(null);
  useEffect(() => {
    timer.current = setTimeout(() => {
      if (state > 0) {
        setState(state - 1000);
      } else {
        props.getUnFinishTomato();
      }
    }, 1000);
    return () => {
      clearTimeout(timer.current);
    };
  });
  return (
    <CloseWrapper finishTomato={props.finishTomato}>
      <div
        className="progress"
        style={{ width: `${percent}%`, height: "31px" }}
      ></div>
      <span>{title}</span>
    </CloseWrapper>
  );
};

export default TomatoAction;
