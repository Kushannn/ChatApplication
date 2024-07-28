import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-gradient-to-r from-[#171E37] to-[#702A4E]">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-700"> Connecto</span>
        </h1>

        <form>
          <div>
            <label className="label p-3">
              <span className="label-text text-lg">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered input-secondary h-10"
            />
          </div>

          <div>
            <label className="label p-3">
              <span className="label-text text-lg">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered input-secondary h-10"
            />
          </div>

          <div>
            <label className="label p-3">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered input-secondary h-10"
            />
          </div>

          <div>
            <label className="label p-3">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              type="text"
              placeholder="Confirm password"
              className="w-full input input-bordered input-secondary h-10"
            />
          </div>

          <GenderCheckbox />

          <a href="" className="text-md hover:underline mt-3 inline-block">
            {"Already"} have an account ?
          </a>

          <div>
            <button className="btn btn-outline btn-secondary btn-block btn-sm mt-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
