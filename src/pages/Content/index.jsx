import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Barchart from "../barchart";
import Barchart1 from "../barchart1";
import Piechart from "../piechart";
import "./styles.css";

const Content = () => {
  const [cont, setcont] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const abortCont = new AbortController();
    let url = `http://localhost:5000/get_questions_api/`;
    url += id;
    fetch(url, {
      signal: abortCont.signal,
    })
      .then((response) => response.json())
      .then((data) => setcont(data));
    return () => abortCont.abort();
  }, []);
  cont != null && console.log(cont);
  return (
    <div>
      <div className="chart1">
        {cont != null && <Barchart data1={cont["score_distribution"]} />}
      </div>
      <div className="chart2">
        {cont != null && <Barchart1 data1={cont["usage_over_time"]} />}
      </div>
      <div className="piechart">
        {cont != null && <Piechart data1={cont["candidates_by_language"]} />}
      </div>
    </div>
  );
};

export default Content;
