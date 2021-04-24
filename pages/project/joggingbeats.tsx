import { ProjectMetadata } from "../../global";

export const metadata: Omit<ProjectMetadata, "slug"> = {
  title: "Jogging Beats",
  description:
    "A site that uses the Spotify API to allow users to quickly generate playlists to a certain running beats per minute.",
};

export default function JoggingBeats() {
  return (
    <main>
      <h2>Jogging Beats Page</h2>
    </main>
  );
}
