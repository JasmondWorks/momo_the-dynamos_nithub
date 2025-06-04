<<<<<<< HEAD
import close from "../assets/cancel.svg"
function Feeling({image, label,radioOptions, handleCancel=[]}){
    return(
        <div className="  flex flex-col items-center space-y-3 text-black text-4xl font-bold">
            <img onClick={handleCancel} src={close} alt="cancel" className="absolute top-1 right-1 p-12" /> 
            {image}
            {label}
            <div className="flex gap-4 mt-2 p-6 ">

            {/* {radioOptions.map((option, index) => (
                <label key={index} className="flex items-center gap-1">
                <input type="radio" value={option} />
                {option}
            </label>
          ))} */}
        </div>
        </div>
    )
    
}export default Feeling
=======
function Feeling({ image, label, radioOptions = [], children }) {
  return (
    <div className="  flex flex-col items-center space-y-3 text-black">
      {image}
      <div className="text-2xl font-medium">{label}</div>
      <div className="flex gap-4 mt-2 p-6 ">
        {radioOptions &&
          radioOptions.map((option, index) => (
            <label key={index} className="flex items-center gap-2">
              <input
                name="feeling"
                type="radio"
                value={option}
                className="w-5 h-5 accent-[var(--color-tertiary)]"
              />
              {option}
            </label>
          ))}
        {!radioOptions.length && children}
      </div>
    </div>
  );
}
export default Feeling;
>>>>>>> origin/main
