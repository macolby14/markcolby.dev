import React from "react"; // eslint-disable-line no-use-before-define
import { Layout } from "../../components/ProjectLayout";
import { ProjectMetadata } from "../../types";

export const metadata: Omit<ProjectMetadata, "slug"> = {
  title: "Jogging Beats",
  description:
    "Jogging Beats is a web application I built to help create running playlists. It integrates with the Spotify API to allow a user to generate and edit playlists with songs all at the same tempo and add them to the user’s Spotify account.",
  tech: ["typescript", "react", "next", "styledComponents"],
  previewImg: { src: "/joggingbeats/home.jpg", alt: "Home Page Screenshot" },
};

const motivation = (
  <>
    <p>
      I love listening to music when I run. Listening to the right music really
      helps me hold a pace and run faster. If I just listen to a random
      playlist, the song’s tempos can change and negatively affect my running...
      I’ll be hitting my stride and a slower song will come on, messing up my
      pace.
    </p>
    <p>
      I built this site using the Spotify API to allow a user to create workout
      playlists where all the songs are at the same tempo. The user can generate
      a playlist, switch out songs they do not like, then login to their Spotify
      to save the playlist.
    </p>
  </>
);

const technicalChallenges = (
  <>
    <h5>Authentication and Authorization</h5>
    <p>
      I learned a lot about the different authorization flows and OAuth during
      this project. I used two different authorizations flows for this project:
      the Client Credentials Flow and the Implicit Grant flow. For the Client
      Credentials Flow, I used the Next API routes (serverless functions) to
      protect my app’s Spotify secret and obtain a Spotify API access token.
      This allows a user to utilize all the features of Jogging Beats, except
      saving playlists to their Spotify account, without logging in. The second
      flow, the Implicit Grant flow, allows the user to authorize Jogging Beats
      to save the playlists they generate to their personal Spotify account.
    </p>
    <h5>Styled Components and Custom CSS</h5>
    <p>
      This was the most vanilla CSS I had written for a project, and I learned a
      lot. I got a lot of practical experience with flexbox and grid, CSS
      variables, media queries, and vanilla styling. Styled components made it
      easy to apply styles to my React components; I particularly enjoyed the
      ability to target components’ styles without worrying about specificity.
    </p>
  </>
);

const summary = (
  <>
    <p>
      I have been using Jogging Beats on my runs and find it great for finding
      new music to run to. I plan on continue improving this site to make it
      more useful for my future runs.
    </p>
  </>
);

const links = {
  liveUrl: "https://jog.markcolby.dev",
  codeUrl: "https://github.com/macolby14/jogging-beats",
};

const images = [
  metadata.previewImg,
  { src: "/joggingbeats/confirmation.jpg", alt: "Confirmation Screenshot" },
  { src: "/joggingbeats/selection.jpg", alt: "Selection Screenshot" },
];

export default function JoggingBeats() {
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
