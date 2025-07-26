import { ButtonProps } from "@/interfaces";
import React, { PropsWithChildren } from "react";


const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  styles,
}) => {
  return (
    <button
      className={`cursor-pointer rounded-full font-medium py-2 px-4  ${styles} `}
    >
      {children}
    </button>
  );
};

export default Button;
