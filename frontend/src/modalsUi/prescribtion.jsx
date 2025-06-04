import pillImg from "../assets/pillImg.svg";
import Feeling from "../component/feeling";

function Prescription({ onSubmit }) {
  return (
    <div className=" space-y-6 flex flex-col items-center p-12">
      <Feeling
        image={<img src={pillImg} alt="" className="h-40" />}
        label={
          <div className="text-2xl">
            <div>Take two tablets of Amoxilin and one tablet of Amartem</div>
            <div>Ensure to take plenty of water and rest</div>
          </div>
        }
        radioOptions={["I'm good", "I'm not felling too well ", "I can't say"]}
      />

      <button
        onClick={onSubmit}
        type="submit"
        className="bg-[var(--color-tertiary)] text-white rounded-lg p-3 font-bold cursor-pointer w-full"
      >
        Done
      </button>
    </div>
  );
}
export default Prescription;
