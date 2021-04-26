import styled from "styled-components";

const Wrapper = styled.nav`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  position: sticky;
  top: 0;
`;

export function Nav() {
  return <Wrapper>Test</Wrapper>;
}
