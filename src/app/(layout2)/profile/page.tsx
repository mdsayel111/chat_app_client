import Title from "@/components/shared/title/Title";
import TitleWraper from "@/components/wraper/TitleWraper";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <TitleWraper>
          <Title value="Profile" />
        </TitleWraper>
      </div>
    </div>
  );
};

export default page;
