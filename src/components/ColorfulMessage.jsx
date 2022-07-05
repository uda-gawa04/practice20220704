import React from "react";

const ColofulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // オブジェクトがプロパティ名と当てはめる変数名が同じときは、：以降の変数名がなくてもOK
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColofulMessage;
