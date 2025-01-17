import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import "./CustomFunctionNode.css"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from '../Accordian/Accordian';


const CustomFunctionNode = ({ data }) => {
    const [val,setVal]=useState(false);
    const arr=["Functions 1","Functions 2","Functions 3","Functions 4"]
  return (
    <>
      <Handle type="target" position={Position.Top} />
     <div className='mainfunctioncustom'>
     <Accordion title="Functions" content={arr}/>
     </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default CustomFunctionNode;