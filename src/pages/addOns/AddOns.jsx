import { useState } from "react";
import Header from "../../components/header/Header";
import "./AddOns.css";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../../features/addOns/addOnsSlice";

import { optionBorderStyle } from "../plan/Plan";

const AddOns = () => {
  const [isAddedOn, setIsAddedOn] = useState({
    isOnline: false,
    isLarger: false,
    isCustom: false,
  });
  const addOns = useSelector((state) => state.addOns.value);
  const selectedPlan = useSelector((state) => state.selectedPlan.value);
  const dispatch = useDispatch();

  const handleOnlineChange = (e) => {
    const onlineServie = {
      name: "Online service",
      price: selectedPlan.type === "monthly" ? "+$1/mo" : "+$10/yr",
    };
    if (e.target.checked) {
      setIsAddedOn((prevAddOns) => ({
        ...prevAddOns,
        isOnline: true,
      }));
      dispatch(add(onlineServie));
      return;
    }
    setIsAddedOn((prevAddOns) => ({
      ...prevAddOns,
      isOnline: false,
    }));
    dispatch(remove(onlineServie));
  };

  const handleStorageChange = (e) => {
    const largerStorage = {
      name: "Larger storage",
      price: selectedPlan.type === "monthly" ? "+$2/mo" : "+$20/yr",
    };
    if (e.target.checked) {
      setIsAddedOn((prevAddOns) => ({
        ...prevAddOns,
        isLarger: true,
      }));
      dispatch(add(largerStorage));
      return;
    }
    setIsAddedOn((prevAddOns) => ({
      ...prevAddOns,
      isLarger: false,
    }));
    dispatch(remove(largerStorage));
  };

  const handleCustomChange = (e) => {
    const customProfile = {
      name: "Customizable Profile",
      price: selectedPlan.type === "monthly" ? "+$1/mo" : "+$10/yr",
    };
    if (e.target.checked) {
      setIsAddedOn((prevAddOns) => ({
        ...prevAddOns,
        isCustom: true,
      }));
      dispatch(add(customProfile));
      return;
    }
    setIsAddedOn((prevAddOns) => ({
      ...prevAddOns,
      isCustom: false,
    }));
    dispatch(remove(customProfile));
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
          <div className="add__price">
            {selectedPlan.type === "monthly" ? "+$1/mo" : "+$10/yr"}
          </div>
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
          <div className="add__price">
            {selectedPlan.type === "monthly" ? "+$2/mo" : "+$20/yr"}
          </div>
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
          <div className="add__price">
            {selectedPlan.type === "monthly" ? "+$2/mo" : "+$20/yr"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
