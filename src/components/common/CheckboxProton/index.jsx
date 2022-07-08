import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: sx({
          fontSize: 25,
          height: "auto!important",
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          marginLeft: 0,
          "&:hover": {
            color: "#B667F1",
            transition: "color .3s",
          },
        }),
        label: sx({
          fontSize: "16.5px",
          borderRadius: "7px",
          fontWeight: "450",
          fontFamily: `'Open Sans', sans-serif`,
          color: "rgb(55,65,81)",

          "&:hover": {
            color: "#2E0249",
            transition: "color .2s",
            backgroundColor: "#CA82FF",
            transition: "backgroundcolor .1s",
            transform: "scale(1.1)",
            transition: "transform .3s",
          },
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: sx({
          color: "#764AF1",
          justifyContent: "start",
          alignItems: "start",
          marginLeft: 0,
          "&.Mui-checked": {
            color: "#764AF1",
          },
          "&:hover": {
            color: "#B667F1",
            transition: "color .3s",
          },
        }),
      },
    },
  },
});

export const CheckboxProton = ({ option, changeChecked, category }) => {
  const { selected, label, id } = option;
  return (
    <ThemeProvider theme={theme}>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={selected}
              onChange={() => {
                return changeChecked(category, id);
              }}
              inputProps={{ "aria-label": "checkbox with small size" }}
            />
          }
          label={label}
        />
      </div>
    </ThemeProvider>
  );
};
