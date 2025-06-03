import feelingImg from "../assets/feelingImg.svg";
import Button from "../component/button";
import Feeling from "../component/feeling";

function CheckUp(img) {
  return (
    <div className=" space-y-6 flex flex-col items-center p-12">
      <p> Day 1(dynamic day tracking)</p>

      <Feeling
        image={<img src={feelingImg} alt="" />}
        label="How are You Feeling"
        radioOptions={["I'm good", "I'm not felling too well ", "I can't say"]}
      />

      <Button name="Submit" color="#8E44AD" widthClass="w-64" />
    </div>
  );
}
export default CheckUp;
