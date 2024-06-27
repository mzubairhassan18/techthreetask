import React from "react";
import Vector from "../images/Vector.png";
import Eth from "../images/eth.svg";
import DownArrow from "../images/downarrow.png";
import DownArrowGreen from "../images/down-arrow-green.png";
import MiddleIcon from "../images/ellipse-section.svg";
import Setting from "../images/setting.png";
import "../Styles/GeneratePrivateKey.css";

const GeneratePrivateKey = ({ next, fromDashboard }) => {
  return (
    <div className="generate-key-container">
      <div className="container-header">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img src={Vector} />
          <h2>KingSwap</h2>
        </div>
        {fromDashboard && (
          <div className="from-dashboard-div">
            <p>
              <span style={{ fontWeight: "500" }}>MevSafe </span>50% Slippage
            </p>
            <img style={{ height: "unset", width: "unset" }} src={Setting} />
          </div>
        )}
      </div>
      <div className="container-body">
        <div className="section">
          <div className="section-content">
            <div className="content-left">
              <p>You Pay</p>
              <h3>2.35</h3>
            </div>
            <div className="content-right">
              <button>
                <img src={Eth} />
                <p>ETH</p>
                <img src={DownArrow} />
              </button>
            </div>
          </div>
        </div>
        <div className="middle-icon-wrapper">
          <div
            className={
              fromDashboard ? "from-dashboard-class middle-icon" : "middle-icon"
            }
          >
            <div>
              <img src={fromDashboard ? Vector : MiddleIcon} />
            </div>
          </div>
        </div>
        <div className="section section2">
          <div className="section-content">
            <div className="content-left">
              <p className="left-heading">You Receive</p>
              <h3 className="left-body">0</h3>
            </div>
            <div className="content-right">
              <button>
                <p>SELECT</p>
                <img src={DownArrowGreen} />
              </button>
            </div>
          </div>
        </div>
        <button
          className={
            fromDashboard
              ? "from-dashboard-button submit-button"
              : "submit-button"
          }
          onClick={next}
        >
          {fromDashboard ? "SELECT A TOKEN" : "GENERATE PRIVATE KEY"}
        </button>
      </div>
    </div>
  );
};

export default GeneratePrivateKey;
