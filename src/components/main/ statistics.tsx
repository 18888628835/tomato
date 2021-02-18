import dayjs from "dayjs";
import React, { FC } from "react";
import styled from "styled-components";

const Section = styled.section`
  li {
    list-style: none;
  }
  padding: 20px;
  .history {
    background-color: #d6d6d6;
    text-align: center;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
  > ul {
    display: flex;
    > li {
      :hover {
        background-color: #f0eeee;
      }
      padding: 16px 24px;
      flex: 1;
      display: flex;
      flex-direction: column;
      color: #666666;
      border: 1px solid #e9e9e9;
      > span:nth-child(2) {
        color: #999999;
      }
      > span:nth-child(3) {
        font-size: 30px;
      }
    }
  }
`;
type P = {
  finishedTomatoes: any[];
  todoList: any[];
  tomatoes: any[];
};
const Statistics: FC<P> = React.memo((props) => {
  const nowMonth = dayjs().get("month");
  const finishTodo = props.todoList.filter((todo) => {
    return todo.completed && todo.deleted !== true;
  });

  const monthFinishTomatoes = props.finishedTomatoes.filter((tomato) => {
    return dayjs(tomato.ended_at).month() === nowMonth;
  });
  const list = [
    ["统计历史", nowMonth + 1 + "月累积", monthFinishTomatoes.length],
    ["番茄历史", "完成番茄", props.finishedTomatoes.length],
    ["任务历史", "完成任务", finishTodo.length],
  ];
  return (
    <Section>
      <ul>
        {list.map((array, index) => {
          return (
            <li key={array[0]} onClick={() => {}}>
              {array.map((name) => {
                return <span key={name}>{name}</span>;
              })}
            </li>
          );
        })}
      </ul>
    </Section>
  );
});

export default Statistics;
