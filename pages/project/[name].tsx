import { useRouter } from "next/dist/client/router";

export default function Project() {
  const router = useRouter();
  const { name } = router.query;

  return <main>Project Page: {name}</main>;
}
