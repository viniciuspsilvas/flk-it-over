import React, { InputHTMLAttributes } from "react";
import { Text } from "@/components/global/text";
import ErrorMessage from "@/components/global/error-message";
import { VariantProps, cva } from "class-variance-authority";
import Input from "./input";
import { cn } from "@/lib/utils";

export const variants = cva("", {
  variants: {
    status: {
      primary: "accent-primary-500 ",
      secondary: "accent-secondary-500 dark:accent-secondary-200",
      tertiary: "accent-tertiary-500 dark:accent-tertiary-200",
      success: "accent-success",
      info: "accent-info",
      warning: "accent-warning",
      danger: "accent-danger",
      basic: "accent-gray",
      none: ""
    }
  },
  defaultVariants: {
    status: "primary"
  }
});

export interface CheckBoxProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof variants> {
  label?: string;
  errorMessage?: string;
}
const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ className, status, errorMessage, label, ...props }, ref) => {
    return (
      <div className={className}>
        <span className={`inline-flex items-center mr-4 mt-2`}>
          <Input
            type="checkbox"
            status={status}
            className={cn("form-checkbox h-5 w-5", variants({ status }))}
            ref={ref}
            {...props}
          />
          {label && (
            <Text
              category="label"
              htmlFor={props.id}
              status={status}
              className={`inline-flex items-center ml-2`}
            >
              {label}
            </Text>
          )}
        </span>
        <ErrorMessage message={errorMessage} />
      </div>
    );
  }
);

CheckBox.displayName = "CheckBox";

export default CheckBox;
