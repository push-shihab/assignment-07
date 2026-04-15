import React from "react";

const Overview = () => {
  return (
    <div className="card grid grid-cols-4 gap-6 pb-15 border-b-2 border-gray-200 border-dashed">
      <div className="card-border text-center space-y-2 rounded-2xl shadow-xl py-10">
        <h1 className="text-[#244D3F] text-[32px] font-semibold">10</h1>
        <p className="text-[#64748B]">Total Friends</p>
      </div>
      <div className="card-border text-center space-y-2 rounded-2xl shadow-xl py-10">
        <h1 className="text-[#244D3F] text-[32px] font-semibold">10</h1>
        <p className="text-[#64748B]">On Track</p>
      </div>
      <div className="card-border text-center space-y-2 rounded-2xl shadow-xl py-10">
        <h1 className="text-[#244D3F] text-[32px] font-semibold">10</h1>
        <p className="text-[#64748B]">Need Attention</p>
      </div>
      <div className="card-border text-center space-y-2 rounded-2xl shadow-xl py-10">
        <h1 className="text-[#244D3F] text-[32px] font-semibold">10</h1>
        <p className="text-[#64748B]">Interactions This Month</p>
      </div>
    </div>
  );
};

export default Overview;
