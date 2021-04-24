import { ProjectMetadata } from "../../global";

export const metadata: Omit<ProjectMetadata, "slug"> = {
  title: "Colonist.io",
  description: "Colonist Site",
};

export default function Colonist() {
  return (
    <main>
      <h2>Colonist Writeup</h2>
    </main>
  );
}
