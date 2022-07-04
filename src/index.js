import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return null;
};

// 画面に反映させる
// ライブラリReactDomの中の、renderという関数を使う
ReactDom.render(<App />, document.getElementById("root"));
// "root"　＝　divのid
