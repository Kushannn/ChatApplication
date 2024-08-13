import React, { useState, useCallback, useEffect } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { loading, sendMessage } = useSendMessage();
  const { selectedConversation } = useConversation();
  const { socket } = useSocketContext();
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;

    try {
      await sendMessage(message);
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));

    return () => {
      socket.off("typing");
      socket.off("stop typing");
    };
  }, [socket]);

  const handleTyping = (e) => {
    setMessage(e.target.value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (e.target.value.length > 0) {
      socket.emit("typing", selectedConversation._id);
      setTypingTimeout(
        setTimeout(() => {
          socket.emit("stop typing", selectedConversation._id);
        }, 2000)
      ); // 2 seconds
    } else {
      socket.emit("stop typing", selectedConversation._id);
    }
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        {/* {console.log(selectedConversation)} */}
        {isTyping && <p>{selectedConversation.username} is typing...</p>}
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-500 text-white"
          placeholder="Send a message"
          value={message}
          onChange={handleTyping}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner mx-auto"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
