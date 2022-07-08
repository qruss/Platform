import React from "react";
import { Pagination } from "@mui/material";

const PaginationComp = ({ count, page, handlePageChange }) => {
  return (
    <div>
      <Pagination
        count={count}
        variant="outlined"
        color="secondary"
        size="large"
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationComp;
