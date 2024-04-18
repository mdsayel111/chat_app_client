import React from "react";
import { RiMessage2Fill } from "react-icons/ri";

const ChatSection = () => {
  return (
    <div
      style={{
        background: `rgba(173, 176, 179, 0.192) url("https://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png")`,
      }}
      className="h-screen w-full"
    >
      <div className="hidden lg:flex flex-col space-y-3 h-screen justify-center items-center">
        <div className="bg-[#D2E4D8] p-4 rounded-full w-fit">
          <RiMessage2Fill className="text-3xl text-primary" />
        </div>
        <h3 className="text-[#4C535A]">Welcome to chat app</h3>
        <p className="text-gray-400">open a conversation to start chat...</p>
      </div>
    </div>
  );
};

export default ChatSection;
