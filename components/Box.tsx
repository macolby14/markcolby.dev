// eslint-disable-next-line no-use-before-define
import React from "react";
import styled from "styled-components";

interface WrapperProps {
  maxWidth: number;
  gutter: number;
}

const Wrapper = styled.div<WrapperProps>`
  margin: 0 auto;
  max-width: ${(props) => props.maxWidth}px;
  padding: 0 ${(props) => props.gutter}px;
`;

interface Props extends WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function Box({ children, maxWidth, gutter, className = "" }: Props) {
  return (
    <Wrapper className={className} maxWidth={maxWidth} gutter={gutter}>
      {children}
    </Wrapper>
  );
}
