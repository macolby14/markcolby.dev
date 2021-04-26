import styled from "styled-components";

const Wrapper = styled.nav`
  width: 100%;
  height: 50px;
  border: 1px solid var(--color-black);
  position: sticky;
  top: 0;
  background-color: var(--color-black);
  color: var(--color-white);
`;

const List = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-5);
  a {
    color: inherit;
    text-decoration: none;
  }

  li:not(:last-child)::after {
    content: "/";
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export function Nav() {
  return (
    <Wrapper>
      <List>
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </List>
    </Wrapper>
  );
}
