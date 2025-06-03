import ChatImg from "../assets/ChatImg.svg";
import MedImg from "../assets/medicationImg.svg";
import FitImg from "../assets/fitnessImg.svg";
import Box from "../component/boxes";
import Navbar from "../component/navbar";
import momo from "../assets/Momo.svg";
import runImg from "../assets/RunImg.svg";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div className="relative w-full h-screen flex flex-col ">
      <div className="absolute top-0 w-full h-[60%] xs:h-[62%] md:h-[65%] lg:h-[70%] bg-[#FF9DA7]" />

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
        </div>

        <div className="z-125 overflow-x-auto no-scrollbar flex gap-4 px-5 sm:max-w-4xl lg:max-w-6xl sm:mx-auto">
          <div className="w-full min-w-[250px]">
            <Box name="Chat" img={ChatImg} href="/chat-welcome" />
          </div>
          <div className="w-full min-w-[250px]">
            <Box name="Medication" img={MedImg} href="/medications" />
          </div>
          <div className="w-full min-w-[250px]">
            <Box name="Fitness" img={FitImg} href="/fitness" />
          </div>
        </div>
      </div>
      <div className="px-5 pb-12 sm:max-w-4xl lg:max-w-6xl sm:mx-auto">
        <div className=" mt-15 flex flex-col md:flex-row gap-6  border-1 border-[var(--color-tertiary)] p-8 py-12 rounded-xl px-5">
          <img
            src={runImg}
            alt="fit runner"
            className="w-full md:w-1/3 h-full rounded-md md:rounded-none md:rounded-tl-md md:rounded-bl-md"
          />
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-medium">
              🎮 Welcome to MOMO Rewards! 💊✨
            </h3>
            <p className="text-sm">
              Take charge of your health and earn coins along the way! ✅
              Complete daily health tasks like taking medications, logging
              symptoms, or checking your vitals 💰 Redeem your coins for
              exclusive perks — or top up anytime with quick coin purchases Stay
              healthy, stay rewarded! 🚀
            </p>
            <Link
              to="/store"
              className=" h-12 w-36 bg-[#8E44AD] rounded-lg flex items-center justify-center gap-2 text-white"
            >
              Learn More <ArrowRightIcon size={15} strokeWidth={3} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
