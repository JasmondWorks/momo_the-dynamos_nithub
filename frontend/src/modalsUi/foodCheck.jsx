import eatingCheck from "../assets/eatenCheckImg.svg"
import Button from "../component/button"
import Feeling from "../component/feeling"

function FoodCheck(){
    return(
        <div className= " space-y-6 flex flex-col items-center p-12">
            <Feeling
                image = {<img src={eatingCheck} alt ="an img"/>}
                label = "Have You eaten something"
                radioOptions = {["Yes I Have ", "No I haven't"]}
            
            />
            <Button name="Submit" color="#8E44AD" widthClass ="w-64" />



            
        </div>
    )
}
export default FoodCheck