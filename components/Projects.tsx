import styled from "styled-components";
import { ProjectMetadata } from "../types";
import { Box } from "./Box";
import { Project } from "./Project";

const Wrapper = styled.section`
  padding-top: 50px;
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
    <Wrapper id="projects">
      <Box maxWidth={1200} gutter={96}>
        <h2>Projects</h2>
        {projects.map(({ title, description, slug, tech, previewImg }) => (
          <StyledProject
            key={title}
            title={title}
            description={description}
            slug={slug}
            tech={tech}
            previewImg={previewImg}
          />
        ))}
      </Box>
    </Wrapper>
  );
}
