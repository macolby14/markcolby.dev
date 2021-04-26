import fs from "fs";
import path from "path";
import Head from "next/head";
import { About } from "../components/About";
import { Box } from "../components/Box";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";
import { ProjectMetadata } from "../types";
import { Nav } from "../components/Nav";

interface Props {
  projectsMeta: ProjectMetadata[];
}

export default function Home({ projectsMeta }: Props) {
  return (
    <>
      <Head>
        <title>Mark Colby - Programmer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Nav />
      <main>
        <Box maxWidth={1600} gutter={32}>
          <About />
          <Projects projects={projectsMeta} />
        </Box>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
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
