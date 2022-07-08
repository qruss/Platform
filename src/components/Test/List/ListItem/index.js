import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function ListItem({
  item: {
    _id,
    Name,
    Duration,
    Number_of_Questions,
    Test_Mode,
    Technology,
    Test_Type,
    Module_Type,
  },
}) {
  return (
    <Link to={`/test/${_id}`} target="_blank" rel="noopener noreferrer">
      <div className="listItem-wrap1">
        <h1>{Name}</h1>
        <div className="footer">
          <div className="left">
            <p className="first">
              Module Type &emsp;&emsp;&ensp;:&ensp;&ensp;
              <span>{Module_Type} </span>
            </p>
            <p className="number">
              No of Questions &emsp;: <span>{Number_of_Questions}</span>
            </p>
            <p className="technology">
              Technology &emsp;&emsp;&emsp;&nbsp;:&ensp;&ensp;
              <span>{Technology} </span>
            </p>
          </div>
          <div className="wrap_number">
            <p className="first">
              Test Type :&ensp;&nbsp; <span>{Test_Type} </span>
            </p>
            <p className="number">
              Duration :&nbsp; <span> {Duration}</span>
            </p>
            <p className="first">
              Test mode :&ensp;<span>{Test_Mode} </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListItem;
