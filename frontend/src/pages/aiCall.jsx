import momoFrame from "../assets/momoFrame.svg"
import endCall from "../assets/endCall.svg"
import mic from "../assets/mic.svg"
import speaker from "../assets/speaker.svg"

function AiCall(){
    return(
        <div className="flex flex-col space-y-12 items-center ">

        <img src={momoFrame} alt="" className="w-30 h-30 rounded-full bg-[#EEE7EF] outline-none"/>
        <p>Momo Ai Chat</p>
        <div>time Counter..</div>
        <div className=" flex justify-between gap-10 items-center m-50">
            <div>
            <img src={speaker} alt="" />
            Speaker
            </div>
            <div>
            <img src={endCall} alt="" />
            EndCall
            </div>
            <div>
            <img src={mic} alt="" />
             Mute
            </div>
        </div>

        </div>

    )
}
export default AiCall