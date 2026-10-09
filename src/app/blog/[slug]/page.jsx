import BlogDetail from "@/components/Blog/BlogDetail";
import { blogs } from "@/components/Blog/blogData";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return { title: "Blog not found" };
  }

  return {
    title: blog.title,
    description: blog.subtitle,
  };
}

export default function BlogDetailPage({ params }) {
  return <BlogDetail slug={params.slug} />;
}
