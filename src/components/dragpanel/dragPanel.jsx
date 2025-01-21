import React from "react";
import DragableComp from "../dragablecomp/dragablecomp";
import { useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";
import { dragPanelOff } from "../../redux/action/actions";

const DragPanel = () => {

    const arr=["ServerNames", "StartTime", "StartButton"]
    const dragPanelValue=useSelector((state)=>state)
    const dispatch=useDispatch();

  return (
    <div>
       {dragPanelValue &&  <div
      style={{
        width: "300px",
        borderRight: "1px solid #ccc",
        height: "calc(100vh - 5.5rem - 4px)",
        overflowY: "scroll",
      }}
    >
     <div style={{margin:"10px"}} onClick={()=>dispatch(dragPanelOff())}><CloseIcon /></div>
     <div style={{ display:"flex",
        justifyContent:"center",}}>
     <DragableComp value={arr} />
     </div>
    </div>}
    </div>
  );
};

export default DragPanel;
