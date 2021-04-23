import styled from "styled-components";

const Wrapper = styled.article`
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

export function Project() {
  return (
    <a href="/test">
      <Wrapper>
        <ImageContainer>
          <img src="/Home_Screenshot.jpg" alt="Home Page" />
        </ImageContainer>
        <ProjectDescription>
          <h3>Jogging Beats</h3>
          <p>
            A site that uses the Spotify API to allow users to quickly generate
            playlists to a certain running beats per minute.
          </p>
          <p>This is the tech stack</p>
        </ProjectDescription>
      </Wrapper>
    </a>
  );
}
