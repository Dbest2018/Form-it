import React from "react";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <div className="personalInfo">
      <div className="info__title">Personal info</div>
      <div className="info__text">
        Please provide your name, email address, and phone number.
      </div>
      <form className="info__form">
        <div className="form-item">
          <div className="form-text">Name</div>
          <input
            className="form-input"
            type="text"
            placeholder="e.g.Stephen King"
          />
        </div>
        <div className="form-item">
          <div className="form-text">Email Address</div>
          <input
            className="form-input"
            type="email"
            placeholder="e.g.stephenking@lorem.com"
          />
        </div>
        <div className="form-item">
          <div className="form-text">Phone Number</div>
          <input
            className="form-input"
            type="number"
            placeholder="e.g.+1 234 567 890"
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;