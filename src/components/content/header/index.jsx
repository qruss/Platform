import React from "react";
import "./styles.css";

const Conthead = ({ cont }) => {
  return (
    <div className="Cont_Header">
      <div className="left_side">
        <p className="Cont_Header_Title">Details</p>
        <p className="Cont_Head_para">
          Type : &emsp;&emsp;&emsp;&emsp; &emsp; &emsp; &emsp;
          &emsp;&ensp;&nbsp;
          {cont.info.Type === "code" ? (
            <span>Coding Question</span>
          ) : (
            <span>MCQ Question</span>
          )}
        </p>
        <p className="Cont_Head_para">
          Name : &emsp;&emsp;&emsp;&emsp; &emsp; &emsp; &emsp; &emsp;&nbsp;
          <span>{cont["info"]["Question_Name"]} </span>
        </p>
        <p className="Cont_Head_para">
          Author : &emsp;&emsp;&emsp;&emsp; &emsp; &emsp; &emsp;&emsp;
          <span>{cont["info"]["Author"]} </span>
        </p>
        <p className="Cont_Head_para">
          Created On : &emsp;&emsp;&emsp; &emsp; &emsp; &ensp;
          <span>
            {new Date(cont["info"]["Created_On"])
              .toUTCString()
              .substring(4, 16)}{" "}
          </span>
        </p>
        <p className="Cont_Head_para">
          Total Score : &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;
          <span>{cont["info"]["Total_Score"]} </span>
        </p>
        <p className="Cont_Head_para">
          Recommended Time : &emsp;&emsp;&nbsp;
          <span>{cont["info"]["Recommended_Time"]} </span>
        </p>
      </div>
      <div className="right_side">
        <p className="Cont_Header_Title">Stats</p>
        <p className="Cont_Head_para">
          Attempts : &emsp;&emsp;&emsp;&emsp; &emsp; &emsp;&emsp; &nbsp;
          <span>{cont["info"]["Num_Of_Attempts"]} </span>
        </p>
        {/*<p className="Cont_Head_para">
          Correct Attempts : &emsp;&emsp;&emsp;&emsp;&nbsp;
          <span>{cont["info"]["Num_Of_Times_Answered_Correctly"]} </span>
        </p>
        <p className="Cont_Head_para">
          Median Score : &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <span>{cont["info"]["Median_Score"]} </span>
        </p>*/}
        <p className="Cont_Head_para">
          Average Score : &emsp;&emsp;&emsp; &emsp; &emsp;
          <span>{cont["info"]["Average_Score"]} </span>
        </p>
        <p className="Cont_Head_para">
          Median Attempt Time : &emsp;&emsp;
          <span>{cont["info"]["Median_Attempt_Time"]} </span>
        </p>
      </div>
    </div>
  );
};

export default Conthead;
