import styled from "styled-components";
import Link from "next/link";
import { ProjectMetadata } from "../types";
import { TechIcons } from "./TechIcons";

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

  @media (hover: hover) {
    &:hover {
      img {
        padding: 0%;
      }
    }
  }

  @media (max-width: 720px) {
    padding: 8px 8px;
    margin: 0px -8px;
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

const ReadMoreStyle = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0;
    margin-right: 8px;
  }

  svg {
    margin-top: 4px;
  }

  svg path {
    opacity: 0;
    transition: opacity 1000ms ease;
  }

  @media (hover: hover) {
    ${Wrapper}:hover & {
      svg path {
        opacity: 1;
      }
    }
  }
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
  previewImg,
}: Props) {
  return (
    <Wrapper className={className}>
      <Link
        href={`/project/${slug}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <FlexWrapper>
          <ImageContainer>
            <img src={previewImg.src} alt={previewImg.alt} />
          </ImageContainer>
          <ProjectDescription>
            <h3>{title}</h3>
            <p>{description}</p>
            <TechIcons tech={tech} />
            <ReadMoreStyle>
              <p>Read More</p>
              <svg width="36" height="12" viewBox="0 0 36 12" fill="none">
                <path
                  d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    opacity: "1",
                  }}
                />
                <path
                  d="M15 10L19.5 5.5L15 1"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 10L27.5 5.5L23 1"
                  stroke="black"
                  strokeOpacity="0.66"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31 10L35.5 5.5L31 1"
                  stroke="black"
                  strokeOpacity="0.35"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ReadMoreStyle>
          </ProjectDescription>
        </FlexWrapper>
      </Link>
    </Wrapper>
  );
}
