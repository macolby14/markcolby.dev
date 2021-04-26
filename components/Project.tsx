import styled from "styled-components";
import Link from "next/link";
import { ProjectMetadata } from "../types";

const Wrapper = styled.article``;

const FlexWrapper = styled.div`
  box-shadow: var(--shadow);
  padding: 8px 32px;
  margin: 0px -32px;
  border-radius: 4px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  &:hover {
    img {
      padding: 0%;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 0 1 300px;
  height: 200px;

  img {
    max-width: 100%;
    height: auto;
    padding: 10%;
    transition: padding 1s;
  }
`;

const ProjectDescription = styled.div`
  flex: 1 1 400px;

  padding: 0 16px;

  p {
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-regular);
  }

  h3 {
    margin-bottom: 8px;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

interface Props extends ProjectMetadata {
  className?: string;
}

export function Project({
  className = "",
  title,
  description,
  slug,
  tech,
}: Props) {
  return (
    <Wrapper className={className}>
      <Link href={`/project/${slug}`} passHref>
        <StyledLink>
          <FlexWrapper>
            <ImageContainer>
              <img src="/Home_Screenshot.jpg" alt="Home Page" />
            </ImageContainer>
            <ProjectDescription>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Tech Used: {tech}</p>
            </ProjectDescription>
          </FlexWrapper>
        </StyledLink>
      </Link>
    </Wrapper>
  );
}
