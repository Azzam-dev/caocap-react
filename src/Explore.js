import React from "react";
import Caocap from "./components/Caocap";
import "./style.css";
function ExplorePage() {
  return (
    <div className="columns">
      <Caocap caocapUrl="https://carecards.io/cards" />
      <Caocap caocapUrl="https://calculator-game-reactjs.now.sh/" />
    </div>
  );
}

export default ExplorePage;
