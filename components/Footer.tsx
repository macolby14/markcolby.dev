import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  background-color: black;
  /* color: white; */
  height: 70px;
  margin-top: 50px;
`;

export function Footer() {
  return (
    <Wrapper>
      <img src="/icons/initials.svg" alt="MAC" width="100" height="auto" />
    </Wrapper>
  );
}
