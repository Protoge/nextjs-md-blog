import Link from "next/link";
import { getPostMetaData } from "@/lib/getPostMetadata";
import PostPreview from "./components/PostPreview";

export default function Home() {
  const postMetadata = getPostMetaData();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
}
