import styled from "styled-components";

const Wrapper = styled.figure`
  display: flex;
  align-items: center;
  box-shadow: var(--shadow);
  width: fit-content;
  padding: 4px 8px;
  gap: 4px;
  margin-bottom: 8px;

  figcaption {
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-regular);
  }
`;

interface Props {
  name: string;
  iconLink: string;
}

export function TechIcon({ name, iconLink }: Props) {
  return (
    <Wrapper>
      <img src={iconLink} alt={`${name} Icon`} width="32px" height="auto" />
      <figcaption>{name}</figcaption>
    </Wrapper>
  );
}
