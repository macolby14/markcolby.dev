import Head from "next/head";
import React from "react"; // eslint-disable-line no-use-before-define
import styled from "styled-components";
import { ProjectMetadata } from "../types";
import { Box } from "./Box";
import { ButtonLink } from "./ButtonLink";
import { Footer } from "./Footer";
import { ProjectNav } from "./Nav";
import { TechIcons } from "./TechIcons";

const Wrapper = styled.section`
  h2 {
    /* text-align: center; */
    margin-bottom: 16px;
    margin-top: 16px;
    font-weight: var(--font-weight-regular);
  }

  h4 {
    margin: 16px 0;
    font-weight: var(--font-weight-regular);
  }

  h5 {
    margin: 8px 0;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const MainImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  box-shadow: var(--shadow);
  margin: 64px 0;
`;

const AdditionalImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 48px;
`;

const ImageWrapper = styled.div`
  flex: 1 1 50%;

  img {
    width: 100%;
    height: auto;
    box-shadow: var(--shadow);
  }
`;

interface ImageInfo {
  src: string;
  alt: string;
}

interface LayoutProps {
  metadata: Omit<ProjectMetadata, "slug">;
  technicalChallenges: React.ReactNode;
  motivation: React.ReactNode;
  summary: React.ReactNode;
  links: {
    liveUrl: string;
    codeUrl: string;
  };
  customButtons?: React.ReactNode;
  images: ImageInfo[];
}

export function Layout({
  metadata,
  technicalChallenges,
  motivation,
  summary,
  links: { liveUrl, codeUrl },
  images,
  customButtons = null,
}: LayoutProps) {
  if (!images || images.length !== 3) {
    // eslint-disable-next-line no-console
    console.warn("Wrong number of images used in a Project Layout");
  }

  const buttonComponent = customButtons ?? (
    <LinkWrapper>
      <ButtonLink variant="outline" size="medium" href={liveUrl}>
        Live Site
      </ButtonLink>
      <ButtonLink variant="outline" size="medium" href={codeUrl}>
        Repository
      </ButtonLink>
    </LinkWrapper>
  );

  return (
    <>
      <Head>
        <title> {metadata.title} • Mark Colby</title>
      </Head>
      <ProjectNav />
      <main>
        <Box maxWidth={1200} gutter={96} mobileGutter={16}>
          <Wrapper>
            <h2>{metadata.title}</h2>
            <p>{metadata.description}</p>
            {buttonComponent}
            <h4>Tech Used</h4>
            <TechIcons tech={metadata.tech} />
            {/* <p>{metadata.tech}</p> */}
            <MainImage src={images[0].src} alt={images[0].alt} />
            <h4>Project Motivation</h4>
            {motivation}
            <AdditionalImages>
              <ImageWrapper>
                <img src={images[1].src} alt={images[1].alt} />
              </ImageWrapper>
              <ImageWrapper>
                <img src={images[2].src} alt={images[2].alt} />
              </ImageWrapper>
            </AdditionalImages>
            <h4>Technical Challenges</h4>
            {technicalChallenges}
            <h4>Summary</h4>
            {summary}
          </Wrapper>
        </Box>
      </main>
      <Footer />
    </>
  );
}
