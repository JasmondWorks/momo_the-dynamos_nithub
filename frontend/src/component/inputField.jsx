function Input({ placeholder, rightIcon, leftIcon, button, value, onChange }) {
  return (
    <>
      <div className="relative w-full border-1 border-neutral-200 grid grid-cols-[1fr_auto] items-center rounded-md bg-white">
        <div className="flex items-center gap-2 outline-none decoration-0">
          {leftIcon && <div className="absolute left-4 top-5">{leftIcon}</div>}
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder={placeholder}
            className="w-full focus:outline-none focus:ring-0 p-4 pl-3"
          />
        </div>
        <div className="flex items-center gap-4 pr-3">
          {button && button}
          Me
          {rightIcon && <div className=""> {rightIcon}</div>}
        </div>
      </div>
    </>
  );
}
export default Input;
