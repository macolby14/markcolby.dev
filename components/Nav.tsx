import styled from "styled-components";
import Link from "next/link";

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
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-5);

  a {
    color: inherit;
    text-decoration: none;
  }

  li:hover {
    cursor: pointer;
    transform: translateY(-4px);
  }

  li:hover:after {
    transform: 0;
  }
`;

const Separator = styled.span`
  margin: 0 16px;
`;

export function Nav() {
  return (
    <Wrapper>
      <List>
        <li>
          <a href="#intro">Intro</a>
        </li>
        <Separator>/</Separator>
        <li>
          <a href="#about">About</a>
        </li>
        <Separator>/</Separator>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </List>
    </Wrapper>
  );
}

export function ProjectNav() {
  return (
    <Wrapper>
      <List>
        <li>
          <Link href="/#intro">
            <a>Home</a>
          </Link>
        </li>
        <Separator>/</Separator>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <Separator>/</Separator>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
      </List>
    </Wrapper>
  );
}
