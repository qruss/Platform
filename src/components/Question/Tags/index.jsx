import React from "react";
import TagItem from "./TagItem/index";
import "./styles.css";

const Tags = ({ filter, handleTag }) => {
  return (
    <div className="Tags">
      {Object.keys(filter).map(
        (name, index) =>
          name !== "Search" &&
          name !== "Recommended_Time" &&
          name !== "page" &&
          name !== "count" && (
            <div key={index} className="Wrap">
              <p className="Title">{name}</p>
              {filter[name].map((item, index) => {
                return (
                  <TagItem
                    key={index}
                    label={item}
                    category={name}
                    handleTag={handleTag}
                  />
                );
              })}
            </div>
          )
      )}
    </div>
  );
};

export default Tags;
