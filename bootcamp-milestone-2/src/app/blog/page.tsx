import BlogPreview from "@/components/BlogPreview/blogPreview";
import blogs from "../blogData";

export default function Blog() {
  return (
    <main>
      <h1 className="page-title">Blogs</h1>
      {blogs.map((blog) => (
        <BlogPreview {...blog} />
      ))}
    </main>
  );
}
