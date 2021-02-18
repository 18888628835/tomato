import React, { FC } from "react";
import styled from "styled-components";
type P = {
  finishedGroup: any[];
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
      > span:nth-child(1) {
        color: #999999;
        font-size: 14px;
        margin-right: 15px;
      }
    }
  }
`;
const TomatoList: FC<P> = React.memo((props) => {
  return (
    <Wrapper>
      {props.finishedGroup.map(([time, messageArray]) => {
        return (
          <div key={time}>
            <div className="tomato_title">
              <span>{time}</span>
              <span>本日完成{messageArray.length}个番茄</span>
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
});

export default TomatoList;
