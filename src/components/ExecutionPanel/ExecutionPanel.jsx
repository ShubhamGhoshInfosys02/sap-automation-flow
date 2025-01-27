/* eslint-disable react-hooks/exhaustive-deps */
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { toggleExecutePanel } from "../../redux/slices/startPanelSlice";
import { showNotification } from "../../redux/slices/notificatioSlice";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import "./ExecutionPanel.css";
import { useEffect, useMemo, useState } from "react";

const ExecutionPanel = () => {
  const isOpen = useSelector((state) => state.startPanelSlice.isExecuteOpen);
  const dispatch = useDispatch();
  const reduxNode = useSelector((state) => state.startPanelSlice.nodes);

  const [executionData, setexecutionData] = useState({
    dateTime: { date: "", time: "" },
    server: [],
    action: "",
  });
  const executeCommands = useMemo(() => {
    if (executionData.server && executionData.action == "Start") {
      return executionData.server.map(
        (d) => `ssh fsssadm@${d} sapcontrol -nr 00 -function GetProcessList`
      );
    } else if (executionData.server && executionData.action == "Stop") {
      return executionData.server.map(
        (d) => `sapcontrol -nr ${d} -function StartSystem`
      );
    }
    return [];
  }, [executionData]);
  const runPythonScript = async (scripts) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/run-scripts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ scripts }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Results:", data);
      dispatch(
        showNotification({ message: data.message, severity: data.status })
      );
    } catch (error) {
      console.error("Error running scripts:", error);
    }
  };
  useEffect(() => {
    const timeData = reduxNode.filter((d) => d.type == "customTimeUpdater");
    const serverData = reduxNode.filter(
      (d) => d.type == "customFunctionUpdater"
    );
    const startaction = reduxNode.filter((d) => d.type == "customUpdater");
    const stopAction = reduxNode.filter((d) => d.type == "stopComponent");
    const result = {
      dateTime: timeData[0]?.data?.value,
      server: serverData[0]?.data?.value,
      action:
        startaction.length > 0 ? "Start" : stopAction.length > 0 ? "Stop" : "",
    };
    setexecutionData(result);
  }, [reduxNode]);

  useEffect(() => {
    if (isOpen && executeCommands.length > 0) {
      runPythonScript(executeCommands);
    }
  }, [executeCommands, isOpen]);

  console.log("executeCommands", executeCommands);
  return (
    <div className="econtainer">
      <div className={`epanel ${isOpen ? "open" : ""}`}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h3>Execution Process</h3>
          <IconButton onClick={() => dispatch(toggleExecutePanel())}>
            <KeyboardDoubleArrowRightIcon fontSize="medium" />
          </IconButton>
        </div>
        <Card className="ecardStyle" >
          <div style={{display:"flex",justifyContent:"center"}}><p style={{fontSize:"20px",fontWeight:"bolder"}}>Time of Execution</p></div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginLeft:"10px",
              marginBottom:"10px"
            }}
          >
            <span style={{fontSize:"15px",fontWeight:"bolder",marginRight:"6px"}}>Date : </span>
            <span>
              {executionData?.dateTime?.date &&
              executionData?.dateTime?.date !== ""
                ? executionData?.dateTime?.date
                : "No date selected"}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
               marginLeft:"10px",
              marginBottom:"10px"
            }}
          >
            <span style={{fontSize:"15px",fontWeight:"bolder",marginRight:"6px"}}>Time :</span>
            <span>
              {executionData?.dateTime?.time &&
              executionData?.dateTime?.time !== ""
                ? executionData?.dateTime?.time
                : "No time selected"}
            </span>
          </div>
        </Card>
        <Card className="ecardStyle">
        <div style={{display:"flex",justifyContent:"center"}}><p style={{fontSize:"20px",fontWeight:"bolder"}}>Servers</p></div>
        {executionData.server && executionData.server.length > 0 ? (
            <div>
              {executionData.server.map((d,index) => (
                <div key={d} style={{display:'flex',flexDirection:"row"}}>
                  <p style={{fontSize:"15px",fontWeight:"bolder",marginRight:"6px",marginLeft:"10px"}}>Servername :</p><p>{d}</p></div>
              ))}
            </div>
          ) : (
            <div  style={{display:'flex',flexDirection:"row"}}>
                  <p style={{fontSize:"15px",fontWeight:"bolder",marginRight:"6px",marginLeft:"10px"}}>Servername :</p><p>No Servers Selected</p></div>
          )}
        </Card>
        <Card
          className="ecardStyle"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft:"10px",
            paddingTop:"10px",
            paddingBottom:"10px"
          }}
        >
          <span style={{fontSize:"15px",fontWeight:"bolder",marginRight:"6px"}}>Action :</span>
          <span>
            {executionData.action !== ""
              ? executionData.action
              : "No actions found"}
          </span>
        </Card>
        {executeCommands.length > 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            {executeCommands.map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ExecutionPanel;
