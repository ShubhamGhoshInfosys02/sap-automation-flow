// import { togglePanel } from "../../redux/slices/startPanelSlice";
// import { useDispatch, useSelector } from "react-redux";

// const StartOperationsPanel = () => {
//   const isOpen = useSelector((state) => state.startPanelSlice.isOpen);
//   const dispatch = useDispatch();
//   return (
//     <div
//       style={{
//         width: "max-content",
//         height: "max-content",
//         padding: "8px",
//         marginTop: "10px",
//         borderRadius: "0 5px 5px 0",
//         backgroundColor: "#0070F2",
//         display: isOpen ? "flex" : "none",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "fixed",
//         zIndex: "3",
//         transition: "left 3s ease",
//         opacity: "1",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "100%",
//         }}
//       >
//         <span>Actions</span>
//         <IconButton onClick={() => dispatch(togglePanel())}>
//           <KeyboardDoubleArrowLeftIcon fontSize="medium" />
//         </IconButton>
//       </div>
//       <div></div>
//       <div></div>
//       <div></div>
//       StartOperationsPanel
//     </div>
//   );
// };

// export default StartOperationsPanel;
// src/SlidingPanel.js
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { togglePanel } from "../../redux/slices/startPanelSlice";
import { useDispatch, useSelector } from "react-redux";
import "./StartOperationsPanel.css"; // Import the CSS file for styles

const StartOperationsPanel = () => {
  const isOpen = useSelector((state) => state.startPanelSlice.isOpen);
  const dispatch = useDispatch();

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
        <div>Time Secheduler</div>
        <div>Server Selection</div>
        <div>Start</div>
      </div>
    </div>
  );
};

export default StartOperationsPanel;
