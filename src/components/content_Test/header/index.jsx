import React from "react";
import "./styles.css";

const Conthead = ({ cont }) => {
  return (
    <div className="Cont_Header1">
      <div className="left_side1">
        <p className="Cont_Header_Title1">Details</p>
        <p className="Cont_Head_para1">
          Name : &emsp; &emsp;&emsp;&ensp; &emsp; &emsp; &emsp;&nbsp;
          <span>{cont["info"]["Test_Name"]} </span>
        </p>
        <p className="Cont_Head_para1">
          Author : &emsp;&emsp;&ensp; &emsp; &emsp; &emsp;&emsp;
          <span>{cont["info"]["Created_By"]} </span>
        </p>
        <p className="Cont_Head_para1">
          Module Type : &emsp;&emsp;&emsp;&emsp;&ensp;
          <span>{cont["info"]["Module_Type"]} </span>
        </p>
        <p className="Cont_Head_para1">
          Test Type : &ensp; &emsp; &emsp;&emsp;&emsp;&emsp;
          <span>{cont["info"].Test_Type}</span>
        </p>

        <p className="Cont_Head_para1">
          Created On : &emsp;&ensp; &nbsp;&emsp; &emsp; &nbsp;
          <span>
            {new Date(cont["info"]["Created_At"])
              .toUTCString()
              .substring(4, 16)}{" "}
          </span>
        </p>
      </div>
      <div className="right_side1">
        <p className="Cont_Header_Title1">Stats</p>
        <p className="Cont_Head_para">
          Duration : &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
          <span>{cont["info"]["Duration"]} min</span>
        </p>
        <p className="Cont_Head_para1">
          Total Score : &emsp;&emsp;&emsp;&ensp;&emsp;&emsp;&ensp;&nbsp;
          <span>{cont["info"]["Test_Max_Score"]} </span>
        </p>
        {cont["info"]["Module_Type"] === "SINGLE" && (
          <p className="Cont_Head_para">
            Pass Percentage : &emsp;&emsp;&emsp;&emsp;
            <span>{cont["info"]["Pass_Percentage"]} % </span>
          </p>
        )}
        <p className="Cont_Head_para1">
          No of Questions : &emsp;&ensp; &emsp; &emsp;
          <span>{cont["info"]["Number_of_Questions"]} </span>
        </p>
        <p className="Cont_Head_para1">
          Total Attempted : &emsp; &emsp;&emsp; &ensp;
          <span>{cont["info"]["Total_Attempted"]} </span>
        </p>
        <p className="Cont_Head_para1">
          Total Invited : &emsp;&emsp; &emsp; &emsp;&emsp;&nbsp;
          <span>{cont["info"]["Total_Invited"]} </span>
        </p>
      </div>
    </div>
  );
};

export default Conthead;
