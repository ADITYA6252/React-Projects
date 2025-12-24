import React from "react";

const Header = (props) => {
  const username = props.data?.firstName || "Admin";

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
props.changeuser('')

    // window.location.reload();
  };

  return (
    <div className="flex items-end justify-between pb-4 border-b border-gray-700">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl font-semibold text-emerald-400">
          {username}
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-lg font-medium text-white px-6 py-2 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
