import styled from "styled-components";
import { Box } from "../../components/Box";
import { ButtonLink } from "../../components/ButtonLink";
import { ProjectMetadata } from "../../global";

export const metadata: Omit<ProjectMetadata, "slug"> = {
  title: "Jogging Beats",
  description:
    "Jogging Beats is a web application I built to help runners create workout playlists. It is a site that integrates with the Spotify API to allow a user to easily generate new playlists with songs all at the same tempo.",
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

export default function JoggingBeats() {
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
            random playlist, I encounter the problem where the song&apos;s tempo
            will change and affect my running... I&apos;ll be picking up the
            pace and a slower song will come on and kill my tempo.
          </p>
          <p>
            The Spotify API allows you to get song recommendations with the
            target tempo (beats per minute) as a constraint. I built this site
            to allow create random playlists where all the songs are at the same
            tempo. Not only does this allow me to create new playlists at a
            certain, it allow&apos; to easily create <em>new</em> playlists each
            run, so I&apos; always listening to different music.
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
          <h5>Authorization</h5>
          <p>
            I learned a lot about authorization during this project. I needed to
            use OAuth for the user&apos;s Spotify account to allow them to be
            able to save the playlists to their Spotify account. Luckily,
            Spotify has great{" "}
            <a href="https://developer.spotify.com/documentation/general/guides/authorization-guide/">
              API documentation about this.
            </a>
            I use two different types of Authorization flows on the site, server
            side authorization code flow with Jogging Beat&apos;s Client
            credentials to allow user&apos;s to generate playlist without
            logging in and Implicit Grant Authorization flow to allow the user
            to give Jogging Beats permission to save new playlists on their
            Spotify account (I would use PKCE flow in the future for additional
            security). For the server side authorization code, I used Next.js
            serverless functions via API routes to store my client secrets. The
            Next.js API routes were very intuitive and I definitely plan on
            using them again for projects with limited server-side work.
          </p>
          <h4>Lessons Learned</h4>
          <p>
            I learned a lot about server side rendering, authorization and
            authentication, and styled components for this project. Although I
            will probably reach for a service or tool like Auth0 or Next-Auth to
            help make it authorization easier in the future, I learned a lot by
            diving into the different auth flows and the use cases for them. I
            also feel a lot more confident with writing plain CSS after using
            styled-components. Overall, it was a great project and I am enjoying
            using it to create playlists when I run.
          </p>
        </Wrapper>
      </Box>
    </main>
  );
}
