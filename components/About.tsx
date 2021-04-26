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
      <Box maxWidth={1200} gutter={96}>
        <h2>About me</h2>
        <p>Hey! I’m Mark, a software engineer who loves full-stack web tech.</p>
        <p>
          I was first introduced to programming in high school. In my computer
          science we made games using Java and I was instantly captivated,
          staying up night after night to work on my Bomberman game. The ability
          to turn code into tools that can automate work and organize
          information immediately became my most powerful skill.
        </p>
        <p>
          I joined the Navy after college and got to see the world on a
          submarine. Kind of. Actually, I couldn’t really see much most the time
          because we were underwater… But I really, enjoyed my time working in
          both the engine room and in control, and I think submarines are
          awesome pieces of technology!
        </p>
        <p>
          I’m currently stationed in Hawaii, preparing to transition to my first
          job outside of the military. When I’m not enjoying Hawaii’s beaches or
          trails with my wife, I use my time reading about code, listening about
          code, or actually coding. I’m seeking a full-time role as a software
          engineer at a company where I can continue to grow and make a positive
          impact.
        </p>
      </Box>
    </Wrapper>
  );
}
