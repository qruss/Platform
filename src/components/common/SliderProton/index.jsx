import React from "react";
import Slider from "@mui/material/Slider";
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/material/styles";

/*
const useStyles = makeStyles({
  root: {
    
  },
  thumb: {
    color: "#000",
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: "#000",
  },
});
*/

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        root: sx({
          marginTop: "2rem",
          marginLeft: "7px",
          width: "85%",
        }),
        thumb: sx({
          color: "#000",
        }),
        rail: sx({
          color: `rgba(0, 0, 0, 0.26)`,
        }),
        track: sx({
          color: "#000",
        }),
        valueLabel: sx({
          fontSize: "19px",
          padding: 0,
          fontFamily: "open Sans sans-serif",
          backgroundColor: "white",
          color: "#ab58e6",
        }),
      },
    },
  },
});

const SliderProton = ({ changeTime, masterData, value }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Slider
          value={value}
          onChange={changeTime}
          valueLabelDisplay="on"
          min={0}
          max={480}
        />
      </div>
    </ThemeProvider>
  );
};

export default SliderProton;
