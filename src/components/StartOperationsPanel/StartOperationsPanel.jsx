import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { togglePanel } from "../../redux/slices/startPanelSlice";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import "./StartOperationsPanel.css"; // Import the CSS file for styles

const StartOperationsPanel = () => {
  const isOpen = useSelector((state) => state.startPanelSlice.isOpen);
  const dispatch = useDispatch();
  const onDragStart = (event, componentType) => {
    const itemData = { componentType }; // Data to be sent
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(itemData)
    );
    event.dataTransfer.effectAllowed = "move"; // Indicate that the item can be moved
  };

  return (
    <div className="container">
      <div className={`panel ${isOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3>Actions</h3>
          <IconButton onClick={() => dispatch(togglePanel())}>
            <KeyboardDoubleArrowLeftIcon fontSize="medium" />
          </IconButton>
        </div>
        <Card
          className="cardStyle"
          draggable
          onDragStart={(e) => onDragStart(e, "TimeSecheduler")}
        >
          Time Secheduler
        </Card>
        <Card
          className="cardStyle"
          draggable
          onDragStart={(e) => onDragStart(e, "ServerSelection")}
        >
          Server Selection
        </Card>
        <Card
          className="cardStyle"
          draggable
          onDragStart={(e) => onDragStart(e, "Start")}
        >
          Start
        </Card>
      </div>
    </div>
  );
};

export default StartOperationsPanel;
