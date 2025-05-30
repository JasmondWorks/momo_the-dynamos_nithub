import ChatImg from "../assets/ChatImg.svg";
import MedImg from "../assets/medicationImg.svg";
import FitImg from "../assets/fitnessImg.svg";
import Box from "../component/boxes";
import Navbar from "../component/navbar";
import momo from "../assets/Momo.svg";
import runImg from "../assets/RunImg.svg";
import { ArrowRightIcon } from "lucide-react";
function Welcome() {
  return (
    <div className="relative w-full h-screen flex flex-col ">
      <div className="absolute top-0 w-full h-1/3 bg-[#FF9DA7] " />

      <div className="p-5 z-100">
        <Navbar />
        <div className="px-7 pb-10   ">
          <h1 className="flex justify-center items-center gap-2 text-white text-3xl font-bold pt-5">
            Welcome to <img src={momo} alt="momo" />
          </h1>
        </div>

        <div className="xl:max-w-7xl md:max-w-5xl px-3 mx-auto">
          <div className="flex justify-center gap-4 z-125">
            <div className="w-full">
              <Box name="Chat" img={ChatImg} />
            </div>
            <div className="w-full">
              <Box name="Medication" img={MedImg} />
            </div>
            <div className="w-full">
              <Box name="Fitness" img={FitImg} />
            </div>
          </div>
          <div className=" mt-6 flex flex-col md:flex-row items-start gap-2 pt-8  shadow-md">
            <img
              src={runImg}
              alt="fit runner"
              className="w-full md:w-1/3 h-auto rounded-md float-none md:float-left"
            />
            <div className="text-wrap">
              🎮 Welcome to MOMO Rewards! 💊✨ Take charge of your health and
              earn coins along the way! ✅ Complete daily health tasks like
              taking medications, logging symptoms, or checking your vitals 💰
              Redeem your coins for exclusive perks — or top up anytime with
              quick coin purchases Stay healthy, stay rewarded! 🚀
              <button
                type="submit"
                className=" h-12 w-36 bg-[#8E44AD] rounded-md"
              >
                <span className="flex items-center justify-center gap-3 text-white">
                  Learn More {<ArrowRightIcon />}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Welcome;
