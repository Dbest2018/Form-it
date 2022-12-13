import React from "react";
import Header from "../../components/header/Header";
import "./AddOns.css";

const AddOns = () => {
  return (
    <div className="add">
      <Header
        title={"Pick add-ons"}
        text={"Add-ons help enhance your gaming experience."}
      />
      <div className="add__options">
        <div className="add__option">
          <div className="option-left">
            <input type="checkbox" />
            <div className="add__option-info">
              <div className="option__info-title">Online service</div>
              <div className="option__info-text">
                Access to multiplayer games
              </div>
            </div>
          </div>
          <div className="add__price">+$1/mo</div>
        </div>

        <div className="add__option">
          <div className="option-left">
            <input type="checkbox" />
            <div className="add__option-info">
              <div className="option__info-title">Larger storage</div>
              <div className="option__info-text">Extra 1TB of cloud save</div>
            </div>
          </div>
          <div className="add__price">+$2/mo</div>
        </div>

        <div className="add__option">
          <div className="option-left">
            <input type="checkbox" />
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
