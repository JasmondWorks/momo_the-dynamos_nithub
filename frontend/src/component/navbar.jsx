import momo from "../assets/Momo.svg";
import momoFrame from "../assets/momoFrame.svg";
import coin from "../assets/momoCoin.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("y position,", window.scrollY);
      if (window.scrollY > 30) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleCloseSidebar() {
    setShowSidebar(false);
  }
  return (
    <div
      className={`flex justify-between items-center px-5 py-2 fixed left-0 right-0 transition-all duration-300 ${
        hasScrolled ? "bg-white shadow-md text-neutral-500" : "text-white"
      }`}
    >
      <img src={momo} alt="momo label" />

      <div className="hidden md:flex justify-center gap-5 items-center">
        <Link
          to="#"
          className={`font-bold border-b-[3px] ${
            hasScrolled ? "!border-b-0 text-[var(--color-tertiary)]" : ""
          } p-1`}
        >
          Patients
        </Link>
        <Link
          to="#"
          className="opacity-70 border-b-[3px] border-transparent p-1"
          aria-disabled
        >
          Doctors
        </Link>
      </div>

      <div className="flex gap-3 items-center">
        <div className="justify-end gap-2 items-center flex">
          <Link to="/store-page">
            <img src={coin} alt="momo coin" className="h-10" />
          </Link>
          <p className="text-black size-6">140</p>
          <img src={momoFrame} className="h-12 md:h-14" alt="momo frame" />
        </div>
        <button
          onClick={() => setShowSidebar((cur) => !cur)}
          className="space-y-1 cursor-pointer md:hidden"
        >
          <div
            className={`w-[20px] h-[3px] rounded-xs ${
              hasScrolled ? "bg-neutral-700" : "bg-white"
            }`}
          ></div>
          <div
            className={`w-[20px] h-[3px] rounded-xs ${
              hasScrolled ? "bg-neutral-700" : "bg-white"
            }`}
          ></div>
          <div
            className={`w-[20px] h-[3px] rounded-xs ${
              hasScrolled ? "bg-neutral-700" : "bg-white"
            }`}
          ></div>
        </button>
      </div>

      <SideBar showSidebar={showSidebar} onCloseSidebar={handleCloseSidebar} />
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/35"
          onClick={handleCloseSidebar}
        ></div>
      )}
    </div>
  );
}

function SideBar({ showSidebar, onCloseSidebar }) {
  return (
    <div
      className={`fixed top-0 bottom-0 bg-white w-[300px] right-0 p-3 transition-all duration-300 z-[99] text-black ${
        showSidebar ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <div className="flex justify-end">
        <button
          className="bg-neutral-200 rounded-full p-2"
          onClick={onCloseSidebar}
        >
          <X strokeWidth={4} size={20} />
        </button>
      </div>
      <div className="flex flex-col gap-5 leading-0 mt-10">
        <Link to="#" className="font-bold border-b-[3px] border-white p-1">
          Patients
        </Link>
        <Link
          to="#"
          className="opacity-70 border-b-[3px] border-transparent p-1"
          aria-disabled
        >
          Doctors
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
