import React, { useState } from "react";
import './App.css'
function MoveButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <button
      className={clicked ? "move-button clicked" : "move-button"}
      onClick={handleClick}
    >
      Déplacer
    </button>
  );
}

export default MoveButton;
