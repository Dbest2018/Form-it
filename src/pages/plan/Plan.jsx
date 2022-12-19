import { useState } from "react";
import "./Plan.css";
import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";
import { changePlan } from "../../features/selectedPlan/selectedPlanSlice";

import advancedImage from "../../assets/images/icon-advanced.svg";
import arcadeImage from "../../assets/images/icon-arcade.svg";
import proImage from "../../assets/images/icon-pro.svg";
import Header from "../../components/header/Header";

export const optionBorderStyle = {
  backgroundColor: "var(--alabaster)",
  border: "1px solid var(--purplish-blue)",
};

const Plan = () => {
  const [plan, setPlan] = useState("monthly");
  const selectedPlan = useSelector((state) => state.selectedPlan.value);
  const dispatch = useDispatch();

  const selectPlan = (selected) => {
    const price = {
      arcadePrice: plan === "monthly" ? "$9/mo" : "$90/mo",
      advancedPrice: plan === "monthly" ? "$12/mo" : "$120/mo",
      proPrice: plan === "monthly" ? "$15/mo" : "$150/mo",
    };
    switch (selected) {
      case "arcade":
        dispatch(
          changePlan({ name: "Arcade", type: plan, price: price.arcadePrice })
        );
        break;
      case "advanced":
        dispatch(
          changePlan({
            name: "Advanced",
            type: plan,
            price: price.advancedPrice,
          })
        );
        break;
      case "pro":
        dispatch(
          changePlan({ name: "Pro", type: plan, price: price.proPrice })
        );
        break;
      default:
        return;
    }
  };

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
        <div
          className="plan__option"
          style={selectedPlan.name === "Arcade" ? optionBorderStyle : null}
          onClick={() => selectPlan("arcade")}
        >
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

        <div
          className="plan__option"
          style={selectedPlan.name === "Advanced" ? optionBorderStyle : null}
          onClick={() => selectPlan("advanced")}
        >
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

        <div
          className="plan__option"
          style={selectedPlan.name === "Pro" ? optionBorderStyle : null}
          onClick={() => selectPlan("pro")}
        >
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
