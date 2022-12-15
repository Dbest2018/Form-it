import React from "react";
import Header from "../../components/header/Header";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="summary">
      <Header
        title={"Finishing up"}
        text={"Double-check everything looks OK before confirming."}
      />
      <div className="summary__detail">
        <div className="summary__main">
          <div className="summary__main-type">
            <div className="type-title">Arcade (Monthly)</div>
            <div className="type-toggle">Change</div>
          </div>
          <div className="summary__main-price">$9/mo</div>
        </div>
        <div className="summary__extra">
          <div className="summary__extra-package">
            <div className="extra-title">Online service</div>
            <div className="extra-price">+$1/mo</div>
          </div>
          <div className="summary__extra-package">
            <div className="extra-title">Larger storage</div>
            <div className="extra-price">+$2/mo</div>
          </div>
        </div>
      </div>

      <div className="summary__total">
        <div className="summary__total-title">Total (per month)</div>
        <div className="summary__total-price">+$12/mo</div>
      </div>
    </div>
  );
};

export default Summary;
