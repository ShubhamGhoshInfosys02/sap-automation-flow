/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import "./CustomNode.css";
import { updateNodeValue } from "../../redux/slices/startPanelSlice";
import { useDispatch } from "react-redux";

const TimeScheduler = ({ data }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(
    data?.value ?? { date: "", time: "" }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateNodeValue({ ...data, value: selectedDateTime }));
  }, [selectedDateTime]);

  const handleDateChange = (e) => {
    setSelectedDateTime({ date: e.target.value, time: selectedDateTime.time });
  };
  const handleTimeChange = (e) => {
    setSelectedDateTime({ date: selectedDateTime.date, time: e.target.value });
  };

  return (
    <>
      <div
        style={{
          paddingTop:"10px",
          paddingBottom:"5px",
          paddingLeft:"15px",
          paddingRight:"15px",
          backgroundColor: "white",
          boxShadow: "0px 0px 20px 1px rgb(187, 186, 186)",
          borderRadius: "10px",
          fontWeight: "600"
        }}
      >
        <div style={{paddingBottom:"10px"}}>Select Date and Time</div>
        <div style={{ marginBottom: "20px"}}>
          <input
            type="date"
            value={selectedDateTime.date}
            onChange={handleDateChange}
            style={{ marginRight: "10px" ,padding:"3px",border: "1px solid rgb(30, 159, 233)",borderRadius: "10px"}}
          />
          <input
            type="time"
            id="time"
            name="time"
            value={selectedDateTime.time}
            onChange={handleTimeChange}
            style={{padding:"2px",border: "1px solid rgb(30, 159, 233)",borderRadius: "10px"}}
          ></input>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default TimeScheduler;
