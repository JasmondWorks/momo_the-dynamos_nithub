import pillImg from "../assets/pillImg.svg"
import Button from "../component/button"
import Feeling from "../component/feeling"

function Prescription(){

    return(
        <div className= " space-y-6 flex flex-col items-center p-12">
            <Feeling 
                image ={<img src={pillImg} alt=""/>}
                label ="{dynmaic prescription of drugs by ai}"
            />
            <Button  name="Done" color="#8E44AD" widthClass ="w-64"/>
        </div>

    )
}
export default Prescription