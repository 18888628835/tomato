import { Button, Divider, Input } from "antd";
import React, { FC, useEffect } from "react";
import TomatoAction from "./tomatoAction";
import CloseWrapper from "../custom/close-wrapper";
import TomatoList from "./tomato_list";
import { Params } from "../config/type";
type P = {
  startTomatoes: () => void;
  getUnFinishTomato: () => void;
  unFinishTomato: { [key: string]: any };
  setUnFinishTomato: (params: { [key: string]: any }) => void;
  finishedGroup: [any, any][];
  finishTomato: (params: Params) => void;
};
const Tomatoes: FC<P> = React.memo((props) => {
  let html;
  const {
    startTomatoes,
    getUnFinishTomato,
    unFinishTomato,
    setUnFinishTomato,
    finishedGroup,
    finishTomato,
  } = props;
  useEffect(() => {
    getUnFinishTomato(); //第一次的时候就获取未完成的番茄，找到没有完成的番茄闹钟
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (unFinishTomato === undefined) {
    html = (
      <Button
        block={true}
        onClick={() => {
          startTomatoes();
        }}
      >
        开始番茄
      </Button>
    );
  } else {
    const startedAt = Date.parse(unFinishTomato.started_at);
    const duration = unFinishTomato.duration;
    const timeNow = new Date().getTime();
    console.log(startedAt);

    if (timeNow - startedAt > duration) {
      html = (
        <CloseWrapper finishTomato={finishTomato}>
          <Input
            bordered={false}
            placeholder="请输入你刚刚完成的任务"
            value={unFinishTomato.description}
            onChange={(e) => {
              setUnFinishTomato({
                ...unFinishTomato,
                description: e.target.value,
              });
            }}
            onPressEnter={() => {
              finishTomato({
                description: unFinishTomato.description,
              });
            }}
          />
        </CloseWrapper>
      );
    } else if (timeNow - startedAt < duration) {
      const time = startedAt + duration - timeNow; //还剩下多少ms
      html = (
        <TomatoAction
          time={time}
          duration={duration}
          getUnFinishTomato={getUnFinishTomato}
          finishTomato={finishTomato}
        />
      );
    }
  }
  return (
    <>
      {html}
      <Divider />
      {props.children}
      <TomatoList {...{ finishedGroup }} />
    </>
  );
});

export default Tomatoes;
