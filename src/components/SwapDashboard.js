import React from "react";
import GeneratePrivateKey from "./GeneratePrivateKey";
import Eth from "../images/eth.svg";
import Vector from "../images/Vector-black.png";
import Ellipse from "../images/ellipse-gray.png";
import "../Styles/SwapDashboard.css";

const SwapDashboard = () => {
  return (
    <div className="swap-dashboard-container">
      <div className="dashboard-left-container">
        <div className="dashboard-left-container-section header">
          <h3 style={{ fontFamily: "Jost" }}>Holdings</h3>
          <div>
            <p style={{ fontFamily: "Jost" }}>$1,125</p>
            <p style={{ color: "#FFFFFF80" }}>Estimated Value</p>
          </div>
        </div>
        <div className="dashboard-left-container-section">
          <div>
            <img style={{ height: 30, width: 30 }} src={Eth} alt="ICO" /> ETH
          </div>
          <div>
            <p>0.3</p>
            <p>$672.32</p>
          </div>
        </div>
        <div className="dashboard-left-container-section">
          <div>
            <div style={{ background: "#ffffff" }} className="image-wrapper">
              <img src={Vector} alt="ICO" />
            </div>{" "}
            KNG
          </div>
          <div>
            <p>999,400</p>
            <p>$153.20</p>
          </div>
        </div>
        <div className="dashboard-left-container-section">
          <div>
            <div style={{ background: "#FFFFFF33" }} className="image-wrapper">
              <img src={Ellipse} alt="ICO" />
            </div>{" "}
            PEPE
          </div>
          <div>
            <p>124,512,484</p>
            <p>$72.32</p>
          </div>
        </div>
      </div>
      <div className="dashboard-middle-container">
        <GeneratePrivateKey next={null} fromDashboard={true} />
      </div>
      <div className="dashboard-right-container">
        <div className="dashboard-right-container-header">
          <h3>Active Trades</h3>
        </div>
        <div className="dashboard-right-container-list-header">
          <p>ENTRY</p>
          <p>CURRENT</p>
        </div>

        <div className="dashboard-right-container-list">
          <div className="dashboard-right-container-list-item">
            <div>
              <p>0.1</p>
              <p>$220.17</p>
            </div>
            <div>
              <p>PEPE</p>
              <span>3X</span>
            </div>
            <div>
              <p>0.32</p>
              <p>$720.17</p>
            </div>
          </div>

          <div className="dashboard-right-container-list-item">
            <div>
              <p>0.07</p>
              <p>$153.20</p>
            </div>
            <div>
              <p>KNG</p>
              <span style={{ background: "#FFFFFF26", color: "#FFFFFF" }}>
                0X
              </span>
            </div>
            <div>
              <p>0.07</p>
              <p>$153.20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapDashboard;
