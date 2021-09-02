import React, { CSSProperties, FC } from "react";

const style: CSSProperties = {
  display: "flex",
  flex: 1,
  margin: "10px",
};

const Layout: FC = (props) => {
  return <div style={style}>{props.children}</div>;
};

export default Layout;
