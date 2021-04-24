import { ProjectMetadata } from "../../global";

export const metadata: Omit<ProjectMetadata, "slug"> = {
  title: "Jogging Beats",
  description:
    "A site that uses the Spotify API to allows users to quickly and easily generate workout playlists with songs to a certain tempo (beats per minute). Created to help me create running playlists.",
  tech: "Typescript, React, Next.js, Styled Components",
};

export default function JoggingBeats() {
  return (
    <main>
      <h2>Jogging Beats Page</h2>
    </main>
  );
}
