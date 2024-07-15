import { Navbar } from "./Navbar";

export const FullBlogSkeleton = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 pt-20 w-full max-w-screen-xl animate-pulse md:gap-9 gap-5">
          <div className="col-span-8">
            <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
            <div className="h-60 bg-gray-200 rounded mb-4"></div>
          </div>
          <div className="col-span-4">
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="flex items-center mb-4">
              <div className="h-12 w-12  bg-gray-300 rounded-full"></div>
              <div className="ml-4">
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </div>
            </div>
            <div className="h-16 bg-gray-200 rounded mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
