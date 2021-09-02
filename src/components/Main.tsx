import React, { FC } from "react";

const style = {
  flex: 1,
  overflow: "auto",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const Main: FC = (props) => {
  return <main style={style}>{props.children}</main>;
};

export default Main;
