import styled from "styled-components";
import Link from "next/link";
import React from "react"; // eslint-disable-line no-use-before-define

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

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

function ScrollLink({ to, children }: ScrollLinkProps) {
  function clickHandler() {
    // TODO: Replace querySelector with React refs
    const el = document.querySelector<HTMLElement>(to);
    if (!el) {
      console.warn("Invalid element to scroll to"); // eslint-disable-line no-console
    }
    el?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <a
      onClick={clickHandler}
      onKeyDown={(e: React.KeyboardEvent<HTMLAnchorElement>) => {
        if (e.key === "Enter") {
          clickHandler();
        }
      }}
      role="link"
      tabIndex={0}
    >
      {children}
    </a>
  );
}

export function Nav() {
  return (
    <Wrapper>
      <List>
        <li>
          <ScrollLink to="#intro">Intro</ScrollLink>
        </li>
        <Separator>/</Separator>
        <li>
          <ScrollLink to="#about">About</ScrollLink>
        </li>
        <Separator>/</Separator>
        <li>
          <ScrollLink to="#projects">Projects</ScrollLink>
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
