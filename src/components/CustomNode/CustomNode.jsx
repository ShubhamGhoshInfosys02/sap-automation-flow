import { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import "./CustomNode.css";

const CustomButtonNode = () => {
  const [val, setVal] = useState(false);
  const handleClick = () => {
    setVal(!val);
    console.log("Button clicked!");
  };

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="maincustom">
        <p style={{ paddingLeft: "10px" }}>{val ? "Stop" : "Start"}</p>
        <a onClick={handleClick}>
          {val ? (
            <StopCircleIcon className="customimg" />
          ) : (
            <PlayCircleFilledWhiteIcon className="customimg" />
          )}
        </a>
      </div>
    </>
  );
};

export default CustomButtonNode;
