import momoFrame from "../assets/momoFrame.svg";
import goBackIcon from "../assets/goBackIcon.svg";
import endCall from "../assets/endCall.svg";
import mic from "../assets/mic.svg";
import speaker from "../assets/speaker.svg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AiCall() {
  const [count, setCount] = useState(0);
  const hour = String(Math.floor(count / 3600) % 24).padStart(2, "0");
  const min = String(Math.floor(count / 60) % 60).padStart(2, "0");
  const sec = String(Math.floor(count % 60)).padStart(2, "0");

  const { chatId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => setCount((sec) => sec + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  function handleEndCall() {
    navigate(`/chats/${chatId}`);
  }

  return (
    <div className="p-6 lg:p-12 h-[100vh] max-w-5xl mx-auto text-sm">
      <div className="border border-neutral-400 rounded-xl h-full grid grid-rows-[auto_1fr] gap-5 lg:gap-0 relative">
        <header className="flex justify-between items-center p-5 px-8 ">
          <img src={goBackIcon} alt="back icon" className="h-4" />
        </header>
        <div className="py-15 md:p-10 flex flex-col gap-32 justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full p-3 border-1 border-[var(--color-tertiary)] bg-[var(--color-gradient)]">
              <img
                src={momoFrame}
                className="h-26 aspect-square"
                alt="momo logo"
              />
            </div>
            <p className="text-[var(--color-tertiary)] text-lg font-medium leading-4">
              Momo AI Chat
            </p>
            <p className="">
              {hour > 0 && `${hour}:`}
              {min}:{sec}
            </p>
          </div>
          <div className=" flex justify-center gap-10 md:gap-20 items-center text-xs font-medium">
            <button className="flex flex-col cursor-pointer items-center gap-1">
              <img src={speaker} alt="" className="h-10 aspect-square" />
              Speaker
            </button>
            <button
              onClick={handleEndCall}
              className="flex flex-col cursor-pointer items-center gap-1"
            >
              <img src={endCall} alt="" className="h-10 aspect-square" />
              End call
            </button>
            <button className="flex flex-col cursor-pointer items-center gap-1">
              <img src={mic} alt="" className="h-10 aspect-square" />
              Mute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AiCall;
