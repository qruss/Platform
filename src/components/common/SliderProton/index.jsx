import React from "react";
import Slider from "@mui/material/Slider";

/*
const useStyles = makeStyles({
  root: {
    width: "100%",
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
const SliderProton = ({ changeTime, masterData, value }) => {
  return (
    <div>
      <Slider
        value={value}
        onChange={changeTime}
        valueLabelDisplay="on"
        min={0}
        max={5000}
      />
    </div>
  );
};

export default SliderProton;
