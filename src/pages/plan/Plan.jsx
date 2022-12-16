import { useState } from "react";
import "./Plan.css";
import Switch from "react-switch";

import advancedImage from "../../assets/images/icon-advanced.svg";
import arcadeImage from "../../assets/images/icon-arcade.svg";
import proImage from "../../assets/images/icon-pro.svg";
import Header from "../../components/header/Header";

const Plan = () => {
  const [plan, setPlan] = useState("monthly");

  const handleChange = () => {
    if (plan === "monthly") {
      setPlan("yearly");
      return;
    }
    setPlan("monthly");
    return;
  };
  return (
    <div className="plan">
      <Header
        title={"Select your plan"}
        text={"You have the option of monthly or yearly billing."}
      />
      <div className="plan__options">
        <div className="plan__option">
          <img src={arcadeImage} alt="option" className="plan__option-img" />
          <div className="plan__option-info">
            <div className="option__info-title">Arcade</div>
            <div className="option__info-text">
              {plan === "yearly" ? "$90/yr" : "$9/mo"}
            </div>
            {plan === "yearly" && (
              <div className="option__info-extra">2 months free</div>
            )}
          </div>
        </div>

        <div className="plan__option">
          <img src={advancedImage} alt="option" className="plan__option-img" />
          <div className="plan__option-info">
            <div className="option__info-title">Advanced</div>
            <div className="option__info-text">
              {plan === "yearly" ? "$120/yr" : "$12/mo"}
            </div>
            {plan === "yearly" && (
              <div className="option__info-extra">2 months free</div>
            )}
          </div>
        </div>

        <div className="plan__option">
          <img src={proImage} alt="option" className="plan__option-img" />
          <div className="plan__option-info">
            <div className="option__info-title">Pro</div>
            <div className="option__info-text">
              {plan === "yearly" ? "$150/yr" : "$15/mo"}
            </div>
            {plan === "yearly" && (
              <div className="option__info-extra">2 months free</div>
            )}
          </div>
        </div>
      </div>

      <div className="plan__packages">
        <div className="monthly-package">Monthly</div>
        <Switch
          onChange={handleChange}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#02295a"
          offColor="#02295a"
          checked={plan === "yearly"}
        />
        <div className="yearly-package">Yearly</div>
      </div>
    </div>
  );
};

export default Plan;
