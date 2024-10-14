import styled from "styled-components";
import { Box } from "./Box";

const Wrapper = styled.section`
  padding-top: 50px; //add padding to top to allow navigation anchor to go to section without covering
  h2 {
    margin-bottom: 16px;
  }
  p {
    font-size: var(--font-size-6);
  }
`;

export function About() {
  return (
    <Wrapper id="about">
      <Box maxWidth={1200} gutter={96} mobileGutter={16}>
        <h2>About me</h2>
        <p>Hey! I’m Mark, a developer who loves full-stack technologies.</p>
        <p>
          I am currently a software engineer at Bloomberg. I was previously a
          forward deployed software engineer at Palantir and was a submarine
          officer in the US Navy.
        </p>
      </Box>
    </Wrapper>
  );
}
