import fs from "fs";
import path from "path";
import Head from "next/head";
import { About } from "../components/About";
import { Box } from "../components/Box";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";

interface Props {
  filenames: string[];
}

export default function Home({ filenames }: Props) {
  return (
    <div>
      <Head>
        <title>Mark Colby - Programmer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box maxWidth={1600} gutter={32}>
          <Intro />
          <About />
          <Projects />
        </Box>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "projects");
  const filenames = fs.readdirSync(postsDirectory);

  console.log(filenames);

  return { props: { filenames } };

  // const posts = filenames.map((filename) => {
  //   const filePath = path.join(postsDirectory, filename);
  //   const fileContents = fs.readFileSync(filePath, "utf8");

  //   // Generally you would parse/transform the contents
  //   // For example you can transform markdown to HTML here

  //   return {
  //     filename,
  //     content: fileContents,
  //   };
  // });
  // // By returning { props: posts }, the Blog component
  // // will receive `posts` as a prop at build time
  // return {
  //   props: {
  //     posts,
  //   },
  // };
}
