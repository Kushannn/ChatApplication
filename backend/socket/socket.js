import { Server } from "socket.io";
import http from "http";
import express from "express";
import User from "../models/userModel.js";
import Message from "../models/messageModel.js";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

// const getSenderUsername = async (senderId) => {
//   try {
//     const user = await User.findById(senderId);
//     if (!user) {
//       console.error(`No user found with ID: ${senderId}`);
//       return null;
//     }
//     console.log(user.username);
//     return user.username;
//   } catch (error) {
//     console.error(`Error fetching user with ID: ${senderId}`, error);
//     return null;
//   }
// };

export const getRecieverSocketId = (recieverId) => {
  return userSocketMap[recieverId];
};

const userSocketMap = {};

io.on("connection", (socket) => {
  // console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  // When a new message is received, emit a "newMessage" event to the client
  socket.on("newMessage", async (message) => {
    console.log("message recieved");
    const receiverId = message.receiverId;
    const receiverSocketId = getRecieverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", { message });
      console.log("newMessage event emitted", message);
    } else {
      console.log(`error sending message`);
    }
  });

  // Typing indicator events
  socket.on("typing", (conversationId) => {
    const typingSocketId = getRecieverSocketId(conversationId);
    if (typingSocketId) {
      io.to(typingSocketId).emit("typing");
    }
  });

  socket.on("stop typing", (conversationId) => {
    const typingSocketId = getRecieverSocketId(conversationId);
    if (typingSocketId) {
      io.to(typingSocketId).emit("stop typing");
    }
  });

  //io.emit is used to send events to all connected clients/ users
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    // console.log("a user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
