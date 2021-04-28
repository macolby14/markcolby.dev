import { TECH } from "./constants";

export interface TechData {
  src: string;
  name: string;
}

export type TechNames = keyof typeof TECH;
export interface ProjectMetadata {
  slug: string;
  title: string;
  description: string;
  tech: TechNames[];
  previewImg: { src: string; alt: string };
}
