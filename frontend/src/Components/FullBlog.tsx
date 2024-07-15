import { Avatar } from "./BlogCard";
import { Navbar } from "./Navbar";

interface BlogType {
    content: string;
    title: string;
    id: number;
    date:string;
    author: {
      name: string;
    };
  }

export const FullBlog=({blog}:{blog:BlogType})=>{
    return(
        <div >
            <Navbar></Navbar>
            <div className="flex justify-center ">
                <div className="grid grid-cols-12 px-10 pt-20 w-full max-w-screen-xl gap-10">
                    <div className="col-span-8">
                        <div className="text-3xl font-extrabold">{blog.title}</div>
                        <div className="text-slate-500 pt-2">{blog.date}</div>
                        <div className="pt-2">{blog.content}</div>
                    </div>
                  <div className="col-span-4 ">
                    <div className="text-lg text-slate-600">
                        Author
                    </div>
                    <div className="flex pt-3">
                    <div className="flex items-center ">
                        <Avatar name={(blog.author.name).toUpperCase() || "ANONYMOUS"}></Avatar>
                    </div>
                    <div className="px-3">
                            <div className="text-xl font-bold ">
                        {(blog.author.name).toUpperCase() || "ANONYMOUS"}
                            </div>
                    <div className="pt-2 text-slate-500 font-semibold">Master of mirth, purveyor of puns, and the funniest person in the kingdom</div>
                  
                        </div> 
                    </div>
                    
                </div>
            </div>
         </div>
         </div>
     
    )
}
