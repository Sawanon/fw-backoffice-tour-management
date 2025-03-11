import React, { ReactNode } from "react";

const ButtonComp = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center bg-primay-button px-8 py-4 rounded-[10px] cursor-pointer text-2xl font-light text-white ${className ?? ''}`}
    >
      {children}
    </div>
  );
};

export default ButtonComp;
