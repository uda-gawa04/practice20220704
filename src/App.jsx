import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [facdShowFlag, setFaceShowFlag] = useState(false);

  const onClickBCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!facdShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        facdShowFlag || setFaceShowFlag(true);
      } else {
        facdShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="blue">how are you</ColorfulMessage>
      <ColorfulMessage color="pink">I'm fine</ColorfulMessage>
      <button onClick={onClickBCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {/* 左側がtrueの時だけ右側を表示 */}
      {facdShowFlag && <p>(^^)/</p>}
    </>
  );
};

export default App;
