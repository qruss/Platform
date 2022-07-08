import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Barchart from "../../components/content_Question/barchart";
import Barchart1 from "../../components/content_Question/barchart1";
import Piechart from "../../components/content_Question/piechart";
import EnhancedTable from "../../components/content_Question/table";
import Conthead from "../../components/content_Question/header/index";

import "./styles.css";

const Content = () => {
  const [cont, setcont] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const abortCont = new AbortController();
    let url = `http://localhost:5000/question/`;
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
      {cont != null && (
        <div className="Cont_Head_total">
          <Conthead cont={cont} />
          <div className="chart1">
            <p className="Cont_Head_Title">Score Distribution %</p>
            <div className="innerChart1">
              <Barchart data1={cont["score_distribution"]} />
            </div>
          </div>
          <div className="chart1">
            <p className="Cont_Head_Title">Usage Over Time</p>
            {/* <p className="Cont_Head_subTitle">
              Distribution of Candidates Over Time
            </p>*/}
            <div className="innerChart2">
              <Barchart1 data1={cont["usage_over_time"]} />
            </div>
          </div>
          {cont.info.Type === "code" && (
            <div className="chart1">
              <p className="Cont_Head_Title">Candidates By Language</p>
              <div className="piechart">
                <Piechart data1={cont["candidates_by_language"]} />
              </div>
            </div>
          )}
          {cont.info.Type === "code" && (
            <div className="chart1">
              <p className="Cont_Head_Title">Language Stats</p>
              <div className="table">
                <EnhancedTable rows={cont["language_stats"]} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Content;
