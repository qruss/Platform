import React from "react";
import ListItem from "./ListItem";
import "./styles.css";

const List = ({ list }) => (
  <div className="list-wrap1">
    {list.map((item, index) => (
      <ListItem key={index} item={item} />
    ))}
  </div>
);

export default List;
