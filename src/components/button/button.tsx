import { ButtonProps } from "@/lib/types";
import { Loader2 } from "lucide-react";
import React from "react";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles =
      variant === "primary"
        ? "bg-white text-black hover:bg-gray-100 focus-visible:ring-white"
        : variant === "secondary"
        ? "bg-gray-800 text-white hover:bg-gray-700 focus-visible:ring-gray-800"
        : variant === "outline"
        ? "bg-transparent text-white border border-white hover:bg-white/10 focus-visible:ring-white"
        : "bg-transparent text-white hover:bg-white/10 focus-visible:ring-white"; // ghost as default

    const sizeStyles =
      size === "sm"
        ? "px-3 py-1.5 text-sm gap-1.5"
        : size === "lg"
        ? "px-6 py-3 text-lg gap-2.5"
        : "px-4 py-2 text-base gap-2";

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${
          className || ""
        }`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="animate-spin mr-2" aria-hidden="true" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
