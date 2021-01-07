import dayjs from "dayjs";
import React, { FC } from "react";
import styled from "styled-components";
type P = {
  tomatoes: any[];
};
const Wrapper = styled.section`
  padding: 15px;
  .tomato_title {
    display: flex;
    justify-content: space-between;
    > span:nth-child(1) {
      color: #999999;
      font-size: 16px;
    }
    > span:nth-child(2) {
      color: #666666;
      font-size: 12px;
    }
  }
  .tomato_list {
    > li {
      display: flex;
      justify-content: start;
      > span:nth-child(1) {
        color: #999999;
        font-size: 14px;
        margin-right: 15px;
      }
    }
  }
`;
const getFinishedTomatoes = (tomatoes: any[]) => {
  return tomatoes.filter(
    (t) => t.ended_at !== null && t.description !== "" && t.aborted !== true
  );
};
const TomatoList: FC<P> = (props) => {
  const finishedTomatoes = getFinishedTomatoes(props.tomatoes).map((t) => {
    t.startTime = dayjs(t.created_at).format("HH:mm");
    t.endTime = dayjs(t.ended_at).format("HH:mm");
    t.endDate = dayjs(t.ended_at).format("MM月DD日");
    return t;
  });
  const getFinishedGroup = (finishedTomatoes: any[]) => {
    const hashMap = new Map();
    finishedTomatoes.forEach((t) => {
      if (!hashMap.has(t.endDate)) {
        hashMap.set(t.endDate, [t]);
      } else {
        hashMap.get(t.endDate).push(t);
      }
    });
    return hashMap;
  };

  const finishedGroup = Array.from(getFinishedGroup(finishedTomatoes));
  return (
    <Wrapper>
      {finishedGroup.map(([time, messageArray]) => {
        return (
          <div key={time}>
            <div className="tomato_title">
              <span>{time}</span>
              <span>本日共完成{messageArray.length}个番茄</span>
            </div>
            <ul className="tomato_list">
              {messageArray.map((message: any) => {
                return (
                  <li key={message.id}>
                    <span>
                      {message.startTime}-{message.endTime}
                    </span>
                    <span>
                      {message.description ? message.description : "没有描述  "}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default TomatoList;
