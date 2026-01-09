import React, { useState } from "react";

const Login1 = ({ handleLogin }) => {
  const [email, setemail] = useState("e@e.com");
  const [password, setpass] = useState("123");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
      <div className="border-2 rounded-2xl border-emerald-500/70 p-8 sm:p-16 bg-white/5 backdrop-blur-lg">

        <div className="flex gap-4 mb-6 justify-center">
          <button
            type="button"
            onClick={() => {
              setemail("e@e.com");
              setpass("123");
            }}
            className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm"
          >
            Employee Login
          </button>

          <button
            type="button"
            onClick={() => {
              setemail("admin@me.com");
              setpass("123");
            }}
            className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm"
          >
            Admin Login
          </button>
        </div>

        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center gap-4"
        >
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">
            Welcome Back 👋
          </h2>

          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-72 text-white bg-transparent border-2 border-emerald-500 rounded-full px-5 py-2"
            type="email"
          />

          <input
            value={password}
            onChange={(e) => setpass(e.target.value)}
            className="w-72 text-white bg-transparent border-2 border-emerald-500 rounded-full px-5 py-2"
            type="password"
          />

          <button
            type="submit"
            className="mt-4 bg-emerald-600 text-white px-8 py-2 rounded-full"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login1;
