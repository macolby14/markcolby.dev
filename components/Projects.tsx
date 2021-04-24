import styled from "styled-components";
import { ProjectMetadata } from "../global";
import { Box } from "./Box";
import { Project } from "./Project";

const Wrapper = styled.section`
  h2 {
    margin-bottom: 16px;
  }
`;

const StyledProject = styled(Project)`
  margin-bottom: 16px;
`;

interface Props {
  projects: ProjectMetadata[];
}

export function Projects({ projects }: Props) {
  return (
    <Wrapper>
      <Box maxWidth={1200} gutter={96}>
        <h2>Projects</h2>
        {projects.map(({ title, description }) => (
          <StyledProject key={title} title={title} description={description} />
        ))}
      </Box>
    </Wrapper>
  );
}
