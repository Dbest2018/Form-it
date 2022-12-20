import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import "./Summary.css";

const ExtraPackage = ({ addOn }) => {
  return (
    <div className="summary__extra">
      <div className="summary__extra-package">
        <div className="extra-title">{addOn.name}</div>
        <div className="extra-price">{addOn.price}</div>
      </div>
    </div>
  );
};

const Summary = () => {
  const addOns = useSelector((state) => state.addOns.value);
  const selectedPlan = useSelector((state) => state.selectedPlan.value);

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
            <div className="type-toggle">Change</div>
          </div>
          <div className="summary__main-price">{selectedPlan.price}</div>
        </div>
        {addOns.map((addOn, index) => (
          <ExtraPackage key={index} addOn={addOn} />
        ))}
      </div>

      <div className="summary__total">
        <div className="summary__total-title">Total (per month)</div>
        <div className="summary__total-price">+$12/mo</div>
      </div>
    </div>
  );
};

export default Summary;
