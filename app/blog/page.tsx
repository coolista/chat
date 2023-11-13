import { posts } from "@/data/posts";
import Card from "../components/Card/card";

export default function Blog() {
  return (
    <main className="container blog-page my-10 mx-auto grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 min-h-screen">
        {
        posts.map((item) => <Card key={item.id} item={item} />)
      }
    </main>
  )
}
