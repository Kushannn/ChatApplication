import React from "react";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-lg bg-gray-400 bg-gradient-to-r from-[#171E37] to-[#702A4E]">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
