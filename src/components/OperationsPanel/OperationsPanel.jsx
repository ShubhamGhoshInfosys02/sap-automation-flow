import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const tasks = [
  {
    name: "Landscape Start Stop using centralized command center - enable",
    components: ["Start", "Stop"],
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
  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        borderRight: "1px solid #ccc",
        height: "calc(100vh - 5.5rem - 4px)",
        overflowY: "scroll",
      }}
    >
      {tasks.map((task, index) => (
        <Accordion key={index} disabled={index !== 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{task.name}</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {task?.components && task?.components.length > 0 ? (
              task?.components.map((component, cindex) => (
                <Button
                  style={{ width: "100%", marginBottom: "2px" }}
                  key={`${component}-${cindex}`}
                  variant="outlined"
                  color={component == "Start" ? "success" : "error"}
                >
                  {component}
                </Button>
              ))
            ) : (
              <Typography>Components coming soon.</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default OperationsPanel;
