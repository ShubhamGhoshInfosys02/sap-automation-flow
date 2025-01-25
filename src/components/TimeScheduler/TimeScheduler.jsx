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
      <div style={{ padding: "2px 5px", backgroundColor: "#FFF8DC" }}>
        <div>Select Date and Time</div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="date"
            value={selectedDateTime.date}
            onChange={handleDateChange}
            style={{ marginRight: "10px" }}
          />
          <input
            type="time"
            id="time"
            name="time"
            value={selectedDateTime.time}
            onChange={handleTimeChange}
          ></input>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export default TimeScheduler;
