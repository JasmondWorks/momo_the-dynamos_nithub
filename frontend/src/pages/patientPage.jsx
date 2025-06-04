import ChatImg from "../assets/ChatImg.svg";
import MedImg from "../assets/medicationImg.svg";
import FitImg from "../assets/fitnessImg.svg";
import Box from "../component/boxes";
import Navbar from "../component/navbar";
import momo from "../assets/Momo.svg";
import runImg from "../assets/RunImg.svg";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../component/button";
import PatientLog from "../component/patientLog";
import Patient1 from "../assets/patient1.svg"
import { useState } from "react";
import NewPatient from "./newpatient";
function PatientPage(){
  const[click,setClick] = useState(false)

  const handleClick = () => {
    console.log(click)
    setClick(true)
  }
    return(

        <>
      {click&&(<NewPatient setClick={setClick} />)}
        <div className="relative w-full h-screen flex flex-col z-10">
      <div className="absolute top-0 w-full h-[60%] xs:h-[62%] md:h-[65%] lg:h-[70%] bg-[#FF9DA7] " />


      <div className="z-100">
        <Navbar />

        <div className="px-7 pb-10 text-white text-center max-w-lg md:max-w-2xl mx-auto space-y-3 mt-28 mb-8 sm:mt-32 sm:mb-14">
          <h1 className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-white text-3xl sm:text-4xl md:text-5xl font-bold pt-5">
            Welcome to{" "}
            <img className="h-7 sm:h-8 md:h-10" src={momo} alt="momo" />
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            voluptatum sequi tempora?
          </p>
          <Button color='#8E44AD' widthClass='w-36' name="Create New Patient" className="border-2 border-e-black mt-6" onClick={handleClick} />
        </div>
            <p className="text-center font-bold m-4">Patient List</p>
        <div className="z-125 overflow-x-auto no-scrollbar flex gap-4 px-5 sm:max-w-4xl lg:max-w-6xl sm:mx-auto">
            
          <div className="w-full min-w-[250px] grid grid-cols-2 gap-5">
            <PatientLog 
            image ={<img src={Patient1}/>}
            name="Wellen"
            illness="Malaria"
            id ='666554'
            />
            <PatientLog 
            image ={<img src={Patient1}/>}
            name="Wellen"
            illness="Malaria"
            id ='666554'
            />
            <PatientLog 
            image ={<img src={Patient1}/>}
            name="Wellen"
            illness="Malaria"
            id ='666554'
            />
            <PatientLog 
            image ={<img src={Patient1}/>}
            name="Wellen"
            illness="Malaria"
            id ='666554'
            />
            <PatientLog 
            image ={<img src={Patient1}/>}
            name="Wellen"
            illness="Malaria"
            id ='666554'
            />
            <PatientLog 
            image ={<img src={Patient1}/>}
            name="Wellen"
            illness="Malaria"
            id ='666554'
            />
          </div>
          {/* <div className="w-full min-w-[250px]">
           
          </div>
          <div className="w-full min-w-[250px]">
            
          </div> */}
        </div>
      </div>
      {/* <div className="px-5 pb-12 sm:max-w-4xl lg:max-w-6xl sm:mx-auto">
        <div className=" mt-15 flex flex-col md:flex-row gap-6  border-1 border-[var(--color-tertiary)] p-8 py-12 rounded-xl px-5">
          <img
            src={runImg}
            alt="fit runner"
            className="w-full md:w-1/3 h-full rounded-md md:rounded-none md:rounded-tl-md md:rounded-bl-md"
          />
          <div className="flex flex-col gap-6">
            
            
          </div> */}
        {/* </div> */}
      {/* </div> */}
        </div>
        </>
  );
    
}export default PatientPage