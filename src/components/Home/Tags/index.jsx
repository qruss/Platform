import React from "react";
import TagItem from "./TagItem/index";
import "./styles.css";

const Tags = ({ filter }) => {
  return (
    <div className="Tags">
      {Object.keys(filter).map(
        (name) =>
          name !== "Search" &&
          name !== "Recommended_Time" &&
          name !== "page" &&
          filter[name].map((item, index) => {
            return <TagItem key={index} label={item} />;
          })
      )}
    </div>
  );
};

export default Tags;
