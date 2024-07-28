import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-gradient-to-r from-[#171E37] to-[#702A4E]">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-700"> Connecto</span>
        </h1>

        <form>
          <div>
            <label className="label p-3">
              <span className="label-text text-lg">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered input-secondary h-10"
            />
          </div>

          <div>
            <label className="label p-3">
              <span className="text-lg label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered input-secondary h-10"
            />
          </div>

          <a href="" className="text-md hover:underline mt-3 inline-block">
            {"Don't"} have an account ?
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

export default Login;
