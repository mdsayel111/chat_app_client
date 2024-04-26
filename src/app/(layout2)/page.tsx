import AddIcon from "@/components/shared/add_icon/AddIcon";
import ConversationTab from "@/components/shared/conversation_tab/ConversationTab";
import SearchBar from "@/components/shared/search_bar/SearchBar";
import Title from "@/components/shared/title/Title";
import TitleWraper from "@/components/wraper/TitleWraper";
import axiosInstance from "@/lib/axios/instance/instance";

async function Home() {
  const data = await axiosInstance.get("/conversation", { cache: "no-store" });
  console.log(data);
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

export default Home;
