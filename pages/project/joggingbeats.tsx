import React from "react"; // eslint-disable-line no-use-before-define
import styled from "styled-components";
import { Box } from "../../components/Box";
import { ButtonLink } from "../../components/ButtonLink";
import { ProjectMetadata } from "../../global";

export const metadata: Omit<ProjectMetadata, "slug"> = {
  title: "Jogging Beats",
  description:
    "Jogging Beats is a web application I built to help create running playlists. It integrates with the Spotify API to allow a user to generate and edit playlists with songs all at the same tempo and add them to the user’s Spotify account.",
  tech: "Typescript, React, Next.js, Styled Components",
};

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

interface LayoutProps {
  technicalChallenges: React.ReactNode;
}

function Layout({ technicalChallenges }: LayoutProps) {
  return (
    <main>
      <Box maxWidth={1200} gutter={96}>
        <Wrapper>
          <h2>{metadata.title}</h2>
          <p>{metadata.description}</p>
          <LinkWrapper>
            <ButtonLink
              variant="outline"
              size="medium"
              href="https://github.com/macolby14/jogging-beats"
            >
              Repository
            </ButtonLink>
            <ButtonLink
              variant="outline"
              size="medium"
              href="https://joggingbeats.com"
            >
              Live Site
            </ButtonLink>
          </LinkWrapper>
          <h4>Tech Used</h4>
          <p>{metadata.tech}</p>
          <MainImage src="/Home_Screenshot.jpg" alt="" />
          <h4>Project Motivation</h4>
          <p>
            I love listening to music when I run. Listening to the right music
            really helps me hold a pace and run faster. If I just listen to a
            random playlist, the song’s tempos can change and negatively affect
            my running... I’ll be hitting my stride and a slower song will come
            on, messing up my pace.
          </p>
          <p>
            I built this site using the Spotify API to allow a user to create
            workout playlists where all the songs are at the same tempo. The
            user can generate a playlist, switch out songs they do not like,
            then login to their Spotify to save the playlist.
          </p>
          <AdditionalImages>
            <ImageWrapper>
              <img
                src="/joggingbeats/Selection_Screenshot.jpg"
                alt="Selection Screenshot"
              />
            </ImageWrapper>
            <ImageWrapper>
              <img
                src="/joggingbeats/Confirmation_Screenshot.jpg"
                alt="Confirmation Screenshot"
              />
            </ImageWrapper>
          </AdditionalImages>
          <h4>Technical Challenges</h4>
          {technicalChallenges}
          <h4>Summary</h4>
          <p>
            I have been using Jogging Beats on my runs and find it great for
            finding new music to run to. I plan on continue improving this site
            to make it more useful for my future runs.
          </p>
        </Wrapper>
      </Box>
    </main>
  );
}

const technicalChallengesProp = (
  <>
    <h5>Authentication and Authorization</h5>
    <p>
      I learned a lot about the different authorization flows and OAuth during
      this project. I used two different authorizations flows for this project:
      the Client Credentials Flow and the Implicit Grant flow. For the Client
      Credentials Flow, I used the Next API routes (serverless functions) to
      protect my app’s Spotify secret and obtain a Spotify API access token.
      This allows a user to use Jogging Beats to do everything except saving
      playlists, without logging into Spotify. The second flow, the Implicit
      Grant flow, allows the User to authorize Jogging Beats to save the
      playlists they generate to their personal Spotify account.
    </p>
    <h5>Styled Components and Custom CSS</h5>
    <p>
      This was the most vanilla CSS I had written for a project, and I learned a
      lot. I got a lot of practical experience with flexbox and grid, CSS
      variables, media queries, and vanilla styling. Styled components made it
      easy to apply styles with React components and I enjoyed the ability to
      pass variables to the components to customize the styles and not having to
      worry about CSS specificity.
    </p>
  </>
);

export default function JoggingBeats() {
  return <Layout technicalChallenges={technicalChallengesProp} />;
}
