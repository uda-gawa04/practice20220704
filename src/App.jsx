import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [facdShowFlag, setFaceShowFlag] = useState(true);

  const onClickBCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!facdShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue">how are you</ColorfulMessage>
      <ColorfulMessage color="pink">I'm fine</ColorfulMessage>
      <button onClick={onClickBCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {facdShowFlag && <p>(^^)/</p>}
    </>
  );
};

export default App;
