import "./App.css";
import ReactFlowUI from "./components/ReactFlowUI/ReactFlowUI";
import OperationsPanel from "./components/OperationsPanel/OperationsPanel";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <OperationsPanel />
        <ReactFlowUI />
      </div>
    </>
  );
}

export default App;
