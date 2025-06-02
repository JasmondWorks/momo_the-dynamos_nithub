import cancel from "../assets/cancel.svg"
function Feeling({image, label,radioOptions=[]}){
    return(
        <div className="  flex flex-col items-center space-y-3 text-black text-4xl font-bold">
            <img src={cancel} alt="cancel" className="absolute top-1 right-1 p-12" /> 
            {image}
            {label}
            <div className="flex gap-4 mt-2 p-6 ">

            {radioOptions.map((option, index) => (
                <label key={index} className="flex items-center gap-1">
                <input type="radio" value={option} />
                {option}
            </label>
          ))}
        </div>
        </div>
    )
    
}export default Feeling