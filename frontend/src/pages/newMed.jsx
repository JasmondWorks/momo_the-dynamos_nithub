import { useState } from "react";
import Button from "../component/button";
import { Plus } from "lucide-react";
import DynamicButton from "../component/dynamicButton";
import { X}from "lucide-react"

function NewMedication() {
    const[cancel,setCanel] =useState(false)
  const [buttons, setButtons] = useState([]);
  const [notificationTimes, setNotificationTimes] = useState([]);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [timeInput, setTimeInput] = useState("");
  const [notificationPref, setNotificationPref] = useState(""); // only one selected


    // const handleCancel =() =>{
    //     setCanel(!cancel)
    //     console.log(cancel)
    // }
  const handleAddDrug = () => {
    const newIndex = buttons.length + 1;
    const newButton = {
      id: newIndex,
      label: `Drug ${newIndex}`,
      onClick: () => alert(`Drug ${newIndex} Added`),
    };
    setButtons([...buttons, newButton]);
  };

  const handleAddTime = () => {
    if (timeInput && !notificationTimes.includes(timeInput)) {
      setNotificationTimes([...notificationTimes, timeInput]);
      setTimeInput("");
      setShowTimePicker(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Selected Times:", notificationTimes);
    console.log("Preferred Notification:", notificationPref);

    notificationTimes.forEach((time) => {
      if (notificationPref) {
        console.log(`${notificationPref.toUpperCase()} scheduled at ${time}`);
      }
    });

    alert("Medication submitted with notification schedule.");
  };

  return (<>

  
        <div className="p-6 flex flex-col gap-4 border">
        {/* <div onClick={handleCancel}> */}
            < X/> 
        {/* </div> */}


        
      <p className="text-center font-bold text-2xl">Create New Medication</p>

      <div className="p-4 space-y-4 flex-row">
        <button
          onClick={handleAddDrug}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          <Plus size={20} />
          Add Drugs
        </button>

        <div className="flex flex-wrap gap-3">
          {buttons.map((btn) => (
            <DynamicButton key={btn.id} label={btn.label} onClick={btn.onClick} />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Enter drug name"
          className="border w-[80%] rounded-md h-12 text-2xl p-3"
        />

        <div className="border w-[80%] rounded-md h-12 text-2xl p-3">
          <select name="Frequency" defaultValue="" className="w-[100%] outline-none" >
            <option value="" disabled hidden>
              Select Frequency
            </option>
            <option value="morning-night">Morning and Night</option>
            <option value="full-day">Morning, Afternoon, and Night</option>
          </select>
        </div>

        <div className="border w-[80%] rounded-md h-12 text-2xl p-3">
          <select name="Duration" defaultValue="" className="w-[100%] outline-none">
            <option value="" disabled hidden>
              Select Duration
            </option>
            <option value="3">3 Days</option>
            <option value="5">5 Days</option>
            <option value="7">1 Week</option>
          </select>
        </div>
{/*  */}

        {/* Notification Schedule */}
        <div>
          <label className="font-semibold">Notification Schedule</label>
          <div className="flex flex-wrap gap-3 my-2">
            {notificationTimes.map((time, index) => (
              <DynamicButton
                key={index}
                label={time}
                onClick={() => alert(`Reminder set for ${time}`)}
              />
            ))}
            <button
              type="button"
              onClick={() => setShowTimePicker(true)}
              className="text-purple-600 border border-purple-400 rounded-full w-10 h-10 flex justify-center items-center text-lg"
            >
              +
            </button>
          </div>
          {showTimePicker && (
            <div className="flex items-center gap-2 mt-2">
              <input
                type="time"
                value={timeInput}
                onChange={(e) => setTimeInput(e.target.value)}
                className="border bg-purple-600 text-white p-2 rounded font-semibold"
              />
              <button
                type="button"
                onClick={handleAddTime}
                className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
              >
                Add Time
              </button>
            </div>
          )}
        </div>

        {/* Notification Preference */}
        <div>
          <p className="font-semibold mb-1">Preferred Notification Method</p>
          <div className="flex gap-6 mt-2">
            {["sms", "email", "alert"].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="notification"
                  value={type}
                  checked={notificationPref === type}
                  onChange={() => setNotificationPref(type)}
                  className="accent-purple-600"
                />
                <span className="capitalize text-lg">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <Button name="Continue" widthClass="w-128" color="#8E44AD" />
      </form>
    </div>


  </>
    
  );
}

export default NewMedication;
