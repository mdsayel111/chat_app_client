import React, { ReactNode } from "react";

const TitleWraper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-between items-center py-8">{children}</div>
  );
};

export default TitleWraper;
