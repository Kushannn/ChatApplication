import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import SearchInput from "../sidebar/SearchInput";
import { useSocketContext } from "../../context/SocketContext";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { socket } = useSocketContext();
  const { authUser } = useAuthContext();

  const showSearchInput = location.pathname !== "/user-account";

  return (
    <div className="flex items-center p-2 w-[100%] bg-gradient-to-r from-[#171E37] to-[#702A4E] navbar">
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
        <p className="btn btn-ghost text-3xl text-white font-extrabold">
          Connecto
        </p>
      </div>
      <div className="navbar-end ">
        {/* <button
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
              display: "block",
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
        )} */}
        <button className="btn btn-ghost btn-circle mx-6">
          <div className="indicator">
            <img
              src={authUser.profilePicture || "path/to/placeholder/image.jpg"}
              className="h-10"
              alt="Profile"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
