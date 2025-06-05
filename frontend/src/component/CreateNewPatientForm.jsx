import { useState } from "react";
import Button from "./button2";

function CreateNewPatientForm({ onCreateNewPatient }) {
  const [name, setName] = useState("");
  const [illness, setIllness] = useState("");
  const [id, setId] = useState("");

  const genders = ["men", "women"];
  const randomGender = genders[Math.floor(Math.random() * genders.length)];

  function onSubmit(e) {
    e.preventDefault();

    const newPatient = {
      name,
      illness,
      id: id ? id : crypto.randomUUID().slice(0, 8),
      avatar: `https://randomuser.me/api/portraits/${randomGender}/${
        Math.floor(Math.random() * 50) + 1
      }.jpg`,
    };

    console.log(newPatient);
    onCreateNewPatient(newPatient);
    setName("");
    setIllness("");
    setId("");
  }

  return (
    <div className="p-10 sm:p-12 md:p-16">
      <h2 className="font-semibold text-2xl text-center mb-8">
        Create New Patient
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-neutral-500 rounded-lg p-2 px-3"
          placeholder="Enter Patient Name"
          required
        />
        <input
          value={illness}
          onChange={(e) => setIllness(e.target.value)}
          className="border border-neutral-500 rounded-lg p-2 px-3"
          placeholder="Enter Patient Condition / Illness Name"
          required
        />
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border border-neutral-500 rounded-lg p-2 px-3"
          placeholder="Enter  Patient Id (if existing patient)"
        />
        <Button className="!mt-10">Create</Button>
      </form>
    </div>
  );
}

export default CreateNewPatientForm;
