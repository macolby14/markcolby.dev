import React from "react"; // eslint-disable-line no-use-before-define
import { Layout } from "../../components/ProjectLayout";
import { ProjectMetadata } from "../../types";

export const metadata: Omit<ProjectMetadata, "slug"> = {
  title: "Operation On Track",
  description:
    "Operation On Track is a site that allows military service members to create and track checklists for key events in the military, such as moving or leaving active duty. I created this project with a team of three other veterans during April 2021 at a veterans Hackathon hosted by FallIn.",
  tech: "Typescript, React, MongoDB, Node.js (Serverless Functions)",
  previewImg: {
    src: "/operationontrack/trackers.jpg",
    alt: "Tracker Page Screenshot",
  },
};

const motivation = (
  <>
    <p>
      This project is a tailored resource created specifically for service
      members and veterans to help them automatically track the steps of key
      career events. Due to the existance of so many resources, key events, and
      references, it is easy for service members and veterans to be late for or
      miss key timelines for significant career events (separation, PCS
      (moving), etc.). By allowing users to create template checklists to
      interactively track their key events and share with others, we can ensure
      our service members and veterans don’t miss out.
    </p>
  </>
);

const technicalChallenges = (
  <>
    <h5>Serverless Functions and MongoDB</h5>
    <p>
      One of our team’s goals was to get a site live and working by the end of
      the Hackathon. We went with Next.js API routes (serverless functions) so
      we could create CRUD API routes without the need for hosting our own
      dedicated Node.js server. We hosted the whole Next.js app on Vercel and it
      was relatively easy getting our production site live. We used a Free
      Cluster with MongoDB Atlas, which our API routes hit for data persistence.
      Overall, this allowed us to have persistent data for the app without lots
      of configuration and without spending any money (used free tiers of Vercel
      and MongoDB Atlas).
    </p>
    <h5>Libraries – Next-Auth and Formik</h5>
    <p>
      With only a relatively short period of time to code, we were eager to use
      libraries that could add functionality to our site quickly. I used two
      popular libraries for the first time that I would use again: Next-Auth and
      Formik. The Next-Auth library allowed us to add OAuth social media login
      and authentication for our site without lots of code. After having done
      OAuth authentication flows without a library in the past, Next-Auth was
      perfect, allowing us to add social media authentication with ease. Formik
      made the form validation and error handling much easier, without being too
      opinionated.
    </p>
  </>
);

const summary = (
  <>
    <p>
      I had a great time working on this project, learning with others, and
      teaching other military service members and veterans. I learned a lot and
      am eager to use what I learned on future projects!
    </p>
  </>
);

const links = {
  liveUrl: "https://operation-on-track.vercel.app/",
  codeUrl: "https://github.com/macolby14/operation-on-track",
};

const images = [
  metadata.previewImg,
  { src: "/operationontrack/home.jpg", alt: "Home Screenshot" },
  { src: "/operationontrack/tasks.jpg", alt: "Selection Screenshot" },
];

export default function OperationOnTrack() {
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
