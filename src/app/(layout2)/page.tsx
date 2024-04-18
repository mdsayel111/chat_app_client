import ConversationTab from "@/components/shared/conversation_tab/ConversationTab";
import AddIcon from "@/components/shared/add_icon/AddIcon";
import SearchBar from "@/components/shared/search_bar/SearchBar";
import Title from "@/components/shared/title/Title";
import TitleWraper from "@/components/wraper/TitleWraper";

export default function Home() {
  return (
    <main>
      <TitleWraper>
        <Title value="Chats" />
        <AddIcon />
      </TitleWraper>
      <SearchBar />
      <h3 className="mt-10">Conversation</h3>
      <ConversationTab name="sayel" />
      
    </main>
  );
}
