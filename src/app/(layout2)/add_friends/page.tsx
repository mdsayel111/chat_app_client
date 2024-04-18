import AddIcon from "@/components/shared/add_icon/AddIcon";
import ConversationTab from "@/components/shared/conversation_tab/ConversationTab";
import SearchBar from "@/components/shared/search_bar/SearchBar";
import Title from "@/components/shared/title/Title";
import TitleWraper from "@/components/wraper/TitleWraper";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <TitleWraper>
          <Title value="Add" />
        </TitleWraper>
        <SearchBar />
        <h3 className="mt-10">Add Friends</h3>
        <div className="flex justify-between items-center">
          <ConversationTab name="sayel" />
          <AddIcon />
        </div>
      </div>
    </div>
  );
};

export default page;
