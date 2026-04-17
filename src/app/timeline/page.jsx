"use client";
import { callContext } from "@/utils/TimelineContext";
import React, { useContext } from "react";
import call from "../../../public/assets/call.png";
import text from "../../../public/assets/text.png";
import video from "../../../public/assets/video.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

const Timeline = () => {
  const { timeline } = useContext(callContext);
  return (
    <main className="bg-[#F8FAFC]">
      <section className="container mx-auto py-20 space-y-6">
        <div>
          <h1 className="font-bold text-5xl">Timeline: {timeline.length}</h1>
        </div>
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            <span className="text-[#64748B] flex gap-6 items-center">
              Filter Timeline <MdOutlineKeyboardArrowDown />
            </span>
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Call</a>
            </li>
            <li>
              <a>Text</a>
            </li>
            <li>
              <a>Video</a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          {timeline.map((action, i) => (
            <div
              key={i}
              className="flex gap-4 border border-base-300 p-4 bg-white rounded-2xl shadow-sm"
            >
              <Image
                width="auto"
                height="auto"
                src={
                  action.type === "call"
                    ? call
                    : action.type === "text"
                      ? text
                      : action.type === "video"
                        ? video
                        : ""
                }
                alt=""
              />
              <div>
                <span className="font-medium text-[20px] text-[#244D3F]">
                  {action.type == "call"
                    ? "Call"
                    : action.type == "text"
                      ? "Text"
                      : action.type == "video"
                        ? "Video"
                        : ""}
                </span>
                <span className="text-[#64748B]">
                  {" "}
                  with {action.friend.name}
                </span>
                <p className="text-[#64748B] font-medium">
                  {new Date(action.time).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Timeline;
