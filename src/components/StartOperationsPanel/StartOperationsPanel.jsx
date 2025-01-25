import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StorageIcon from "@mui/icons-material/Storage";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
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
          <DragIndicatorIcon style={{ fill: "#D3D3D3" }} />
          <AccessTimeIcon color="info" />
          <div className="cardNameDescSection">
            <div className="cardName">Time Secheduler</div>
            <div className="cardDesc">Description : decription here</div>
          </div>
        </Card>
        <Card
          className="cardStyle"
          draggable
          onDragStart={(e) => onDragStart(e, "ServerSelection")}
        >
          <DragIndicatorIcon style={{ fill: "#D3D3D3" }} />
          <StorageIcon color="info" />
          <div className="cardNameDescSection">
            <div className="cardName">Server Selection</div>
            <div className="cardDesc">Description : decription here</div>
          </div>
        </Card>
        <Card
          className="cardStyle"
          draggable
          onDragStart={(e) => onDragStart(e, "Start")}
        >
          <DragIndicatorIcon style={{ fill: "#D3D3D3" }} />
          <PlayCircleOutlineIcon color="success" />
          <div className="cardNameDescSection">
            <div className="cardName">Start</div>
            <div className="cardDesc">Description : decription here</div>
          </div>
        </Card>
        <Card
          className="cardStyle"
          draggable
          onDragStart={(e) => onDragStart(e, "Start")}
        >
          <DragIndicatorIcon style={{ fill: "#D3D3D3" }} />
          <DoDisturbIcon color="error" />
          <div className="cardNameDescSection">
            <div className="cardName">Stop</div>
            <div className="cardDesc">Description : decription here</div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StartOperationsPanel;
