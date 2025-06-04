import medImg from "../assets/medImg.svg";
import Button from "../component/button";
import medButton from "../assets/medButton.svg";
import momoFace from "../assets/momoFace.svg";
import momoCoin from "../assets/momoCoin.svg";
import BorderLayout from "../component/borderLayout";
import { useEffect, useState } from "react";
import Modal from "../component/modal";
import CheckUp from "../modalsUi/checkUp";
import FoodCheck from "../modalsUi/foodCheck";
import Suggestion from "../modalsUi/suggestion";
import Prescription from "../modalsUi/prescribtion";
import Congrats from "../modalsUi/congrats";
import NewMedication from "../component/createNewMedication";
import goBackIcon from "../assets/goBackIcon.svg";

import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const mockMedications = [
  {
    id: 1,
    title: "Headache",
    currentDay: 2,
    totalDays: 5,
  },
  {
    id: 2,
    title: "Typhoid",
    currentDay: 1,
    totalDays: 3,
  },
  {
    id: 3,
    title: "Headache",
    currentDay: 3,
    totalDays: 3,
  },
  {
    id: 4,
    title: "Cholera",
    currentDay: 0,
    totalDays: 8,
  },
  {
    id: 5,
    title: "Diabetes",
    currentDay: 3,
    totalDays: 8,
  },
  {
    id: 6,
    title: "The Herps",
    currentDay: 4,
    totalDays: 8,
  },
  {
    id: 7,
    title: "Gono gono",
    currentDay: 5,
    totalDays: 8,
  },
  {
    id: 8,
    title: "Sweetie",
    currentDay: 6,
    totalDays: 8,
  },
  {
    id: 9,
    title: "Craw craw",
    currentDay: 7,
    totalDays: 8,
  },
];

function Medication() {
  const allModals = [
    {
      key: "feeling",
      component: <CheckUp onSubmit={() => setActiveModal("eating")} />,
      onSubmitKey: "eating",
    },
    {
      key: "eating",
      component: (
        <FoodCheck
          onSubmit={() => setActiveModal("prescription")}
          onSubmit2={() => setActiveModal("suggestion")}
        />
      ),
      onSubmitKey: "suggestion",
    },
    {
      key: "suggestion",
      component: <Suggestion onSubmit={() => setActiveModal("prescription")} />,
      onSubmitKey: "prescription",
    },
    {
      key: "prescription",
      component: <Prescription onSubmit={() => setActiveModal("congrats")} />,
      onSubmitKey: "congrats",
    },
    { key: "congrats", component: <Congrats />, onSubmitKey: null },
    {
      key: "new-medication",
      component: <NewMedication />,
      onSubmitKey: null,
    },
  ];
  const [activeModal, setActiveModal] = useState(null);

  function handleCloseModal() {
    setActiveModal(null);
  }

  return (
    <BorderLayout className="relative">
      <div className="grid grid-rows-[auto_1fr] h-full">
        <div className="relative flex flex-row items-center justify-center bg-gradient-to-r from-[#ff808d] to-[#ffe5e8] from-50% shadow-2xs h-auto px-4 sm:px-10 py-6 rounded-t-lg">
          <Link to="/" className="left-3 absolute bg-white p-1 rounded-full">
            <ChevronLeft color="black" />
          </Link>
          <p className="text-black text-3xl sm:text-6xl text-left max-w-[60%] sm:max-w-none font-semibold">
            Medications
          </p>
          <img
            src={medImg}
            alt="Medication"
            className="w-24 sm:w-40 h-auto object-contain absolute right-10"
          />
        </div>
        <div className="grid grid-rows-[auto_1fr] overflow-auto">
          <div className="flex justify-center items-center p-8 relative">
            <img src={momoFace} alt="momoFrame" className="h-24" />
            <div className="flex gap-2 absolute right-5 items-center">
              <img src={momoCoin} alt="momocoin " className=" h-8" />
              <p className="text-xs font-bold">140</p>
            </div>
          </div>
          <div className="px-5 pb-5 gap-y-5 max-w-2xl mx-auto flex flex-col w-full">
            {mockMedications.map((medication) => (
              <div
                className="cursor-pointer"
                onClick={() => setActiveModal(allModals[0].key)}
              >
                <MedicationItem key={medication.id} {...medication} />
              </div>
            ))}
          </div>

          <button
            className="absolute bottom-5 right-5 cursor-pointer"
            onClick={() => setActiveModal("new-medication")}
          >
            <img src={medButton} alt="add icon" className="h-20" />
          </button>
        </div>
      </div>
      {allModals.map((modal) => (
        <Modal
          onClose={handleCloseModal}
          key={modal.key}
          isOpen={activeModal === modal.key}
        >
          {modal.component}
        </Modal>
      ))}
      <Modal
        onClose={handleCloseModal}
        key="new-medication"
        isOpen={activeModal === "new-medication"}
      >
        <NewMedication />
      </Modal>
    </BorderLayout>
  );
}

function MedicationItem({ title, currentDay, totalDays }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(Math.trunc((currentDay / totalDays) * 100));
  }, [currentDay, totalDays]);

  return (
    <div className="relative bg-[#ffe5e8]  flex items-center justify-center rounded-lg">
      <p className="z-1 p-3 font-semibold">{title}</p>
      <div
        style={{ width: `${progress}%` }}
        className={`bg-[var(--color-primary)] h-full  absolute left-0 rounded-l-lg transition-all duration-1000 ease-out ${
          progress === 100 ? "rounded-r-lg" : ""
        }`}
      ></div>
      <div className="absolute right-8 font-medium text-[#666]">
        Day {currentDay}/{totalDays}
      </div>
    </div>
  );
}
export default Medication;
