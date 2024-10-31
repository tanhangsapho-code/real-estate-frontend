import React, { forwardRef } from "react";
import {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
} from "@/lib/types";

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// export const CardHeader: React.FC<CardHeaderProps> = ({
//   className = "",
//   children,
//   ...props
// }) => {
//   return (
//     <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
//       {children}
//     </div>
//   );
// };

// export const CardTitle: React.FC<CardTitleProps> = ({
//   className = "",
//   children,
//   ...props
// }) => {
//   return (
//     <h3
//       className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
//       {...props}
//     >
//       {children}
//     </h3>
//   );
// };

// export const CardDescription: React.FC<CardDescriptionProps> = ({
//   className = "",
//   children,
//   ...props
// }) => {
//   return (
//     <p className={`text-sm text-gray-500 ${className}`} {...props}>
//       {children}
//     </p>
//   );
// };

export const CardContent: React.FC<CardContentProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

// export const CardFooter: React.FC<CardFooterProps> = ({
//   className = "",
//   children,
//   ...props
// }) => {
//   return (
//     <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
//       {children}
//     </div>
//   );
// };
