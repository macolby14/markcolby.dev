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

export function Nav() {
  return <Wrapper>Test</Wrapper>;
}
