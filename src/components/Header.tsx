import React from "react";

const Header = () => {
  return (
    <header className="w-full h-10 flex px-64 items-center justify-between bg-orange-400 rounded-b-2xl">
      <div>Browse Cat</div>
      <div>Browse Dog</div>
      <div>About</div>
      <div className="flex w-1/6 h-10 justify-between items-center px-10 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
