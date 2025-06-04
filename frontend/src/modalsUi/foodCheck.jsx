import { useState } from "react";
import eatingCheck from "../assets/eatenCheckImg.svg";
import Button from "../component/button";
import Feeling from "../component/feeling";

function FoodCheck({ onSubmit, onSubmit2 }) {
  const answers = ["Yes, I have", "No, I haven't"];
  const [answer, setAnswer] = useState(answers[0]);

  return (
    <div className=" space-y-6 flex flex-col items-center p-12">
      <Feeling
        image={<img src={eatingCheck} alt="" className="h-40" />}
        label="How you taken anything?"
      >
        {answers.map((option, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              value={option}
              onChange={(e) => setAnswer(e.target.value)}
              name="feeling"
              type="radio"
              className="w-5 h-5 accent-[var(--color-tertiary)]"
            />
            {option}
          </label>
        ))}
      </Feeling>

      <button
        onClick={answer === answers[0] ? onSubmit : onSubmit2}
        type="submit"
        className="bg-[var(--color-tertiary)] text-white rounded-lg p-3 font-bold cursor-pointer w-full"
      >
        Submit
      </button>
    </div>
  );
}
export default FoodCheck;
