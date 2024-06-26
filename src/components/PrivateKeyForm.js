import React, { useEffect } from "react";
import "./PrivateKeyForm.css";

const PrivateKeyForm = ({ next }) => {
  return (
    <div className=" component2">
      <div className="private-key-container">
        <h3>ENTER YOUR PRIVATE KEY</h3>
        <input value={"RANDOM3348347i2301238123"} />
        <button onClick={next}>CONTINUE</button>
      </div>
    </div>
  );
};

export default PrivateKeyForm;
