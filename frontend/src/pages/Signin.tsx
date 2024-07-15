import { Auth } from "../Components/Auth";
import { Quote } from "../Components/Quote";

export const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen overflow-hidden">
        <div className=" m-5">
            
      <Auth type="signin" />

      </div>
      
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};
