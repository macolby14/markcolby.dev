import styled from "styled-components";
import { Box } from "./Box";
import { Project } from "./Project";

const Wrapper = styled.section`
  h2 {
    margin-bottom: 16px;
  }
`;

interface Project {
  title: string;
  description: string;
  imageLink: string;
}

const projects: Project[] = [
  {
    title: "Jogging Beats",
    description: "Create a spotify playlist",
    imageLink: "/",
  },
];

export function Projects() {
  return (
    <Wrapper>
      <Box maxWidth={1200} gutter={96}>
        <h2>Projects</h2>
        <Project />
      </Box>
    </Wrapper>
  );
}
