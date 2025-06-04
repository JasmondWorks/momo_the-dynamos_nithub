import Button from "../component/button";
import {X} from 'lucide-react'

function NewPatient(){
    return(
        <div className="text-center bg-[#FFE5E8] flex items-center justify-center flex-col gap-3">

        {/* < X className=" fixed  right-1 border-2 m-2"/> */}
        <p className="font-bold text-3xl">
            Create New Patient
        </p>
        <form  className="p-6 flex flex-col gap-4 items-center justify-center w-[50%]">
            <div className="w-[80%]"> 
                <input type="text" 
                placeholder="Enter Patient Name"
                className="border w-full rounded-md h-12 text-2xl p-3"
                //onChange={e.target}
                />
            </div> 
    
            <div className="w-[80%]"> 
                <input type="text" 
                placeholder="Enter Patient Condition/illness"
                className="border w-[100%] rounded-md h-12 text-2xl p-3"/>
            </div> 

            <div className="w-[80%]"> 
                <input type="text" 
                placeholder="Enter Patient ID"
                className="border w-[100%] rounded-md h-12 text-2xl p-3"/>

            </div> 
            <Button name="Submit" widthClass="w-128" color="#8E44AD" className="flex items-center" />

        </form>
        </div>

    );
}export default NewPatient