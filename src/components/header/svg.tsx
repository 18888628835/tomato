import React, { FC } from "react";
import styled from "styled-components";
const Div = styled.div`
  > svg {
    width: 30px;
    height: 30px;
  }
`;
export const Svg: FC<{ iconName: string }> = (props) => {
  return (
    <Div>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={`#icon-${props.iconName}`}></use>
      </svg>
    </Div>
  );
};
