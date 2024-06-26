import "./App.css";
import { AnimatePresence } from "framer-motion";
import GeneratePrivateKey from "./components/GeneratePrivateKey";
import PrivateKeyForm from "./components/PrivateKeyForm";
import SwapDashboard from "./components/SwapDashboard";
import { useState } from "react";
import Vector from "./images/Vector.png";
function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <div className="App">
      <img className="page-top-logo" src={Vector} />
      <AnimatePresence>
        {step === 1 && <GeneratePrivateKey key="comp1" next={nextStep} />}
        {step === 2 && <PrivateKeyForm key="comp2" next={nextStep} />}
        {step === 3 && <SwapDashboard key="comp3" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
