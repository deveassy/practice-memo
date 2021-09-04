import React, { FC } from "react";

const List: FC = ({ children }) => {
  return <ul style={{ listStyle: "none", paddingLeft: "0px" }}>{children}</ul>;
};

export default List;

interface ItemProps {
  first?: boolean;
}

export const ListItem: FC<ItemProps> = ({ children, first }) => {
  return (
    <li
      style={{
        padding: "15px",
        borderBottom: "1px solid #ccc",
        borderTop: first ? "1px solid #ccc" : "none",
      }}
    >
      {children}
    </li>
  );
};
