import styled from "styled-components";
import Link from "next/link";
import { ProjectMetadata } from "../global";

const Wrapper = styled.article``;

const FlexWrapper = styled.div`
  border: 1px solid black;
  padding: 8px 32px;
  margin: 0px -32px;
  border-radius: 4px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  flex: 0 1 300px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const ProjectDescription = styled.div`
  flex: 1 1 400px;

  padding: 0 16px;

  p {
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-regular);
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

interface Props extends ProjectMetadata {
  className?: string;
}

export function Project({ className = "", title, description, slug }: Props) {
  return (
    <Wrapper className={className}>
      <Link href="/test" passHref>
        <StyledLink className={className}>
          <FlexWrapper>
            <ImageContainer className={className}>
              <img src="/Home_Screenshot.jpg" alt="Home Page" />
            </ImageContainer>
            <ProjectDescription>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Slug: {slug}</p>
              <p>This is the tech stack</p>
            </ProjectDescription>
          </FlexWrapper>
        </StyledLink>
      </Link>
    </Wrapper>
  );
}
