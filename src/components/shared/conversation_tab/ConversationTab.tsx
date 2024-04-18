import CustomAvatar from "@/components/shared/custom_avatar/CustomAvatar";

const ConversationTab = ({ name }: { name: string }) => {
  return (
    <div className="flex gap-4 items-center py-3 cursor-pointer">
      <CustomAvatar />
      <h3 className="text-lg font-semibold text-[#575E64]">{name}</h3>
    </div>
  );
};

export default ConversationTab;
