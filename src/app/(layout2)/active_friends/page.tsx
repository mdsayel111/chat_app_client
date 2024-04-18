import ConversationTab from "@/components/shared/conversation_tab/ConversationTab";
import SearchBar from "@/components/shared/search_bar/SearchBar";
import Title from "@/components/shared/title/Title";
import TitleWraper from "@/components/wraper/TitleWraper";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleWraper>
        <Title value="Active" />
      </TitleWraper>
      <SearchBar />
      <h3 className="mt-10">Active Friends</h3>
      <ConversationTab name="sayel" />
    </div>
  );
};

export default page;
