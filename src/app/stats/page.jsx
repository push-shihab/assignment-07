"use client";
import { callContext } from "@/utils/TimelineContext";
import React, { useContext } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const Stats = ({ isAnimationActive = true }) => {
  const { videoCounter, textCounter, callCounter, timeline } =
    useContext(callContext);
  const COLORS = ["#244d3f", "#37a163", "#7f37f5"];
  const data = [
    { name: "Videos", value: videoCounter.length },
    { name: "Texts", value: textCounter.length },
    { name: "Calls", value: callCounter.length },
  ];
  return (
    <main className="bg-[#F8FAFC]">
      <section className="container mx-auto py-20 space-y-6">
        <h1 className="font-bold text-5xl text-center">Friendship Analytics</h1>
        {timeline.length === 0 ? (
          <div className="h-[50vh] flex justify-center items-center uppercase text-4xl font-bold text-red-700">
            No Analytics yet!
          </div>
        ) : (
          <div className="bg-white shadow-sm p-8">
            <h2 className="text-[#244D3F] font-medium text-[20px] text-center">
              By Interaction Type
            </h2>
            <div className="flex justify-center items-center py-6">
              <PieChart
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  maxHeight: "45vh",
                  aspectRatio: 1,
                }}
                responsive
              >
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  cornerRadius="50%"
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={isAnimationActive}
                >
                  {data.map((info, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip></Tooltip>
              </PieChart>
            </div>
            <div className="flex justify-center items-center gap-7">
              <div className="text-[#64748B] text-[14px] flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#244d3f]"></div>
                <span>Video</span>
              </div>
              <div className="text-[#64748B] text-[14px] flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#37a163]"></div>
                <span>Text</span>
              </div>
              <div className="text-[#64748B] text-[14px] flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#7f37f5]"></div>
                <span>Call</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Stats;
