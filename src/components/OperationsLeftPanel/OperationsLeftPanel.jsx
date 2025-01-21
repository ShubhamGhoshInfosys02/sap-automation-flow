import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const OperationsLeftPanel = () => {

  const [value,setValue]=useState(false);
  return (
    <div>
     {value==false? <div onClick={()=>setValue(true)}>
        <p
          style={{
            position: "absolute",
            marginLeft: "-90px",
            color: "white",
            backgroundColor: "black",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 10,
          }}
        >
          Run
        </p>
      </div>:
      <div
        style={{
          width: "300px",
          borderLeft: "1px solid #ccc",
          height: "calc(100vh - 5.5rem - 4px)",
          overflowY: "scroll",
        }}
      >
        <div style={{display:"flex",justifyContent:"flex-end",marginRight:"1rem",marginTop:"1rem"}} onClick={()=>setValue(false)}>
          <CloseIcon/>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ marginRight: "20px", fontSize: "30px" }}>Inbox</p>
          <MailIcon style={{ height: "40px", width: "40px" }} />
        </div>
        <div
          style={{
            display: "flex",
            paddingLeft: "10px",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p>Name :</p>
          <input
            type="text"
            placeholder="Enter the Name"
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            paddingLeft: "10px",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p>Email :</p>
          <input
            type="text"
            placeholder="Enter the Email"
            style={{ marginLeft: "5px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            paddingLeft: "10px",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p>RegID :</p>
          <input
            type="text"
            placeholder="Enter the ID"
            style={{ marginLeft: "5px" }}
          />
        </div>
      </div>}
    </div>
  );
};

export default OperationsLeftPanel;
