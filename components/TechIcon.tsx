import styled from "styled-components";
import { TechData } from "../types";

const Wrapper = styled.figure`
  display: flex;
  align-items: center;
  box-shadow: var(--shadow);
  width: fit-content;
  padding: 4px 8px;
  gap: 4px;

  figcaption {
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-regular);
  }
`;

interface Props {
  tech: TechData;
}

export function TechIcon({ tech }: Props) {
  return (
    <Wrapper>
      <img
        src={tech.src}
        alt={`${tech.name} Icon`}
        width="32px"
        height="auto"
      />
      <figcaption>{tech.name}</figcaption>
    </Wrapper>
  );
}
