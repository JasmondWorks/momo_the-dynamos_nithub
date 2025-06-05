import { Link } from "react-router-dom";
import MomoLogo from "/src/assets/momoLogo.svg";

function NotFound() {
  return (
    <div className="h-dvh text-center grid grid-rows-[auto_1fr]">
      {/* Navbar */}
      <div className="shadow px-4 py-2 ">
        <Link to="/" className="flex gap-3 items-center w-fit">
          <img src={MomoLogo} alt="logo" className="h-10" />
          <h1 className="font-bold">Momo</h1>
        </Link>
      </div>
      <div className="space-y-5 h-full flex flex-col justify-center p-5">
        <h3 className="text-2xl">This page could not be found!</h3>
        <div>
          <Link
            to="/"
            className="p-4 py-3 inline-block bg-[#8e44ad] font-bold text-white rounded-md"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
