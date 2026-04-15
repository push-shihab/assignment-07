import React from "react";
import Intro from "../Intro/Intro";
import Overview from "../Overview/Overview";
import AllFriends from "../AllFriends/AllFriends";

const HomePage = () => {
  return (
    <header className="container mx-auto">
      <Intro></Intro>
      <Overview></Overview>
      <AllFriends></AllFriends>
    </header>
  );
};

export default HomePage;
