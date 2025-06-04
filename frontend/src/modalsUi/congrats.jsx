import Feeling from "../component/feeling";
import congrats from "../assets/congrats.svg";
import momoCoin from "../assets/momoCoin.svg";

function Congrats() {
  return (
    <>
      <Feeling
        image={<img src={congrats} alt="" />}
        label={
          <span className="flex items-center gap-2">
            You have earned 140
            <img src={momoCoin} alt="coin" className="w-5 h-5 inline size-8 " />
          </span>
        }
      />
    </>
  );
}
export default Congrats;
