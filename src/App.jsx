import { useState } from "react";
import ScoreKeeper from "./ScoreKeeper";

import "./App.css";

function App() {
  return <ScoreKeeper numPlayers={5} target={5} />;
}

export default App;
