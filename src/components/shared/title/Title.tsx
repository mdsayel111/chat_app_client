import React from "react";

const Title = ({ value }: { value: string }) => {
  return (
    <div className="">
      <h2 className="text-[#495057] text-2xl">{value}</h2>
    </div>
  );
};

export default Title;
