import styled from "styled-components";
import { Link } from "react-scroll";

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
          <Link to="intro" spy smooth duration={500}>
            Intro
          </Link>
        </li>
        <li>
          <Link to="about" spy smooth duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" spy smooth duration={500}>
            Projects
          </Link>
        </li>
      </List>
    </Wrapper>
  );
}
