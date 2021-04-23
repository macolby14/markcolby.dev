import Head from "next/head";
import { About } from "../components/About";
import { Box } from "../components/Box";
import { Intro } from "../components/Intro";

export default function Home() {
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
        </Box>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}
