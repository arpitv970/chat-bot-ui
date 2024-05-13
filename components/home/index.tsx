import { ChatPage } from "../chat";
import { SidebarMenu } from "../sidebar/sidebar-menu";

export const HomePage = () => {
  return (
    <div className="flex gap-5 bg-zinc-900 h-[100vh]">
      <SidebarMenu />
      <ChatPage />
    </div>
  );
};
