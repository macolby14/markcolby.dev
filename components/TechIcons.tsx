import styled from "styled-components";
import { TechIcon } from "./TechIcon";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

interface Props {
  tech: string;
}

export function TechIcons({ tech }: Props) {
  return (
    <Wrapper>
      <TechIcon iconLink="/icons/react.svg" name="React" />
      <TechIcon iconLink="/icons/docker.svg" name="Docker" />
      <TechIcon iconLink="/icons/mocha.svg" name="Mocha" />
      <TechIcon iconLink="/icons/nextjs.svg" name="Next.js" />
      <TechIcon iconLink="/icons/nodejs.svg" name="Node.js" />
      <TechIcon
        iconLink="/icons/styled-components.png"
        name="styled components"
      />
      <TechIcon iconLink="/icons/typescript.svg" name="Typescript" />
    </Wrapper>
  );
}
