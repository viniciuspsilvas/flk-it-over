"use client";

import { HTMLAttributes } from "react";
import { Text } from "./text";

export interface NoDataFoundProps extends HTMLAttributes<HTMLLabelElement> {
  text?: string;
}

export const NoDataFound = ({
  text = "No data found"
}: NoDataFoundProps): JSX.Element => {
  return (
    <div className="w-full text-center p-4">
      <Text category="legend">{text}</Text>
    </div>
  );
};
