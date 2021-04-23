import styled from "styled-components";
import { Box } from "./Box";

const Wrapper = styled.section`
  margin-top: 32px;
  h2 {
    margin-bottom: 16px;
    margin-left: 96px;
  }
  p {
    font-size: var(--font-size-6);
  }
`;

export function About() {
  return (
    <Wrapper>
      <Box maxWidth={1200} gutter={96}>
        <h2>About me</h2>
        <p>Hey! I’m Mark, a software engineer who loves full-stack web tech.</p>
        <p>
          I became captivated by programming in high school. We made Java applet
          games in our computer science course for our end of year product and
          this was the first time I ever wanted to stay up late to do homework.
          Whether making games or building web tools, I love how coding gives me
          the ability to solve problems.
        </p>
        <p>
          I joined the Navy after college and got to see the world. Kind of.
          Actually, I couldn’t really see much most the time on the submarine.
          But when we did get to pull into port it was really cool. More
          importantly, submarines are really, really cool.
        </p>
        <p>
          When I’m not enjoying Hawaii with my wife, I use most of my time
          listening about code, reading about code, or actually coding. I’m
          seeking a full-time role as a software engineer where I can continue
          to grow and make a positive impact at a company.
        </p>
      </Box>
    </Wrapper>
  );
}
