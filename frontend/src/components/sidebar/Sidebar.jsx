import React from "react";
import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-400 p-4 flex flex-col w-[27vw]">
      {/* <SearchInput /> */}
      <div className="divider divider-secondary px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
