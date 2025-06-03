function Button({color,name,widthClass, day ,current,maxday}){
    
    
  const backgroundColor =
    color === "#FFE5E8"
      ? "#FFE5E8"
      : color === "#8E44AD"
      ? "#8E44AD"
      : "#ccc"; // default gray

  const hoverColor =
    color === "#FFE5E8"
      ? "#FFB6C1"
      : color === "#8E44AD"
      ? "#7D3C98"
      : "#bbb";

  return (
    <button
      style={{ backgroundColor }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = backgroundColor)}
      className={`text-black font-medium px-6 py-2 rounded-xl shadow-md transition duration-300  ${widthClass}`}
    >
      {name}

     { day &&(<div>Day {current}/{maxday}</div>)}

    </button>
  );
}


        // return (
        //     <>
        //     <button
        //     className={`text-white font-semibold px-6 py-2 rounded-xl shadow-md transition duration-300 ${bgColor}`}
        //     >
        //     {name}
        //     </button>
        //     </>
       
    
export default Button


// const Button = ({ label, color }) => {
  
//   );
// };

// export default Button;
