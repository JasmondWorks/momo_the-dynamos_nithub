import momo from "../assets/Momo.svg"
import momoFrame from "../assets/momoFrame.svg"
import coin from "../assets/momoCoin.svg"

function Navbar(){
    return(
        <div className="flex justify-between items-center gap-">
             <img src={momo} alt="momo label" />

             <div className="flex justify-center gap-2 items-center text-white">
                <p>Patient</p>
                <p>
                  Doctors
                </p>
             </div>
            
            <div className="flex justify-end gap-2 items-center">
                <img src={coin} alt="momo coin" />
                <p className="text-black size-6">140</p>
                <img src= {momoFrame} alt="momo frame" />
            </div>

          
        </div>
    )
} export default Navbar