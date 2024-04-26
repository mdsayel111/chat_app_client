import Navbar from "@/components/root_layout/navbar/Navbar";
import ChatSection from "@/components/shared/chat_section/ChatSection";
import React, { ReactNode } from "react";
import Drawar from "@/components/shared/drawar/Drawar";
import PrivateRoute from "@/HOC/private_route/PrivateRoute";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <PrivateRoute>
      <div className="w-[90%] mx-auto lg:w-[15%] h-[50%]">{children}</div>
      <div className=" hidden lg:block w-[75%]">
        <ChatSection />
      </div>
      <Drawar className={"lg:hidden"} />
    </PrivateRoute>
  );
};

export default layout;
