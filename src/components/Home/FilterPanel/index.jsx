import React, { useState } from "react";
import "./styles.css";
import { CheckboxProton } from "../../common/CheckboxProton";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SliderProton from "../../common/SliderProton/index";

import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: sx({
          borderRadius: "25px",
          boxShadow: "0 1px 5px rgb(138, 137, 137)",
          fontFamily: `'Open Sans', sans-serif`,
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: sx({
          paddingRight: "1px",
          paddingLeft: "15px",
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: sx({
          height: "2rem",
          borderRadius: "10px",
          textTransform: "unset !important",
          padding: "1px 30px",
          fontFamily: `'Open Sans', sans-serif`,
          color: "#AB46D2",
          fontSize: "5",
          display: "flex",
          alignItems: "center",

          "&:hover": {
            color: "#FCF8E8",
            transition: "color .2s",
            backgroundColor: "#CA82FF",
            transition: "backgroundcolor .1s",
            transform: "scale(1.04)",
          },
        }),
      },
    },
  },
});

const FilterPanel = ({
  masterData,
  changeChecked,
  value,
  handleRecommended_Time,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <p className="title">FILTERS</p>
        <div className="FilterPanel">
          {Object.keys(masterData).map(
            (name, index) =>
              name !== "Recommended_Time" && (
                <div className="Accordion" key={index}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={name}
                      id={name}
                    >
                      <p className="label">{name}</p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="input-group">
                        {masterData[name].map((option) => (
                          <CheckboxProton
                            key={option.id}
                            option={option}
                            changeChecked={changeChecked}
                            category={name}
                          />
                        ))}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )
          )}
          <div className="Accordion">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="slider"
                id="slider"
              >
                <p className="label">Time</p>
              </AccordionSummary>
              <AccordionDetails>
                <div className="input-group">
                  <SliderProton
                    changeTime={handleRecommended_Time}
                    masterData={masterData}
                    value={value}
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default FilterPanel;
