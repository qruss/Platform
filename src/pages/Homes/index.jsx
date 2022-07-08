import React from "react";
import "./styles.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Question from "../Question/index";
import Test from "../Test/index";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="home">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          centered
        >
          <Tab label="Question" />
          <Tab sx={{ width: "150px" }} label="Test" />
        </Tabs>
      </Box>
      {value === 0 ? <Question /> : <Test />}
    </div>
  );
};

export default Home;
