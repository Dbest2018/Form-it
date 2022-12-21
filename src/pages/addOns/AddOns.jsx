import { useState, useEffect } from "react";
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
  useEffect(() => {
    addOns.forEach((addOn) => {
      if (addOn.isChecked === "online") {
        setIsAddedOn((prevAddOns) => ({
          ...prevAddOns,
          isOnline: true,
        }));
      }
      if (addOn.isChecked === "larger") {
        setIsAddedOn((prevAddOns) => ({
          ...prevAddOns,
          isLarger: true,
        }));
      }
      if (addOn.isChecked === "custom") {
        setIsAddedOn((prevAddOns) => ({
          ...prevAddOns,
          isCustom: true,
        }));
      }
    });
  }, [addOns]);
  const selectedPlan = useSelector((state) => state.selectedPlan.value);
  const dispatch = useDispatch();

  const price = {
    online: selectedPlan.type === "yearly" ? 10 : 1,
    storage: selectedPlan.type === "yearly" ? 20 : 2,
    custom: selectedPlan.type === "yearly" ? 20 : 2,
  };

  const handleOnlineChange = (e) => {
    const onlineServie = {
      isChecked: "online",
      name: "Online service",
      price: price.online,
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
      isChecked: "larger",
      name: "Larger storage",
      price: price.storage,
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
      price: price.custom,
      isChecked: "custom",
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
            <input
              checked={isAddedOn.isOnline}
              type="checkbox"
              onChange={handleOnlineChange}
            />
            <div className="add__option-info">
              <div className="option__info-title">Online service</div>
              <div className="option__info-text">
                Access to multiplayer games
              </div>
            </div>
          </div>
          <div className="add__price">{`$${price.online}/${
            selectedPlan.type === "yearly" ? "yr" : "mo"
          }`}</div>
        </div>

        <div
          className="add__option"
          style={isAddedOn.isLarger ? optionBorderStyle : null}
        >
          <div className="option-left">
            <input
              checked={isAddedOn.isLarger}
              type="checkbox"
              onChange={handleStorageChange}
            />
            <div className="add__option-info">
              <div className="option__info-title">Larger storage</div>
              <div className="option__info-text">Extra 1TB of cloud save</div>
            </div>
          </div>
          <div className="add__price">{`$${price.storage}/${
            selectedPlan.type === "yearly" ? "yr" : "mo"
          }`}</div>
        </div>

        <div
          className="add__option"
          style={isAddedOn.isCustom ? optionBorderStyle : null}
        >
          <div className="option-left">
            <input
              checked={isAddedOn.isCustom}
              type="checkbox"
              onChange={handleCustomChange}
            />
            <div className="add__option-info">
              <div className="option__info-title">Customizable profile</div>
              <div className="option__info-text">
                Custom theme on your profile
              </div>
            </div>
          </div>
          <div className="add__price">{`$${price.custom}/${
            selectedPlan.type === "yearly" ? "yr" : "mo"
          }`}</div>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
