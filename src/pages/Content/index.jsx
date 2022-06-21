import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

const Content = () => {
  const { id } = useParams();
  return <div> Content - {id}</div>;
};

export default Content;
