"use client";

import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const callContext = createContext();

const TimelineContext = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
  const handleTimeline = (newAction) => {
    setTimeline([...timeline, newAction]);
  };
  const [callCounter, setCallCounter] = useState([]);
  const handleCallCounter = (friend) => {
    setCallCounter([...callCounter, friend]);
    handleTimeline({ friend, time: new Date(), type: "call" });
    toast.success(`Call with ${friend.name}`);
  };
  const [textCounter, setTextCounter] = useState([]);
  const handleTextCounter = (friend) => {
    setTextCounter([...textCounter, friend]);
    handleTimeline({ friend, time: new Date(), type: "text" });
    toast.success(`Text with ${friend.name}`);
  };
  const [videoCounter, setVideoCounter] = useState([]);
  const handleVideoCounter = (friend) => {
    setVideoCounter([...videoCounter, friend]);
    handleTimeline({ friend, time: new Date(), type: "video" });
    toast.success(`Video with ${friend.name}`);
  };
  const count = {
    timeline,
    callCounter,
    setCallCounter,
    handleCallCounter,
    textCounter,
    setTextCounter,
    handleTextCounter,
    videoCounter,
    setVideoCounter,
    handleVideoCounter,
  };
  return (
    <div>
      <callContext.Provider value={count}>{children}</callContext.Provider>
    </div>
  );
};

export default TimelineContext;
