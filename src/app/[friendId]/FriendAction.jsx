"use client";
import Image from "next/image";
import React, { useContext } from "react";
import call from "../../../public/assets/call.png";
import text from "../../../public/assets/text.png";
import video from "../../../public/assets/video.png";
import { callContext } from "@/utils/TimelineContext";

const FriendAction = ({ specificFriend }) => {
  const { handleCallCounter, handleTextCounter, handleVideoCounter } =
    useContext(callContext);
  return (
    <div className="grid sm:grid-cols-3 gap-4 pt-4">
      <div
        onClick={() => handleCallCounter(specificFriend)}
        className="p-4 bg-[#F8FAFC] shadow-xl rounded-2xl border border-base-300 flex flex-col items-center gap-2 cursor-pointer"
      >
        <Image src={call} alt="call"></Image>Call
      </div>
      <div
        onClick={() => handleTextCounter(specificFriend)}
        className="p-4 bg-[#F8FAFC] shadow-xl rounded-2xl border border-base-300  flex flex-col items-center gap-2 cursor-pointer"
      >
        <Image src={text} alt="text"></Image>Text
      </div>
      <div
        onClick={() => handleVideoCounter(specificFriend)}
        className="p-4 bg-[#F8FAFC] shadow-xl rounded-2xl border border-base-300  flex flex-col items-center gap-2 cursor-pointer"
      >
        <Image src={video} alt="video"></Image>Video
      </div>
    </div>
  );
};

export default FriendAction;
