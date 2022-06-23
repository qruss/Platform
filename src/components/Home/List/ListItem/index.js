import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        color: "error",
        root: sx({
          textTransform: "unset !important",
          padding: "1px 30px",
          fontFamily: `'Open Sans', sans-serif`,
          color: "#AB46D2",
          fontSize: 17,
          display: "flex",
          alignItems: "center",

          "&:hover": {
            color: "#FCF8E8",
            transition: "color .2s",
            backgroundColor: "#CA82FF",
            transition: "backgroundcolor .1s",
            transform: "scale(1.1)",
            transition: "transform .2s",
          },
          "&:active": {
            backgroundColor: "#CA82FF",
            boxShadow: "0 3px #9936c0",
            transform: "translateY(4px)",
          },
        }),
      },
    },
  },
});

function ListItem({
  item: { _id, Name, Technology, Languages, Recommended_Time, Score },
}) {
  return (
    <Link to={`/id/${_id}`} target="_blank" rel="noopener noreferrer">
      <div className="listItem-wrap">
        <h1>{Name}</h1>
        <div className="footer">
          <div className="left">
            <p className="language">
              Language : <span>{Languages}</span>
            </p>
            <p className="technology">
              Technology : <span>{Technology} </span>
            </p>
          </div>
          <div className="wrap_number">
            <p className="number">
              Score : <span>{Score}</span>
            </p>
            <p className="number">
              Time : <span> {Recommended_Time}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListItem;
