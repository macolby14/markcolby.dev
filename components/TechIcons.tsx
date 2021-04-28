import { TechIcon } from "./TechIcon";

interface Props {
  tech: string;
}

export function TechIcons({ tech }: Props) {
  return (
    <>
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
    </>
  );
}
