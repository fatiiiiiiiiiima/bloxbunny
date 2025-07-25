import Contentful, { createClient } from "contentful";

const CONTENTFUL_ACCESS_TOKEN = "x2XImbRKWAxmoNKjd4bjHoGkrfSKv6lRkqVuaFasiuE";
const CONTENTFUL_SPACE_ID = "60668njlknik";

export const getBlogs = async () => {
  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });
  const items = await client.getEntries({
    content_type: "gameBlogs",
  });

  const blogs = items.items.map((blog, index) => {
    return {
      ...blog.fields,
      id: blog.sys.id,
      title: blog.fields.title,
      subtitle: blog.fields.subtitle,
      thumbnail: blog.fields.thumbnail,
      description: blog.fields.description,
      content: blog.fields.content,
      dateAdded: blog.sys.createdAt,
      dateUpdated: blog.sys.updatedAt,
      slug: blog.fields.slug,
    };
  });

  return blogs;
};

export const getBlogById = async (blogId) => {
  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });
  const blog = await client.getEntry(blogId);

  return {
    ...blog.fields,
    id: blog.sys.id,
    title: blog.fields.title,
    subtitle: blog.fields.subtitle,
    thumbnail: blog.fields.thumbnail,
    description: blog.fields.description,
    content: blog.fields.content,
    dateAdded: blog.sys.createdAt,
    dateUpdated: blog.sys.updatedAt,
    slug: blog.fields.slug,
  };
};
