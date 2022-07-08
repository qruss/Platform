import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function ListItem({
  item: { _id, Name, Technology, Type, Languages, Recommended_Time, Score },
}) {
  return (
    <Link to={`/question/${_id}`} target="_blank" rel="noopener noreferrer">
      <div className="listItem-wrap">
        <h1>{Name}</h1>
        <div className="footer">
          <div className="left">
            <p className="technology">
              Technology :&nbsp; <span>{Technology} </span>
            </p>

            {Type === "code" && (
              <p className="language">
                Language :&emsp;
                {Languages.map((item) => (
                  <span>{item}</span>
                ))}
              </p>
            )}
          </div>
          <div className="wrap_number">
            <p className="number">
              Score : <span>{Score}</span>
            </p>
            {Type === "code" && (
              <p className="number">
                Time :&nbsp; <span> {Recommended_Time}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListItem;
