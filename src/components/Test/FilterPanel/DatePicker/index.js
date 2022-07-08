import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Stack from "@mui/material/Stack";

export default function DateFilter({
  Date_Range,
  value,
  handleTest_Creation_Date,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DatePicker
          disableFuture
          label="Start Date"
          minDate={new Date(typeof Date_Range !== "undefined" && Date_Range[0])}
          value={value[0]}
          onChange={(newValue) => {
            return handleTest_Creation_Date(0, newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} helperText={"mm/dd/yyyy"} />
          )}
        />
        <DatePicker
          disableFuture
          label="End Date"
          minDate={new Date("2020-01-01")}
          value={value[1]}
          onChange={(newValue) => {
            return handleTest_Creation_Date(1, newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} helperText={"mm/dd/yyyy"} />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}
