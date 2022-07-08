import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Barchart1 from "../../components/content_Test/barchart1";
import Barchart2 from "../../components/content_Test/barchart2";
import Barchart3 from "../../components/content_Test/barchart3";
import Barchart4 from "../../components/content_Test/barchart4";
import Piechart from "../../components/content_Test/piechart";
import Conthead from "../../components/content_Test/header/index";

import "./styles.css";

const Content = () => {
  const [cont, setcont] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const abortCont = new AbortController();
    let url = `http://localhost:5000/test/`;
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
        <div className="Cont_Head_total1">
          <Conthead cont={cont} />
          <div className="chart11">
            <p className="Cont_Head_Title1">Usage Over Time</p>
            <div className="innerChart11">
              <Barchart1 data1={cont["usage_of_test_over_time"]} />
            </div>
          </div>
          <div className="chart11">
            <p className="Cont_Head_Title1">
              Median Time Taken Per Question (Seconds)
            </p>
            <div className="innerChart12">
              <Barchart2 data1={cont["median_time_taken_per_question"]} />
            </div>
          </div>
          <div className="chart11">
            <p className="Cont_Head_Title1">Median Score Per Question</p>
            <div className="innerChart12">
              <Barchart3 data1={cont["median_score_per_question"]} />
            </div>
          </div>
          <div className="chart1">
            <p className="Cont_Head_Title1">
              Breakdown of Candidates by Score Status
            </p>
            <div className="piechart1">
              <Piechart
                data1={cont["breakdown_of_candidates_by_score_status"]}
              />
            </div>
          </div>
          <div className="chart11">
            <p className="Cont_Head_Title1">Candidate Score Distribution</p>
            <div className="innerChart14">
              <Barchart4 data1={cont["candidate_score_distrubution"]} />
            </div>
          </div>

          {/*<div className="chart11">
            <p className="Cont_Head_Title1">Score Distribution %</p>
            <div className="innerChart11">
              <Barchart data1={cont["score_distribution"]} />
            </div>
          </div>*/}
          {/*<div className="chart11">
            <p className="Cont_Head_Title1">Usage Over Time</p>
            {/* <p className="Cont_Head_subTitle">
              Distribution of Candidates Over Time
            </p>
            <div className="innerChart12">
              <Barchart1 data1={cont["usage_over_time"]} />
            </div>
          </div>*/}
          {/*cont.info.Type === "code" && (
            
          )*/}
        </div>
      )}
    </div>
  );
};

export default Content;
