import styled from "styled-components";
import { Box } from "./Box";

const Wrapper = styled.section``;

const Line = styled.hr`
  max-width: 400px;
  margin: 8px 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid black;
`;

export function Intro() {
  return (
    <Wrapper>
      <Box maxWidth={1000} gutter={32}>
        <h1>Hi, I'm Mark</h1>
        <h4>Code Enthusiast</h4>
        <h4>Submarine Veteran</h4>
        <h4>Lifelong Learner</h4>
        <Line />
      </Box>
    </Wrapper>
  );
}
