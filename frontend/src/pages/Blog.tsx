import { FetchBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { FullBlog } from "../Components/FullBlog";
import { FullBlogSkeleton } from "../Components/FullBlogSkeleton";

export const Blog = () => {
  const { id } = useParams();
  const { blog, loading } = FetchBlog({ id: id || "" });

  if (!id) {
    return <div>Invalid blog ID</div>;
  }

  if (loading) {
    return (
      <div>
        <FullBlogSkeleton></FullBlogSkeleton>
      </div>
    );
  }

  return (
    <div>
      {blog ? <FullBlog blog={blog} /> : <div>Blog not found</div>}
    </div>
  );
};

  