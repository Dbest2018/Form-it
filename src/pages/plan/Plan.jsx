import React from "react";
import "./Plan.css";

const Plan = () => {
  return (
    <div className="plan">
      <div className="plan__title">Select your plan</div>
      <div className="plan__text">
        You have the option of monthly or yearly billing.
      </div>

      <div className="plan__options">
        <div className="plan__option">
          <img src="" alt="option" className="plan__option-img" />
          <div className="plan__option-info">
            <div className="option__info-title">Arcade</div>
            <div className="option__info-text">$9/mo</div>
          </div>
        </div>
      </div>

      <div className="plan__options">
        <div className="plan__option">
          <img src="" alt="option" className="plan__option-img" />
          <div className="plan__option-info">
            <div className="option__info-title">Advanced</div>
            <div className="option__info-text">$12/mo</div>
          </div>
        </div>
      </div>

      <div className="plan__options">
        <div className="plan__option">
          <img src="" alt="option" className="plan__option-img" />
          <div className="plan__option-info">
            <div className="option__info-title">Pro</div>
            <div className="option__info-text">$15/mo</div>
          </div>
        </div>
      </div>

      <div className="plan__packages">
        <div className="monthly-package">Monthly</div>
        {/* toggle icon */}
        <div className="yearly-package">Yearly</div>
      </div>
    </div>
  );
};

export default Plan;
