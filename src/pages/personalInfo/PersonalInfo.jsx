import { useSelector, useDispatch } from "react-redux";
import {
  addName,
  addEmail,
  addPhone,
  setError,
} from "../../features/formInfo/formInfoSlice";
import Header from "../../components/header/Header";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const formInfo = useSelector((state) => state.formInfo.value);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(setError(false));
    dispatch(addName(e.target.value));
  };
  const handleEmailChange = (e) => {
    dispatch(setError(false));
    dispatch(addEmail(e.target.value));
  };
  const handlePhoneChange = (e) => {
    dispatch(setError(false));
    dispatch(addPhone(e.target.value));
  };
  return (
    <div className="personalInfo">
      <Header
        title={"Personal info"}
        text={"Please provide your name, email address, and phone number."}
      />
      <form className="info__form">
        <div className="form-item">
          <div className="form-info">
            <div className="form-text">Name</div>
            {formInfo.error && formInfo.name === "" && (
              <div className="form-error">This field is required</div>
            )}
          </div>
          <input
            value={formInfo.name}
            className="form-input"
            type="text"
            placeholder="e.g.Stephen King"
            onChange={handleNameChange}
          />
        </div>
        <div className="form-item">
          <div className="form-info">
            <div className="form-text">Email Address</div>
            {formInfo.error && formInfo.email === "" && (
              <div className="form-error">This field is required</div>
            )}
          </div>
          <input
            value={formInfo.email}
            className="form-input"
            type="email"
            placeholder="e.g.stephenking@lorem.com"
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-item">
          <div className="form-info">
            <div className="form-text">Phone Number</div>
            {formInfo.error && formInfo.phone === "" && (
              <div className="form-error">This field is required</div>
            )}
          </div>
          <input
            value={formInfo.phone}
            className="form-input"
            type="number"
            placeholder="e.g.+1 234 567 890"
            onChange={handlePhoneChange}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
