import { TechData } from "./types";

type TechName =
  | "docker"
  | "javascript"
  | "mocha"
  | "next"
  | "node"
  | "react"
  | "styledComponents"
  | "typescript";

export const TECH: Record<TechName, TechData> = {
  docker: {
    src: "/icons/docker.svg",
    name: "Docker",
  },
  javascript: {
    src: "",
    name: "JavaScript",
  },
  mocha: {
    src: "/icons/mocha.svg",
    name: "Mocha",
  },
  next: {
    src: "/icons/nextjs.svg",
    name: "Next.js",
  },
  node: {
    src: "/icons/nodejs.svg",
    name: "Node.js",
  },
  react: {
    src: "/icons/react.svg",
    name: "React",
  },
  styledComponents: {
    src: "/icons/styled-components.png",
    name: "styled components",
  },
  typescript: {
    src: "/icons/typescript.svg",
    name: "TypeScript",
  },
};
