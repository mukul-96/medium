import { Auth } from "../Components/Auth"
import { Quote } from "../Components/Quote"

export const Signup=()=>
{
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div className="m-5">
                <Auth type="signup"></Auth>
            </div>
            <div className="hidden lg:block">
            <Quote></Quote>

            </div>
        </div>
    )
}