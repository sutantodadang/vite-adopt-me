import React, { FC } from "react";

const About: FC = () => {
  return (
    <div className="flex flex-col h-72 items-center w-100 justify-between py-20 bg-orange-400">
      <h1 className="text-3xl">Ready To Adopt?</h1>
      <p>Start to adopt animal you want and be happy right now</p>
      <button className="rounded-xl w-20 h-10 bg-white ">Sign Up</button>
    </div>
  );
};

export default About;
