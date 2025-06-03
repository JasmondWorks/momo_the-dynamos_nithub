// Input.jsx or Input.js
import React from "react";

const Input = React.forwardRef(function Input(
  {
    type = "text",
    placeholder = "Placeholder here...",
    icon,
    iconPosition = "right",
    className,
    ...rest
  },
  ref
) {
  return (
    <div className="relative">
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`flex items-center border border-neutral-400 rounded-lg p-2 px-3 w-full ${className} ${
          icon ? (iconPosition === "right" ? "pr-8" : "pl-8") : ""
        }`}
        {...rest}
      />
      {icon && (
        <img
          src={icon}
          alt="icon"
          className={`absolute bottom-[50%] translate-y-[50%] ${
            iconPosition === "right" ? "right-3" : "left-3"
          } h-4`}
        />
      )}
    </div>
  );
});

export default Input;
