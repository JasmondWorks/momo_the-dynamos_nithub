import feelingImg from "../assets/feelingImg.svg";
import Feeling from "../component/feeling";

function CheckUp({ onSubmit }) {
  return (
    <div className=" space-y-6 flex flex-col items-center p-12">
      <h3 className="font-bold text-lg"> Day 1</h3>

      <Feeling
        image={<img src={feelingImg} alt="" className="h-40" />}
        label="How are You Feeling"
        radioOptions={["I'm good", "I'm not felling too well ", "I can't say"]}
      />

      <button
        onClick={onSubmit}
        type="submit"
        className="bg-[var(--color-tertiary)] text-white rounded-lg p-3 font-bold cursor-pointer w-full"
      >
        Submit
      </button>
    </div>
  );
}
export default CheckUp;
