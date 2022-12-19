import { useState } from "react";
import Header from "../../components/header/Header";
import "./AddOns.css";

import { optionBorderStyle } from "../plan/Plan";

const AddOns = () => {
  const [isAddedOn, setIsAddedOn] = useState({
    isOnline: false,
    isLarger: false,
    isCustom: false,
  });

  const handleOnlineChange = (e) => {
    if (e.target.checked) {
      setIsAddedOn((prevAddOns) => ({
        ...prevAddOns,
        isOnline: true,
      }));
      return;
    }
    setIsAddedOn((prevAddOns) => ({
      ...prevAddOns,
      isOnline: false,
    }));
  };

  const handleStorageChange = (e) => {
    if (e.target.checked) {
      setIsAddedOn((prevAddOns) => ({
        ...prevAddOns,
        isLarger: true,
      }));
      return;
    }
    setIsAddedOn((prevAddOns) => ({
      ...prevAddOns,
      isLarger: false,
    }));
  };

  const handleCustomChange = (e) => {
    if (e.target.checked) {
      setIsAddedOn((prevAddOns) => ({
        ...prevAddOns,
        isCustom: true,
      }));
      return;
    }
    setIsAddedOn((prevAddOns) => ({
      ...prevAddOns,
      isCustom: false,
    }));
  };

  return (
    <div className="add">
      <Header
        title={"Pick add-ons"}
        text={"Add-ons help enhance your gaming experience."}
      />
      <div className="add__options">
        <div
          className="add__option"
          style={isAddedOn.isOnline ? optionBorderStyle : null}
        >
          <div className="option-left">
            <input type="checkbox" onChange={handleOnlineChange} />
            <div className="add__option-info">
              <div className="option__info-title">Online service</div>
              <div className="option__info-text">
                Access to multiplayer games
              </div>
            </div>
          </div>
          <div className="add__price">+$1/mo</div>
        </div>

        <div
          className="add__option"
          style={isAddedOn.isLarger ? optionBorderStyle : null}
        >
          <div className="option-left">
            <input type="checkbox" onChange={handleStorageChange} />
            <div className="add__option-info">
              <div className="option__info-title">Larger storage</div>
              <div className="option__info-text">Extra 1TB of cloud save</div>
            </div>
          </div>
          <div className="add__price">+$2/mo</div>
        </div>

        <div
          className="add__option"
          style={isAddedOn.isCustom ? optionBorderStyle : null}
        >
          <div className="option-left">
            <input type="checkbox" onChange={handleCustomChange} />
            <div className="add__option-info">
              <div className="option__info-title">Customizable profile</div>
              <div className="option__info-text">
                Custom theme on your profile
              </div>
            </div>
          </div>
          <div className="add__price">+$2/mo</div>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
