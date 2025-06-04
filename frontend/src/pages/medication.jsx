import medImg from "../assets/medImg.svg"
import Button from "../component/button"
import medButton from "../assets/medButton.svg"
import momoFace from "../assets/momoFace.svg"
import momoCoin from "../assets/momoCoin.svg"
import CreateNewMed from "../modalsUi/createNewMed"
import { useState } from "react"
import { Link } from "react-router-dom"
function Medication(){

    const[cancel,setCanel] =useState(false)

    const handleCancel =() =>{
        setCanel(!cancel)
        console.log(cancel)
    }
    
    return(

        <div className="" >
            { cancel &&  <CreateNewMed/>  }
            
            <div className="relative flex flex-row items-center justify-center bg-[#FF808D] shadow-2xs h-auto w-[90%] rounded-t-xl m-4 sm:m-20 px-4 sm:px-10 py-6">
            <p className="text-black text-3xl sm:text-6xl text-left max-w-[60%] sm:max-w-none">
                Medication
            </p>
            <img
                src={medImg}
                alt="Medication"
                className="w-24 sm:w-40 h-auto object-contain absolute right-10"
            />
            </div>
            <div className="flex justify-center items-center p-12">
                <img src={momoFace} alt="momoFrame" />
                <img src={momoCoin} alt="momocoin " className="absolute right-5 p-10" />

            </div>
            <div className="">
                <div className="flex flex-col items-center justify-center ">
                    
                    <Button name = "Malaria" color="#FFE5E8" widthClass="w-128" day="1"/>

                </div>

                <img onClick={handleCancel} src={medButton} alt="med Button" className="absolute bottom-2 right-2 pr-12 pb-12" 
               />
            </div>
        </div>
    )
}export default Medication