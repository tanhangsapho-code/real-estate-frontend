import React from "react";
import { Loader2 } from "lucide-react";
import { InputProps } from "@/lib/types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      isLoading,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "w-full rounded-sm border border-gray-300 bg-white px-2 py-1 text-xs placeholder-gray-400 focus:ring-0 focus:border-blue-500 disabled:opacity-50"; // Reduced padding and font size
    const errorStyles = error
      ? "border-red-500 focus:border-red-500"
      : "focus:border-blue-500";

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-xs font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`
              ${baseStyles}
              ${errorStyles}
              ${leftIcon ? "pl-8" : ""} // Adjust padding for left icon
              ${rightIcon || isLoading ? "pr-8" : ""} 
              ${className || ""}
            `}
            {...props}
          />
          {(rightIcon || isLoading) && (
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
              {isLoading ? <Loader2 className="animate-spin" /> : rightIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p className={`text-xs ${error ? "text-red-500" : "text-gray-500"}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
