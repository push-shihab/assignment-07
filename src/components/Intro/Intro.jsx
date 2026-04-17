import React from "react";

const Intro = () => {
  return (
    <div className="text-center space-y-6 py-15">
      <h1 className="font-bold text-5xl">Friends to keep close in your life</h1>
      <p className="text-[#64748B]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the
        <br /> relationships that matter most.
      </p>
      <button className="font-semibold p-2.5 rounded-md bg-[#244D3F] text-white cursor-pointer">
        + Add a Friend
      </button>
    </div>
  );
};

export default Intro;
