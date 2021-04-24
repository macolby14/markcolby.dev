import styled from "styled-components";
import { Box } from "../../components/Box";
import { ButtonLink } from "../../components/ButtonLink";
import { ProjectMetadata } from "../../global";

export const metadata: Omit<ProjectMetadata, "slug"> = {
  title: "Jogging Beats",
  description:
    "A site that uses the Spotify API to allows users to quickly and easily generate workout playlists with songs to a certain tempo (beats per minute). Created to help me create running playlists.",
  tech: "Typescript, React, Next.js, Styled Components",
};

const Wrapper = styled.section`
  h2 {
    text-align: center;
  }
`;

export default function JoggingBeats() {
  return (
    <main>
      <Box maxWidth={1200} gutter={96}>
        <Wrapper>
          <h2>Jogging Beats</h2>
          <div>
            <ButtonLink variant="outline" size="medium" href="/">
              Test
            </ButtonLink>
          </div>
        </Wrapper>
      </Box>
    </main>
  );
}
