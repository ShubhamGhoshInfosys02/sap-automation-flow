/* eslint-disable react/prop-types */
import { Handle, Position } from "@xyflow/react";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import "./CustomNode.css";

const StopNode = ({ data }) => {
  console.log("start data", data);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="maincustom">
        <p>Stop</p>
        <DoDisturbIcon fontSize="medium" color="error" />
      </div>
    </>
  );
};

export default StopNode;
