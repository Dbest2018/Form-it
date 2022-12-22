import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { changeTab } from "../../features/selectedTab/selectedTabSlice";
import "./Summary.css";

const ExtraPackage = ({ addOn, selectedPlan }) => {
  return (
    <div className="summary__extra">
      <div className="summary__extra-package">
        <div className="extra-title">{addOn.name}</div>
        <div className="extra-price">{`$${addOn.price}/${
          selectedPlan.type === "yearly" ? "yr" : "mo"
        }`}</div>
      </div>
    </div>
  );
};

const Summary = () => {
  const addOns = useSelector((state) => state.addOns.value);
  const selectedPlan = useSelector((state) => state.selectedPlan.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changePlanInSummary = () => {
    dispatch(changeTab("tab2"));
    navigate("/plan");
  };

  let totalAddOns = selectedPlan.price;
  addOns.forEach((addOn) => {
    totalAddOns = totalAddOns + addOn.price;
  });
  return (
    <div className="summary">
      <Header
        title={"Finishing up"}
        text={"Double-check everything looks OK before confirming."}
      />
      <div className="summary__detail">
        <div className="summary__main">
          <div className="summary__main-type">
            <div className="type-title">
              {selectedPlan.name} ({selectedPlan.type})
            </div>
            <div className="type-toggle" onClick={() => changePlanInSummary()}>
              Change
            </div>
          </div>
          <div className="summary__main-price">{`$${selectedPlan.price}/${
            selectedPlan.type === "monthly" ? "mo" : "yr"
          }`}</div>
        </div>
        {addOns.map((addOn, index) => (
          <ExtraPackage key={index} addOn={addOn} selectedPlan={selectedPlan} />
        ))}
      </div>

      <div className="summary__total">
        <div className="summary__total-title">
          Total (per {selectedPlan.type})
        </div>
        <div className="summary__total-price">{`$${totalAddOns}/${
          selectedPlan.type === "yearly" ? "yr" : "mo"
        }`}</div>
      </div>
    </div>
  );
};

export default Summary;
