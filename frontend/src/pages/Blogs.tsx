import { BlogCard } from "../Components/BlogCard";
import { BlogCardSkeleton } from "../Components/BlogCardSkeleton";
import { Navbar } from "../Components/Navbar";
import { FetchBlogs } from "../hooks";

export const Blogs = () => {
    const { blogs, loading } = FetchBlogs();

    if (loading) {
        return (
            <div>
                <Navbar />
                <BlogCardSkeleton />
                <BlogCardSkeleton />
                <BlogCardSkeleton />
                <BlogCardSkeleton />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="flex justify-center">
                <div className="flex justify-center flex-col">
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <BlogCard
                                key={blog.id}
                                id={blog.id}
                                authorName={blog.author.name}
                                title={blog.title}
                                content={blog.content}
                                date={blog.date}
                            />
                        ))
                    ) : (
                        <div className="text-center  mt-10">No blogs available</div>
                    )}
                </div>
            </div>
        </div>
    );
};
