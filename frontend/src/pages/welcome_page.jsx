import ChatImg from "../assets/ChatImg.svg"
import MedImg from "../assets/medicationImg.svg"
import FitImg from "../assets/fitnessImg.svg"
import Box from "../component/boxes"

function Welcome(){

    return(
        <div>

            <div className="flex justify-between gap-4">
                <Box name ="Chat" img ={ChatImg}/>
                <Box name="Medication" img ={MedImg}/>
                <Box name="Fitness" img ={FitImg}/>
           </div>

        </div>
    )
}export default Welcome