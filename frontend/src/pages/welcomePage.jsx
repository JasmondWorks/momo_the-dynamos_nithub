import ChatImg from "../assets/ChatImg.svg";
import MedImg from "../assets/medicationImg.svg";
import FitImg from "../assets/fitnessImg.svg";
import Box from "../component/boxes";
import Navbar from "../component/navbar";
import momo from "../assets/Momo.svg";
import runImg from "../assets/RunImg.svg";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import Button from "../component/button2";
import { useAppData } from "../contexts/appDataContext";
import PatientsList from "../component/PatientsList";
import Modal from "../component/modal";
import CreateNewPatientForm from "../component/CreateNewPatientForm";
import { useState } from "react";

function Welcome() {
  const { user } = useAuth();
  const { patients, addPatient } = useAppData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCreateNewPatient(newPatient) {
    addPatient(newPatient);
    setIsModalOpen(false);
  }
  return (
    <div>
      <div className="bg-[var(--color-primary)]">
        <Navbar />
        {/* Hero */}
        <div className="max-w-5xl mx-auto">
          <div
            className={`pt-24 md:pt-28 ${
              user === "Patient" || !user ? "" : "py-20"
            }`}
          >
            <div className="flex justify-center">
              <div className="px-5  text-white text-center max-w-lg md:max-w-2xl mx-auto space-y-2">
                <h1 className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-white text-4xl md:text-5xl font-bold pt-5">
                  Welcome to
                  <img className="h-8 md:h-10" src={momo} alt="momo" />
                </h1>
                <p className="text-sm md:text-base">
                  Your Go-to medical assistant
                </p>
                {user === "Doctor" && (
                  <Button
                    onClick={handleOpenModal}
                    className="mt-10 font-medium px-6"
                  >
                    Create New Patient
                  </Button>
                )}
              </div>
            </div>
          </div>
          {(user === "Patient" || !user) && (
            <div className="overflow-x-auto no-scrollbar flex gap-4 px-5 sm:mx-auto translate-y-[50%] -mt-10">
              <div className="w-full min-w-[250px]">
                <Box name="Chat" img={ChatImg} href="/chat-welcome" />
              </div>
              <div className="w-full min-w-[250px]">
                <Box name="Medication" img={MedImg} href="/medication" />
              </div>
              <div className="w-full min-w-[250px]">
                <Box name="Fitness" img={FitImg} href="/workout-page" />
              </div>
            </div>
          )}
        </div>
      </div>
      <section
        className={`py-12 ${
          user === "Patient" || !user ? "pt-24 md:pt-30" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto px-5">
          {user === "Doctor" && (
            <div className="">
              <h2 className="text-2xl mb-6 text-center font-medium">
                Patient List
              </h2>
              <PatientsList patients={patients} />
              {!patients.length && (
                <h3 className="text-lg text-center font-medium">
                  You currently have no patients!{" "}
                </h3>
              )}
            </div>
          )}

          {(user === "Patient" || !user) && (
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
                  exclusive perks — or top up anytime with quick coin purchases
                  Stay healthy, stay rewarded! 🚀
                </p>
                <Link
                  to="/store-page"
                  className=" h-12 w-36 bg-[#8E44AD] rounded-lg flex items-center justify-center gap-2 text-white"
                >
                  Learn More <ArrowRightIcon size={15} strokeWidth={3} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Modal onClose={handleCloseModal} isOpen={isModalOpen}>
        <CreateNewPatientForm onCreateNewPatient={handleCreateNewPatient} />
      </Modal>
    </div>
  );
}
export default Welcome;
