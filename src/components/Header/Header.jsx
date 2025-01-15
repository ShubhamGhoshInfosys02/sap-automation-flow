import React from "react";
import "./Header.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = () => {
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
          <button className="mainthreebutton1" onClick={()=>console.log("discord button clicked")}>Discard</button>
          <button className="mainthreebutton2" onClick={()=>console.log("Publish button clicked")}>Publish to Site</button>
        </div>
      </div>
      <div
        style={{ height: "2px", width: "100%", backgroundColor: "#ccc" }}
      ></div>
    </div>
  );
};

export default Header;
