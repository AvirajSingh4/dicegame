import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay"

function App() {
  const [gamestart,setGameStart]=useState(false)

  const handletoggle=()=>{
    setGameStart(!gamestart);
  }

  return (
    <>
      {!gamestart?<StartGame toggle={handletoggle}/>:<GamePlay/>}
    </>
  );
}

export default App;
