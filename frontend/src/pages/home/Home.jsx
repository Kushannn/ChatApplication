import React from "react";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Header from "../../components/header/Header.jsx";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <div className="flex w-screen sm:h-[450px] md:h-[91vh] rounded-lg overflow-hidden shadow-lg bg-gray-400 bg-gradient-to-r from-[#171E37] to-[#702A4E]">
          <Sidebar />
          <MessageContainer />
        </div>
      </div>
    </>
  );
};

export default Home;
