import { Link } from "react-router-dom";

// function Button({
//   children,
//   href = "",
//   className,
//   variant = "primary",
//   onClick,
//   disabled = false,
// }) {
//   const baseStyles = `font-bold rounded-lg border-0 ${
//     !disabled ? "cursor-pointer" : "cursor-not-allowed"
//   } transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tertiary)]`;
//   const variants = {
//     text: baseStyles + ` text-[var(--color-tertiary)] p-2`,
//     primary:
//       baseStyles +
//       ` p-3 bg-[var(--color-tertiary)] text-white hover:bg-transparent hover:ring-1 hover:ring-[var(--color-tertiary)] hover:text-[var(--color-tertiary)] focus-visible:bg-transparent focus-visible:text-[var(--color-tertiary)]
//     `,
//   };
//   if (href)
//     return (
//       <Link className={`${variants[variant]} ${className}`} to={href}>
//         {children}
//       </Link>
//     );
//   return (
//     <button
//       disabled={disabled}
//       onClick={onClick}
//       className={`${variants[variant]} ${className}`}
//     >
//       {children}

function Button({ color, name, widthClass, day, current, maxday }) {
  const backgroundColor =
    color === "#FFE5E8" ? "#FFE5E8" : color === "#8E44AD" ? "#8E44AD" : "#ccc"; // default gray

  const hoverColor =
    color === "#FFE5E8" ? "#FFB6C1" : color === "#8E44AD" ? "#7D3C98" : "#bbb";

  return (
    <button
      style={{ backgroundColor }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = backgroundColor)
      }
      className={`text-black font-medium px-6 py-2 rounded-xl shadow-md transition duration-300  ${widthClass}`}
    >
      {name}

      {day && (
        <div>
          Day {current}/{maxday}
        </div>
      )}
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

export default Button;

// const Button = ({ label, color }) => {

//   );
// };

// export default Button;
