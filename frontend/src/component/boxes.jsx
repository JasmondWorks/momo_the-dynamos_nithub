
import { ChevronRight } from "lucide-react"

function Box({img,name}){


    return(
        <div>
            <div >
                <img src= {img} alt=" AN IMAGE" />
                <div className="flex justify-between gap- border-1 border-[#8E44AD] h-max p-2 text-[#8E44AD] text-lg">{name} {<ChevronRight/>}</div> 


            </div>


        </div>
    )

}
export default Box