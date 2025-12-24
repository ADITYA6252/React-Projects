import React, { useState } from "react";

const Login1 = ({handleLogin}) => {



  const [email, setemail] = useState("");
  const [password, setpass] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
handleLogin(email,password)

    setemail("");
    setpass("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
      <div className="border-2 rounded-2xl border-emerald-500/70 p-16 backdrop-blur-lg bg-white/5 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_45px_rgba(16,185,129,0.4)] transition-all duration-300">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <h2 className="text-3xl font-bold text-emerald-400 mb-8 tracking-wide drop-shadow-md">
            Welcome Back 👋
          </h2>

          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className="w-72 text-white outline-none bg-transparent border-2 border-emerald-500/70 text-lg font-medium rounded-full py-3 px-6 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
            type="email"
            placeholder="Enter Your Email"
          />

          <input
            value={password}
            onChange={(e) => setpass(e.target.value)}
            required
            className="w-72 text-white outline-none bg-transparent border-2 border-emerald-500/70 text-lg mt-4 font-medium rounded-full py-3 px-6 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
            type="password"
            placeholder="Enter Password"
          />

          <button
            type="submit"
            className="mt-7 text-white font-semibold bg-emerald-600 hover:bg-emerald-700 rounded-full py-3 px-10 text-lg tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all duration-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login1;
