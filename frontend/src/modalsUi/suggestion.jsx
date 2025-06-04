import { useEffect, useState } from "react";
import foodImg from "../assets/foodImg.svg";
import Feeling from "../component/feeling";
// a modal suggesting to the user to have a meal
function Suggestion({ onSubmit }) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(
      () => setCountdown((c) => (countdown > 1 ? c - 1 : c)),
      1000
    );
    const timeout = setTimeout(onSubmit, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [onSubmit, countdown]);

  return (
    <div className="space-y-6 flex flex-col items-center">
      <Feeling
        image={
          <img src={foodImg} alt="" className="w-full h-40 object-cover" />
        }
        label={<span className="p-15">Eat something to continue</span>}
      />
      <div className="absolute text-neutral-600 bottom-3">
        Closing in: {countdown}s
      </div>
    </div>
  );
}
export default Suggestion;
