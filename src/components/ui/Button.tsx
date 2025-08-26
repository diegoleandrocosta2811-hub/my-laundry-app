import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"; // Simplified variants for this example
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  // Base styles - adjusted for rounded look like Loom
  const baseStyle =
    "inline-flex items-center justify-center font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 hover:cursor-pointer";

  // Size styles
  let sizeStyle = "";
  if (size === "sm") sizeStyle = "px-5 py-2 text-sm"; // Adjusted padding
  else if (size === "lg") sizeStyle = "px-8 py-3 text-lg"; // Adjusted padding
  else sizeStyle = "px-6 py-2.5 text-base"; // md default, Adjusted padding

  // Variant styles using default Tailwind colors (e.g., blue)
  let variantStyle = "";
  if (variant === "primary") {
    // Solid blue background, white text
    variantStyle =
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white hover:bg-blue-700 focus:ring-blue-500";
  } else if (variant === "secondary") {
    // Very light background (almost white), dark blue text, subtle border
    variantStyle =
      "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 focus:ring-blue-500";
    // Alternative: Pure white background with border
    // variantStyle = 'bg-white text-blue-700 border border-zinc-300 hover:bg-zinc-50 focus:ring-blue-500';
  }

  return (
    <button
      className={`${baseStyle} ${sizeStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
