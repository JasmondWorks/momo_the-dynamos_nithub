import { useParams } from "react-router-dom";
import { useAppData } from "../contexts/appDataContext";
import Navbar from "../component/navbar";
import Button from "../component/button2";
import { useState } from "react";
import CreateNewPatientForm from "../component/CreateNewPatientForm";
import Modal from "../component/modal";
import CreateNewMedicationForm from "../component/CreateNewMedicationForm";

function PatientDetails() {
  const { patientId } = useParams();
  const { patients } = useAppData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  const patient = patients?.find((patient) => patient.id === patientId);

  return (
    <>
      <Navbar />
      <section>
        {/* About */}
        <div className="relative bg-[var(--color-primary)]">
          <div className="max-w-5xl mx-auto px-5 md:pt-10">
            <div className="flex flex-col md:flex-row items-center gap-10 p-5 md:px-10 bg-white rounded-lg translate-y-[50%] shadow-md">
              <img
                src={patient.avatar}
                alt={patient.avatar}
                className="rounded-full h-36"
              />
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h3 className="text-2xl font-semibold">
                  {patient.name}: #{patient.id}
                </h3>
                <p>{patient.illness}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 pt-40 bg-[var(--color-background)]">
        <div className="max-w-5xl mx-auto px-5 text-center space-y-5">
          <h2 className="text-3xl font-medium">Medications</h2>
          <p className="text-lg">
            {patient.name} currently has no ongoing medications!
          </p>
          <Button onClick={handleOpenModal}>Create medication</Button>
        </div>
      </section>

      <Modal onClose={handleCloseModal} isOpen={isModalOpen}>
        <CreateNewMedicationForm />
      </Modal>
    </>
  );
}

export default PatientDetails;
