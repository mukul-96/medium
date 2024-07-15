
export const BlogCardSkeleton = () => {
    return (
      <div className="mt-9 ">
        <div className=" flex justify-center max-w-screen-2xl w-full min-w-md">
        <div className="flex flex-col border-b  border-slate-200 pb-4 p-4 cursor-pointer animate-pulse">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="ml-2">
            <div className="w-40 md:w-80 h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="ml-2 w-16 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="font-semibold pt-2">
          <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
        </div>
        <div className="text-md font-thin pt-2">
          <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-5/6 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
        </div>
      </div>
    );
  };
  