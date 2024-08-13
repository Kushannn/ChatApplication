import React from "react";
import Header from "../../components/header/Header";

const UserAccount = () => {
  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full bg-base-100">
        <Header />
      </div>

      <div>
        <form action="">
          <div>
            <label htmlFor="" className="m-5">
              Username
            </label>
            <input
              type="text"
              className="input input-bordered input-secondary w-full max-w-xs m-5"
            />
          </div>

          <div>
            <label htmlFor="" className="m-5">
              Profile Photo
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-secondary w-full max-w-xs m-5"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UserAccount;
