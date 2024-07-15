import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
export const Navbar=()=>{
    
return(
    <div className="flex flex-col sm:flex-row sm:space-x-8 items-center justify-between py-4 px-10 bg-white shadow-md transition duration-300 ease-in-out ${isOpen ? '' : 'hidden md:flex ">
    <Link to={"/blogs"}> <div className="flex items-center justify-center">
                <img 
                  src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png" 
                  alt="Medium Image" 
                  className="w-full max-w-40 "
                />
              </div></Link>
        <div className="flex items-center">
       <Link to={"/publish"}> <button type="button" className="mr-8 mt-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New</button></Link>
        <div className=""><Avatar name="Mukul"></Avatar> </div>
        </div>
        
    </div>
)
}