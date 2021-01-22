import * as React from "react";

export interface InputProps {
  name: string;
  type: string;
  onChange?: () => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = (props) => {
  return <input {...props} />;
};

export { Input };
