import React from "react"; // eslint-disable-line no-use-before-define
import { Layout } from "../../components/ProjectLayout";
import { ProjectMetadata } from "../../types";

export const metadata: Omit<ProjectMetadata, "slug"> = {
  title: "Colonist.io",
  description:
    "Colonist.io is an online board game that is similar to Settlers of Catan, with over 700,000 monthly active users in 2020. I contributed two popular features and fixed three critical bugs.",
  tech: "Typescript, Git, Docker, Express.js, Mocha.js",
  previewImg: { src: "/colonist/uk_map.jpg", alt: "Game Map Screenshot" },
};

const motivation = (
  <>
    <p>
      After playing on colonist.io with friends for several months at the start
      of the COVID-19 pandemic, I started contributing in order to add features
      I wanted and to fix bugs that I encountered. Features I contributed to the
      production code included re-working the lobby display so you can see key
      information about each game before joining a room, creating a new map, and
      fixing the rematch button.
    </p>
  </>
);

const technicalChallenges = (
  <>
    <h5>Git and Collaboration</h5>
    <p>
      This was the first real project I was working on with others, so I learned
      a lot about Git, collaboration, and code reviews. I used Github to assign
      myself issues, to submit pull requests, and to receive feedback. Although
      I had used Git in the passed for personal projects, things like branches,
      rebasing, and merging made more sense after having practical experience.
    </p>
    <h5>Docker</h5>
    <p>
      I learned about Docker images, containers, volumes, and the different
      types of files and commands to use Docker. Using Docker made it easy to
      develop across different environments and spin up all the different
      containers that were required to run the site in local development.
    </p>
    <h5>Testing</h5>
    <p>
      This was my first real experience with automated testing; tests were
      created with Mocha.js. I created tests for all of the pull request I
      submitted and utilized existing tests to ensure I wasn’t breaking any of
      the existing code base.
    </p>
  </>
);

const summary = (
  <>
    <p>
      I learned a lot working with the professional colonist.io team (they are a
      small business). If anyone is getting into coding, the Colonist.io team is
      often looking for talented fan contributors or new employees. The site is
      also a great for spending time if you’re a fan of Settlers of Catan!
    </p>
  </>
);

const links = {
  liveUrl: "https://colonist.io",
  codeUrl: "",
};

const images = [
  metadata.previewImg,
  {
    src: "/colonist/room_name_from_setting.gif",
    alt: "Create Room Name from Setting Screenshot",
  },
  {
    src: "/colonist/previously_kicked.jpg",
    alt: "Previously Kicked Screenshot",
  },
];

export default function Colonist() {
  return (
    <Layout
      metadata={metadata}
      technicalChallenges={technicalChallenges}
      motivation={motivation}
      summary={summary}
      links={links}
      images={images}
    />
  );
}
