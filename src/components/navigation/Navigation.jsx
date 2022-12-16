import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeTab } from "../../features/selectedTab/selectedTabSlice";
import "./Navigation.css";

const Navigation = () => {
  const selectedTab = useSelector((state) => state.selectedTab.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextPage = () => {
    if (selectedTab === "tab4") {
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
    <div className="nav">
      <button className="nav__button" onClick={() => nextPage()}>
        {selectedTab === "tab4" ? "Confirm" : "Next Step"}
      </button>
      <div className="nav__back" onClick={() => previousPage()}>
        {selectedTab === "tab1" ? "" : "Go Back"}
      </div>
    </div>
  );
};

export default Navigation;
