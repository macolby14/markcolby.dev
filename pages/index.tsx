import fs from "fs";
import path from "path";
import { About } from "../components/About";
import { Box } from "../components/Box";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";
import { ProjectMetadata } from "../types";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

interface Props {
  projectsMeta: ProjectMetadata[];
}

export default function Home({ projectsMeta }: Props) {
  return (
    <>
      <Intro />
      <Nav />
      <main>
        <Box maxWidth={1600} gutter={32} mobileGutter={16}>
          <About />
          <Projects projects={projectsMeta} />
        </Box>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/project");
  const filenames = fs.readdirSync(postsDirectory);

  const projectsMeta = filenames.map((name) => {
    // eslint-disable-next-line import/no-dynamic-require
    const existingMeta = require(`./project/${name}`).metadata;
    const slug = name.replace(/\.[^/.]+$/, "");
    const updatedMeta = { ...existingMeta, slug };
    return updatedMeta as ProjectMetadata[];
  });

  return { props: { projectsMeta } };
}
