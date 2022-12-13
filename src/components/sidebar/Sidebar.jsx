import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState({ tab1: true });
  const navigate = useNavigate();

  const defaultStyle = {
    color: "var(--white)",
    backgroundColor: "transparent",
  };
  const activeStyle = {
    color: "var(--marine-blue)",
    backgroundColor: "var(--light-blue)",
  };
  const setActive = (tab) => {
    if (selectedTab.tab) {
      return;
    }
    setSelectedTab({
      [tab]: true,
    });
    switch (tab) {
      case "tab1":
        navigate("/");
        break;
      case "tab2":
        navigate("/plan");
        break;
      case "tab3":
        navigate("/addons");
        break;
      case "tab4":
        navigate("/summary");
        break;
      default:
        navigate("/");
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__nav">
        <div className="sidebar__nav-item">
          <div
            className="sidebar__nav-tab"
            style={selectedTab.tab1 ? activeStyle : defaultStyle}
            onClick={() => setActive("tab1")}
          >
            1
          </div>
          <div className="sidebar__nav-info">
            <div className="sidebar-step">STEP 1</div>
            <div className="sidebar-title">YOUR INFO</div>
          </div>
        </div>
        <div className="sidebar__nav-item">
          <div
            className="sidebar__nav-tab"
            style={selectedTab.tab2 ? activeStyle : defaultStyle}
            onClick={() => setActive("tab2")}
          >
            2
          </div>
          <div className="sidebar__nav-info">
            <div className="sidebar-step">STEP 2</div>
            <div className="sidebar-title">SELECT PLAN</div>
          </div>
        </div>
        <div className="sidebar__nav-item">
          <div
            className="sidebar__nav-tab"
            style={selectedTab.tab3 ? activeStyle : defaultStyle}
            onClick={() => setActive("tab3")}
          >
            3
          </div>
          <div className="sidebar__nav-info">
            <div className="sidebar-step">STEP 3</div>
            <div className="sidebar-title">ADD-ONS</div>
          </div>
        </div>
        <div className="sidebar__nav-item">
          <div
            className="sidebar__nav-tab"
            style={selectedTab.tab4 ? activeStyle : defaultStyle}
            onClick={() => setActive("tab4")}
          >
            4
          </div>
          <div className="sidebar__nav-info">
            <div className="sidebar-step">STEP 4</div>
            <div className="sidebar-title">SUMMARY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;