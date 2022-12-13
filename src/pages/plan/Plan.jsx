import React from "react";
import "./Plan.css";
import { BsToggleOff } from "react-icons/bs";

import advancedImage from "../../assets/images/icon-advanced.svg";
import arcadeImage from "../../assets/images/icon-arcade.svg";
import proImage from "../../assets/images/icon-pro.svg";

const Plan = () => {
  return (
    <div className="plan">
      <div className="plan__title">Select your plan</div>
      <div className="plan__text">
        You have the option of monthly or yearly billing.
      </div>

      <div className="plan__options">
        <div className="plan__option">
          <img src={arcadeImage} alt="option" className="plan__option-img" />
          <div className="plan__option-info">
            <div className="option__info-title">Arcade</div>
            <div className="option__info-text">$9/mo</div>
          </div>
        </div>

        <div className="plan__option">
          <img src={advancedImage} alt="option" className="plan__option-img" />
          <div className="plan__option-info">
            <div className="option__info-title">Advanced</div>
            <div className="option__info-text">$12/mo</div>
          </div>
        </div>

        <div className="plan__option">
          <img src={proImage} alt="option" className="plan__option-img" />
          <div className="plan__option-info">
            <div className="option__info-title">Pro</div>
            <div className="option__info-text">$15/mo</div>
          </div>
        </div>
      </div>

      <div className="plan__packages">
        <div className="monthly-package">Monthly</div>
        <BsToggleOff />
        <div className="yearly-package">Yearly</div>
      </div>
    </div>
  );
};

export default Plan;
