import { Plus } from "lucide-react";
import { useState } from "react";

function NewMedication({ onSubmit }) {
  const [drugs, setDrugs] = useState([
    {
      id: 1,
      drugName: "",
      frequency: "",
      duration: "",
      condition: "",
    },
  ]);
  const [activeDrugTab, setActiveDrugTab] = useState(0);

  function handleAddDrugTab() {
    setDrugs((drugs) => [
      ...drugs,
      {
        id: drugs.at(-1) + 1,
        drugName: "",
        frequency: "",
        duration: "",
        condition: "",
      },
    ]);
  }

  function frequencyFormatter(freq) {
    // const formatted = freq
  }

  return (
    <div className="space-y-10 px-15 py-8">
      <div className="flex flex-col items-center gap-y-2">
        <h2 className="text-xl font-semibold">Create New Medication</h2>
        <div className="flex gap-4">
          <div className="flex gap-2">
            {drugs.map((_, index) => (
              <button
                className={`p-2 px-3 text-xs font-medium rounded-2xl border border-[#FFE5E8] leading-0 ${
                  activeDrugTab === index ? "bg-[#FFE5E8]" : ""
                } `}
              >
                Drug {index + 1}
              </button>
            ))}
          </div>
          <button
            disabled={drugs.length === 3}
            className={`rounded-full p-1.5 border border-[var(--color-tertiary)] cursor-pointer ${
              drugs.length === 3 ? "!cursor-not-allowed opacity-50" : ""
            }`}
            onClick={handleAddDrugTab}
          >
            <Plus color="var(--color-tertiary)" strokeWidth={3} size={15} />
          </button>
        </div>
      </div>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter Drug Name"
          className="w-full p-2 border border-neutral-500 rounded-md min-w-[350px]"
          required
        />
        <select
          name=""
          id=""
          className="w-full p-2 border border-neutral-500 rounded-md min-w-[350px]"
          required
        >
          <option value="">Select frequency of use</option>
          <option value="1-1">Morning and Evening</option>
          <option value="1-1=1">Morning, Afternoon and Evening</option>
          <option value="1">Once a day</option>
        </select>
        <select
          name=""
          id=""
          className="w-full p-2 border border-neutral-500 rounded-md min-w-[350px]"
          required
        >
          <option value="">Select duration</option>
          <option value="1-1">3 days</option>
          <option value="1-1=1">A week</option>
          <option value="1">2 weeks</option>
        </select>
        <input
          type="text"
          placeholder="Enter Condition/Illness Name"
          className="w-full p-2 border border-neutral-500 rounded-md min-w-[350px]"
          required
        />
        <button
          onClick={onSubmit}
          type="submit"
          className="bg-[var(--color-tertiary)] text-white rounded-md p-3 font-bold cursor-pointer w-full"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default NewMedication;
