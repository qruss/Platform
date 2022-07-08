import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

export default function NavBar({ def }) {
  const [value, setValue] = React.useState(def);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        centered
      >
        <Link to={`/`}>
          <Tab sx={{ width: "150px" }} label="Page One" />
        </Link>
        <Link to={`/test`}>
          <Tab sx={{ width: "150px" }} label="Page Two" />
        </Link>
      </Tabs>
    </Box>
  );
}
