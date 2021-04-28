export interface TechData {
  src: string;
  name: string;
}

export interface ProjectMetadata {
  slug: string;
  title: string;
  description: string;
  tech: TechData[];
  previewImg: { src: string; alt: string };
}
