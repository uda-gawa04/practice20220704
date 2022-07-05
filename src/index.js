import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// 画面に反映させる
// ライブラリReactDomの中の、renderという関数を使う
ReactDom.render(<App />, document.getElementById("root"));
// "root"　＝　divのid
