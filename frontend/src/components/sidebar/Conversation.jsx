import React, { useState } from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { socket } = useSocketContext();
  const [newMessage, setNewMessage] = useState(false);

  // useEffect(() => {
  //   socket.on("newMessage", (conversationId, message) => {
  //     if (conversationId === conversation._id) {
  //       setNewMessage(true);
  //     }
  //   });
  // }, [socket, conversation]);

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-purple-800 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-purple-800" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        {/* {newMessage && (
          <div className="bg-red-500 rounded-full w-4 h-4 text-white text-center">
            *
          </div>
        )} */}
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePicture} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullname}</p>
            {/* <span className="text-xl">🤍</span> */}
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider divider-secondary my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
