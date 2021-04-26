import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
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
          <ScrollLink to="/intro" spy smooth duration={500}>
            Intro
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" spy smooth duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="projects" spy smooth duration={500}>
            Projects
          </ScrollLink>
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
            <a>Intro</a>
          </Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
      </List>
    </Wrapper>
  );
}
