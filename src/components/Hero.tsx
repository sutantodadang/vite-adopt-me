import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <main className="h-2/3 w-full pl-80 py-20 flex justify-between">
      <div className="flex flex-col h-60 justify-between">
        <h1 className="text-3xl">Find Animal Want Your Adopt</h1>
        <p>Find Animal Want Your Adopt</p>
        <div className="flex justify-between w-96 px-10 mt-20">
          <button className="rounded-lg h-10 w-28 bg-amber-500">
            Browse Cat
          </button>
          <button className="rounded-lg h-10 w-28 bg-amber-500">
            Browse Dog
          </button>
        </div>
      </div>
      {/* <div style="background-image: url(...)" /> */}
      <img
        src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        className="rounded-l-3xl h-96 w-96"
      />
    </main>
  );
};

export default Hero;
