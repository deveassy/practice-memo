import React, { FC } from "react";
import { Link } from "react-router-dom";

const style = {
  width: "200px",
  marginRight: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const Sidebar: FC = (props) => {
  return <aside style={style}>{props.children}</aside>;
};

export default Sidebar;

export const SidebarTitle: FC = ({ children }) => {
  return <h1 style={{ padding: "0 10px" }}>{children}</h1>;
};

interface Iprops {
  to: string;
}

export const SidebarBackBtn: FC<Iprops> = ({ to }) => {
  return (
    <Link
      style={{
        display: "block",
        padding: "10px",
        textDecoration: "none",
        fontSize: "24px",
      }}
      to={to}
    >
      {"<"}
    </Link>
  );
};
