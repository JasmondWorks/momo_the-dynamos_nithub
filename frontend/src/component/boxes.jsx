import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Box({ img, name, href = "#" }) {
  return (
    <div>
      <div>
        <img
          src={img}
          alt=" AN IMAGE"
          className="w-full rounded-tl-xl rounded-tr-xl"
        />
        <Link
          to={href}
          className="bg-white flex items-center font-medium justify-between gap- border-1 border-[#8E44AD] border-t-transparent hover:bg-[#8E44AD] hover:text-white h-max p-3 text-[#8E44AD] text-sm rounded-bl-xl rounded-br-xl transition-all duration-300"
        >
          {name} {<ChevronRight />}
        </Link>
      </div>
    </div>
  );
}
export default Box;
