import { Button, Divider, Input } from "antd";
import React, { useEffect, useState } from "react";
import ajax from "../../config/axiosConfig";
import TomatoAction from "./tomatoAction";
import { Params } from "../../config/type";
import CloseWrapper from "../custom/close-wrapper";
import TomatoList from "./tomato_list";
const Tomatoes = () => {
  let html;
  const [tomatoes, setTomatoes] = useState([]);
  const [unFinishTomato, setUnFinishTomato] = useState<any>({});
  const getUnFinishTomato = async () => {
    try {
      const response = await ajax.get("tomatoes");
      setTomatoes(response.data.resources);
      const unFinish = response.data.resources.filter((t: any) => {
        return !t.description && !t.ended_at && !t.aborted;
      })[0];
      setUnFinishTomato(unFinish);
    } catch (error) {
      console.error(error);
    }
  };
  const finishTomato = async (params: Params) => {
    await ajax
      .put(`tomatoes/${unFinishTomato.id}`, {
        ...params,
        ended_at: new Date().toISOString(),
      })
      .then(null, (error) => {
        throw new Error(error);
      });
    getUnFinishTomato();
  };
  useEffect(() => {
    getUnFinishTomato(); //第一次的时候就获取未完成的番茄，找到没有完成的番茄闹钟
  }, []);
  const startTomatoes = async () => {
    await ajax.post("tomatoes", { duration: 1500000 }).then(null, (error) => {
      throw new Error(error);
    });
    getUnFinishTomato();
  };
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
      <TomatoList {...{ tomatoes: tomatoes }} />
    </>
  );
};

export default Tomatoes;
