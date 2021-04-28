import styled from "styled-components";
import { TECH } from "../constants";
import { TechNames } from "../types";
import { TechIcon } from "./TechIcon";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

interface Props {
  tech: TechNames[];
}

export function TechIcons({ tech }: Props) {
  return (
    <Wrapper>
      {tech.map((techName) => (
        <TechIcon key={techName} tech={TECH[techName]} />
      ))}
    </Wrapper>
  );
}
