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

const ProjectImage = styled.div`
  flex: 0 1 200px;
  border: 1px solid black;
  height: 200px;
`;

const ProjectDescription = styled.div`
  flex: 1 1 600px;

  padding: 0 16px;

  p {
    font-size: var(--font-size-6);
    font-weight: var(--font-weight-regular);
  }
`;

export function Project() {
  return (
    <Wrapper>
      <ProjectImage>Image</ProjectImage>
      <ProjectDescription>
        <h3>Jogging Beats</h3>
        <p>
          A site that uses the Spotify API to allow users to quickly generate
          playlists to a certain running beats per minute.
        </p>
        <p>This is the tech stack</p>
      </ProjectDescription>
    </Wrapper>
  );
}
