import { Link } from "react-router-dom"

type BlogCardProps={
    authorName:string;
    title:string;
    content:string;
    date:string;
    id:number;
}

export const BlogCard=({authorName,title,content,date,id}:BlogCardProps)=>{
    return(
        <Link to={`/${id}`}><div className="flex flex-col mt-8 border-b border-slate-200 pb-4 p-4 cursor-pointer">
        <div className="flex  items-center">
            <span className="flex "><Avatar name={authorName}></Avatar></span>
            <span className="font-thin mx-2">
                    {authorName.charAt(0).toUpperCase() + authorName.slice(1)}</span>   
         <div className="size-1 rounded-full bg-black mt-1 mr-1 flex"></div>
            <span className="text-slate-400 mx-1">{date}</span>
        </div>
        <div className="font-semibold pt-2">
            <p>{title}</p>
        </div>
        <div className="tetx-md font-thin max-w-lg"><p>{content.slice(0,150)+"..."}</p></div>
    </div></Link>
    )
}
export function Avatar({name}:{name:string}){
    return(<div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
    </div>)
}