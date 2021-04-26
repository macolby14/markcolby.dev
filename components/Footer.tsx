import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  background-color: var(--color-black);
  /* color: white; */
  height: 70px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  i {
    color: var(--color-white);
    margin: 0 8px;
    font-size: var(--font-size-5);
  }
`;

export function Footer() {
  return (
    <Wrapper>
      <Link href="/">
        <a>
          <img src="/icons/initials.svg" alt="MAC" width="auto" height="60px" />
        </a>
      </Link>
      <div>
        <a
          href="https://www.linkedin.com/in/macolby14/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href="https://github.com/macolby14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="mailto:macolby14@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope" />
        </a>
      </div>
    </Wrapper>
  );
}
