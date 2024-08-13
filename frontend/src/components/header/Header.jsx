import React, { useEffect, useState } from "react";

import { useAuthContext } from "../../context/AuthContext";
import SearchInput from "../sidebar/SearchInput";
import { Link } from "react-router-dom";
import UserAccount from "../../pages/user-account/UserAccount";
import { useSocketContext } from "../../context/SocketContext";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { socket } = useSocketContext();

  const showSearchInput = location.pathname != "/user-account";

  const { authUser } = useAuthContext();

  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    if (socket) {
      socket.on("newMessage", ({ message, senderUsername }) => {
        setNotifications((prevNotifications) => [
          ...prevNotifications,
          { message, senderUsername },
        ]);
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {senderUsername}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{message}</p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
      });
    }
  }, [socket]);

  const handleNotificationClick = (e) => {
    if (e.target.id === "notification-button") {
      setShowNotifications((prevShowNotifications) => !prevShowNotifications);
    }
  };

  useEffect(() => {
    console.log("Notifications state changed:", notifications);
  }, [notifications]);

  return (
    <div className="flex items-center p-2 w-[100%] bg-base-100 navbar">
      <div className="navbar-start">
        <div className="">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle w-auto"
          >
            {!showSearchInput && (
              <button onClick={() => navigate(-1)}>Back to messages</button>
            )}
            {showSearchInput && <SearchInput />}
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Connecto</a>
      </div>
      <div className="navbar-end ">
        <button
          className="btn btn-ghost btn-circle mx-5 w-auto relative"
          id="notification-button"
          onClick={handleNotificationClick}
        >
          Notifications
          {notifications.length > 0 && (
            <span className="badge badge-sm badge-error">
              {notifications.length}
            </span>
          )}
        </button>

        {showNotifications && (
          <div
            className="dropdown dropdown-end absolute top-12 right-0 w-52 bg-base-100 rounded-box shadow"
            style={{
              zIndex: 1,
              display: "block", // Add this style
            }}
          >
            <ul tabIndex={0} className="menu p-2">
              {notifications.map((notification, index) => (
                <li key={index}>
                  <p className="text-white">
                    {notification.senderUsername}: {notification.message}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button className="btn btn-ghost btn-circle mx-6">
          <div className="indicator">
            <Link to="/user-account">
              <img src={authUser.profilePicture} className="h-10" alt="" />
            </Link>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
