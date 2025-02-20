/* eslint-disable react/prop-types */
import { Handle, Position } from "@xyflow/react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import "./CustomNode.css";

const CustomButtonNode = ({ data }) => {
  console.log("start data", data);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div className="maincustom">
        <PlayCircleFilledWhiteIcon fontSize="medium" color="success" />
        <div>Start</div>
      </div>
    </>
  );
};

export default CustomButtonNode;
