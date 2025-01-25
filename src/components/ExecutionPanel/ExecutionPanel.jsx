import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { toggleExecutePanel } from "../../redux/slices/startPanelSlice";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import "./ExecutionPanel.css";
const ExecutionPanel = () => {
  const isOpen = useSelector((state) => state.startPanelSlice.isExecuteOpen);
  const dispatch = useDispatch();
  const reduxNode = useSelector((state) => state.startPanelSlice.nodes);
  console.log("reduxNode", reduxNode);
  return (
    <div className="econtainer">
      <div className={`epanel ${isOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3>Execution Process</h3>
          <IconButton onClick={() => dispatch(toggleExecutePanel())}>
            <KeyboardDoubleArrowRightIcon fontSize="medium" />
          </IconButton>
        </div>
        <Card className="ecardStyle">Time Secheduler</Card>
        <Card className="ecardStyle">Server Selection</Card>
        <Card className="ecardStyle">Start</Card>
      </div>
    </div>
  );
};

export default ExecutionPanel;
