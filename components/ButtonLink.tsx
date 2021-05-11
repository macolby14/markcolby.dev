import Link from "next/link";
import React from "react"; // eslint-disable-line no-use-before-define
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  href: string;
  variant: "outline";
  size: "small" | "medium" | "large";
}

const SIZES = {
  small: {
    "--borderRadius": `${4}px`,
    "--fontSize": `${1}rem`,
    "--padding": "4px 12px",
  },
  medium: {
    "--borderRadius": `${4}px`,
    "--fontSize": `${18 / 16}rem`,
    "--padding": "12px 20px",
  },
  large: {
    "--borderRadius": `${4}px`,
    "--fontSize": `${21 / 16}rem`,
    "--padding": "16px 32px",
  },
};

const ButtonBase = styled.a<{ style: any }>`
  text-decoration: none;
  color: inherit;
  font-weight: var(--font-weight-medium);
  font-size: var(--fontSize);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  outline-color: var(--color-black);
  display: grid;
  place-items: center;
  text-align: center;

  &:focus {
    outline-offset: 4px;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: var(--color-white);
  color: var(--color-black);
  border: 2px solid currentColor;
  box-shadow: var(--shadow);

  @media (hover: hover) {
    &:hover {
      background-color: var(--color-offwhite);
      position: relative;
      top: -4px;
    }
  }
`;

export function ButtonLink({ variant, size, href, children }: Props) {
  const styles = SIZES[size];

  let Component;
  if (variant === "outline") {
    Component = OutlineButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return (
    <Link href={href} passHref>
      <Component style={styles} target="_black" rel="noopener noreferrer">
        {children}
      </Component>
    </Link>
  );
}
