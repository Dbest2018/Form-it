import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setError } from "../../features/formInfo/formInfoSlice";
import { changeTab } from "../../features/selectedTab/selectedTabSlice";
import "./Navigation.css";

const Navigation = () => {
  const [isDone, setIsDone] = useState(false);
  const selectedTab = useSelector((state) => state.selectedTab.value);
  const formInfo = useSelector((state) => state.formInfo.value);
  const selectedPlan = useSelector((state) => state.selectedPlan.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextPage = () => {
    if (selectedTab === "tab4") {
      setIsDone(true);
      navigate("/end");
      return;
    }
    if (selectedTab === "tab2" && JSON.stringify(selectedPlan) === "{}") {
      return;
    }
    if (
      formInfo.phone === "" ||
      formInfo.email === "" ||
      formInfo.name === ""
    ) {
      dispatch(setError(true));
      return;
    }
    switch (selectedTab) {
      case "tab1":
        dispatch(changeTab("tab2"));
        navigate("/plan");
        break;
      case "tab2":
        dispatch(changeTab("tab3"));
        navigate("/addons");
        break;
      case "tab3":
        dispatch(changeTab("tab4"));
        navigate("/summary");
        break;
      default:
        dispatch(changeTab("tab1"));
        navigate("/");
    }
  };

  const previousPage = () => {
    if (selectedTab === "tab1") {
      return;
    }
    switch (selectedTab) {
      case "tab2":
        dispatch(changeTab("tab1"));
        navigate("/");
        break;
      case "tab3":
        dispatch(changeTab("tab2"));
        navigate("/plan");
        break;
      case "tab4":
        dispatch(changeTab("tab3"));
        navigate("/addons");
        break;
      default:
        dispatch(changeTab("tab1"));
        navigate("/");
    }
  };
  return (
    <>
      {!isDone && (
        <div className="nav">
          <button className="nav__button" onClick={() => nextPage()}>
            {selectedTab === "tab4" ? "Confirm" : "Next Step"}
          </button>
          <div className="nav__back" onClick={() => previousPage()}>
            {selectedTab === "tab1" ? "" : "Go Back"}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
