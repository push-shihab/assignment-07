"use client";
import { createContext, useState } from "react";

export const OverviewCounter = createContext();

const OverviewContext = ({ children }) => {
  const [friendCounter, setFriendCounter] = useState([]);
  const count = { friendCounter, setFriendCounter };
  return (
    <div>
      <OverviewCounter value={count}>{children}</OverviewCounter>
    </div>
  );
};

export default OverviewContext;
