import React from "react";
import "../Styles/PrivateKeyForm.css";

const PrivateKeyForm = ({ next }) => {
  return (
    <div className="private-key-container">
      <h3>ENTER YOUR PRIVATE KEY</h3>
      <input value={"RANDOM3348347i2301238123"} />
      <button onClick={next}>CONTINUE</button>
    </div>
  );
};

export default PrivateKeyForm;
