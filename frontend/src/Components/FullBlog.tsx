import { Avatar } from "./BlogCard";

interface BlogType {
    content: string;
    title: string;
    id: number;
    date: string;
    author: {
        name: string;
    };
}

export const FullBlog = ({ blog }: { blog: BlogType }) => {
    return (
        <div className="px-4 py-8 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-3xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">{blog.date}</div>
            <div className="pt-4">{blog.content}</div>

            <div className="flex items-center mt-8">
                <Avatar name={(blog.author.name || "ANONYMOUS").toUpperCase()}  />
                <div className="ml-3">
                    <div className="text-xl font-bold">
                        {(blog.author.name || "ANONYMOUS").toUpperCase()}
                    </div>
                    <div className="text-slate-500 font-semibold">
                        Master of mirth, purveyor of puns, and the funniest person in the kingdom
                    </div>
                </div>
            </div>
        </div>
    );
};
