import { Divider } from "@mui/material";
import { togglePanel } from "../../redux/slices/startPanelSlice";
import { useDispatch } from "react-redux";
import "./OperationsPanel.css";

const tasks = [
  {
    name: "Landscape Start Stop using centralized command center - enable",
    components: ["Start"],
  },
  { name: "SAP Pre and Post Copy automation" },
  { name: "OS Level Alert for SAP File system" },
  { name: "HANA Level Alerting" },
  { name: "SAP Daily System Monitoring for various Tcodes" },
  { name: "SAP client level reporting on Client Open / Close status" },
  { name: "SAP client opening/ closing from Centralized deck" },
  { name: "Landscape wise SAP SP pack level reporting and comparing" },
  { name: "File system growth utilization forecasting" },
  { name: "Automated TR retrofit during Parallel Landscape" },
  { name: "Automated Maintenance Certificate renewal" },
  { name: "HANA DB and CLIENT Upgrade" },
  { name: "TR comparing between DEV / QA/ PRD" },
  { name: "Delete Obsolete and deprecated users in system" },
  { name: "Overall System Health Status Dashboard" },
  { name: "Kernel Upgrade" },
  { name: "VM Provisioning and VM Monitoring in Cloud" },
  { name: "Automated Strust Certificate Renewal" },
  {
    name: "Client setting logs for monthly report. Automate process of SCC4 logs reporting.",
  },
  { name: "Cleanup Scripts for various Directories" },
  { name: "SAP Upgrade/ Migration Readiness Check from Basis/Infra side" },
];

const OperationsPanel = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "300px",
        borderRight: "1px solid #ccc",
        backgroundColor: "##F5F6F7",
        height: "calc(100vh - 5.5rem - 4px)",
        overflowY: "scroll",
      }}
    >
      {tasks.map((task, index) => (
        <div key={`parent-${task}-${index}`}>
          <div
            key={`${task}-${index}`}
            onClick={() => dispatch(togglePanel())}
            className={`options ${index > 0 ? "disabled" : ""}`}
          >
            {task.name}
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default OperationsPanel;
