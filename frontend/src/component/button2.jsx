import { Link } from "react-router-dom";

function Button({
  children,
  href = "",
  className,
  variant = "primary",
  onClick,
  disabled = false,
}) {
  const baseStyles = `font-bold rounded-lg border-0 ${
    !disabled ? "cursor-pointer" : "cursor-not-allowed"
  } transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-tertiary)]`;
  const variants = {
    text: baseStyles + ` text-[var(--color-tertiary)] p-2`,
    primary:
      baseStyles +
      ` p-3 bg-[var(--color-tertiary)] text-white hover:bg-transparent hover:ring-1 hover:ring-[var(--color-tertiary)] hover:text-[var(--color-tertiary)] focus-visible:bg-transparent focus-visible:text-[var(--color-tertiary)]
    `,
  };
  if (href)
    return (
      <Link className={`${variants[variant]} ${className}`} to={href}>
        {children}
      </Link>
    );
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
