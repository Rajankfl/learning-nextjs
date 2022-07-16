import { useRouter } from "next/router";
export default function BlogPost() {
  const router = useRouter();
  const routeName = router.query.blogName;
  return <>You're reading {routeName} blog</>;
}
