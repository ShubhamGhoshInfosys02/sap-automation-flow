import "./App.css";
import ReactFlowUI from "./components/ReactFlowUI/ReactFlowUI";
import OperationsPanel from "./components/OperationsPanel/OperationsPanel";
import Header from "./components/Header/Header";
import TextUpdaterNode from "./components/CustomNode/CustomNode";
import OperationsLeftPanel from "./components/OperationsLeftPanel/OperationsLeftPanel";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <OperationsPanel />
        <ReactFlowUI />
       <OperationsLeftPanel/>
      </div>
    </>
  );
}

export default App;
