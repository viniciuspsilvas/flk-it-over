import React from "react";
import { Text } from "./text";

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <>
      {message && (
        <div>
          <Text
            status="danger"
            category="label"
            className="text-sm relative left-2"
          >
            {message}
          </Text>
        </div>
      )}
    </>
  );
};

ErrorMessage.displayName = "ErrorMessage";

export default ErrorMessage;
