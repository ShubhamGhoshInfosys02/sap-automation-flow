import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const tasks = [
  "Landscape Start Stop using centralized command center - enable",
  "SAP Pre and Post Copy automation",
  "OS Level Alert for SAP File system",
  "HANA Level Alerting",
  "SAP Daily System Monitoring for various Tcodes",
  "SAP client level reporting on Client Open / Close status",
  "SAP client opening/ closing from Centralized deck",
  "Landscape wise SAP SP pack level reporting and comparing",
  "File system growth utilization forecasting",
  "Automated TR retrofit during Parallel Landscape",
  "Automated Maintenance Certificate renewal",
  "HANA DB and CLIENT Upgrade",
  "TR comparing between DEV / QA/ PRD",
  "Delete Obsolete and deprecated users in system",
  "Overall System Health Status Dashboard",
  "Kernel Upgrade",
  "VM Provisioning and VM Monitoring in Cloud",
  "Automated Strust Certificate Renewal",
  "Client setting logs for monthly report. Automate process of SCC4 logs reporting.",
  "Cleanup Scripts for various Directories",
  "SAP Upgrade/ Migration Readiness Check from Basis/Infra side",
];

const OperationsPanel = () => {
  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        borderRight: "1px solid #ccc",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      {tasks.map((task, index) => (
        <Accordion key={index} disabled={index !== 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{task}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {/* You can add more details or actions related to each task here */}
              Details about {task}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default OperationsPanel;
