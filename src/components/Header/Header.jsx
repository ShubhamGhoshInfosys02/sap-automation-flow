import "./Header.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {
  toggleExecutePanel,
  discard,
  updateSelectedServer,
  updateNodes,
} from "../../redux/slices/startPanelSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="main">
        <div className="mainone">
          <div className="mainoneimg">
            {" "}
            <ArrowBackIosNewIcon />
          </div>
          <p className="mainonetitle">SAP Automation</p>
        </div>
        <div className="maintwo">
          <p>Diagram View</p>
        </div>
        <div className="mainthree">
          <button
            className="mainthreebutton1"
            onClick={() => {
              dispatch(updateNodes([]))
              dispatch(updateSelectedServer([]))
              dispatch(discard())}}
          >
            Discard
          </button>
          <button
            className="mainthreebutton2"
            onClick={() => {
              
              dispatch(toggleExecutePanel())}}
          >
            Execute
          </button>
        </div>
      </div>
      <div
        style={{ height: "2px", width: "100%", backgroundColor: "#ccc" }}
      ></div>
    </div>
  );
};

export default Header;
