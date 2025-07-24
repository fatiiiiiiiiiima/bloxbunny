// pages/blog.js
import Navbar from "../components/navbar/navbar";
import BloxFooter from "../components/bloxfooter/bloxfooter";
import Image from "next/image";
import "./globals.css";
import { getBlogs } from "../../hooks/useGetBlogs";
import Link from "next/link";

const Blog = async () => {
  const posts = await getBlogs(); // Fetching all blogs

  console.log("posts:", posts);
  return (
    <div>
      <Navbar />
      <section className="mainbody">
        <h1>Our Blog</h1>
        <p>Read the recent blog posts about BloxBunny</p>
      </section>

      <section className="blogs">
        <div className="blogs-grid">
          {posts.map((post) => (
            <Link href={`/blogpage/${post.id}`} key={post.id}>
              <div className="blogscol">
                <Image
                  src={`https:${post.thumbnail.fields.file.url}`}
                  alt={post.title}
                  width={348}
                  height={300}
                />
                <h1>{post.title}</h1>
                <h3>
                  by <span>{post.subtitle}</span>
                </h3>
                <p>{post.description}</p>
                <div className="designbutton">
                  <button>Read More &gt;</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <BloxFooter />
      </section>
    </div>
  );
};

export default Blog;
