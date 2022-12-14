import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "../../features/selectedTab/selectedTabSlice";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { useEffect } from "react";

const Sidebar = () => {
  const selectedTab = useSelector((state) => state.selectedTab.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(changeTab("tab1"));
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultStyle = {
    color: "var(--white)",
    backgroundColor: "transparent",
  };
  const activeStyle = {
    color: "var(--marine-blue)",
    backgroundColor: "var(--light-blue)",
  };
  return (
    <div className="sidebar">
      <div className="sidebar__nav">
        <div className="sidebar__nav-item">
          <div
            className="sidebar__nav-tab"
            style={selectedTab === "tab1" ? activeStyle : defaultStyle}
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
            style={selectedTab === "tab2" ? activeStyle : defaultStyle}
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
            style={selectedTab === "tab3" ? activeStyle : defaultStyle}
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
            style={selectedTab === "tab4" ? activeStyle : defaultStyle}
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
