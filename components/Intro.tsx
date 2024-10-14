import styled from "styled-components";
import { Box } from "./Box";

const Wrapper = styled.header`
  line-height: 1.45; //had to add this after moving Intro from main to header
  margin-top: 48px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  justify-content: center;
`;

const LinkBreak = styled.div`
  --line-margin-left: -92px;
  --icon-padding-sides: 8px;

  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 100px;
  margin-left: var(--line-margin-left);
  max-width: 600px;

  i {
    color: var(--color-text);
    margin: 0 var(--icon-padding-sides);
    font-size: var(--font-size-5);
  }
`;

const Line = styled.hr<{ growRatio: number }>`
  flex-grow: 1;
  margin: 0;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid black;

  //Make first hr icons align with text body with width of --line-margin-left
  &:first-of-type {
    max-width: calc(-1 * var(--line-margin-left) - var(--icon-padding-sides));
  }
`;

export function Intro() {
  return (
    <Wrapper id="intro">
      <StyledBox maxWidth={1000} gutter={96} mobileGutter={16}>
        <h1>Hi, I&apos;m Mark</h1>
        <h4>Code Enthusiast</h4>
        <h4>Submarine Veteran</h4>
        <h4>Lifelong Learner</h4>
        <LinkBreak>
          <Line growRatio={0.1} />
          <a
            href="https://www.linkedin.com/in/macolby14/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            href="https://github.com/macolby14"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="mailto:contact@markcolby.dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <i className="fas fa-envelope" />
          </a>
          <Line growRatio={1} />
        </LinkBreak>
      </StyledBox>
    </Wrapper>
  );
}
