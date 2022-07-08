import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/material/styles";
import "./styles.css";

const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: sx({
          margin: "0px 0px 0px 0px",
          paddingRight: "2px",
          paddingLeft: "5px",
          "&:hover": {
            color: "rgb(55, 65, 81);",
            transition: "color .2s",
            transform: "scale(1.15)",
          },
          "&:active": {
            boxShadow: "0 1px #9936c0",
            transform: "translateY(1px)",
          },
        }),
      },
    },
  },
});

const TagItem = ({ label, handleTag, category }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="TagItem">
        <p>{label}</p>
        {category !== "Type" && (
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => {
              return handleTag(category, label);
            }}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
        )}
      </div>
    </ThemeProvider>
  );
};

export default TagItem;
