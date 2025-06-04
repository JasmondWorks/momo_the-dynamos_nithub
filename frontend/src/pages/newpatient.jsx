import Button from "../component/button";
import {X} from 'lucide-react'

function NewPatient({setClick}){
    return(
        <div className="absolute w-full h-full bg-black/50 flex items-center justify-center z-50">
            <div className="text-center bg-white h-[80%] w-1/2 flex items-center justify-center rounded-xl flex-col gap-3 relative z-100">

            <p className="font-bold text-3xl">
                Create New Patient
            </p>
            <form  className="p-6 flex flex-col gap-4 items-center justify-center w-full">
            < X className=" m-2 absolute right-1 top-1" onClick={() => setClick(false)}/>
                <div className="w-[80%]"> 
                    <input type="text" 
                    placeholder="Enter Patient Name"
                    className="border w-full rounded-md h-12 text-lg p-3"
                    //onChange={e.target}
                    />
                </div> 
        
                <div className="w-[80%]"> 
                    <input type="text" 
                    placeholder="Enter Patient Condition/illness"
                    className="border w-[100%] rounded-md h-12 text-lg p-3"/>
                </div> 

                <div className="w-[80%]"> 
                    <input type="text" 
                    placeholder="Enter Patient ID"
                    className="border w-[100%] rounded-md h-12 text-lg p-3"/>

                </div> 
                <Button name="Submit" widthClass="w-128" color="#8E44AD" className="flex items-center" />

            </form>
            </div>
        </div>

    );
}export default NewPatient