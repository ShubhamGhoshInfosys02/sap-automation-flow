import "./App.css";
import ReactFlowUI from "./components/ReactFlowUI/ReactFlowUI";
import OperationsPanel from "./components/OperationsPanel/OperationsPanel";
import Header from "./components/Header/Header";
import StartOperationsPanel from "./components/StartOperationsPanel/StartOperationsPanel";
import ExecutionPanel from "./components/ExecutionPanel/ExecutionPanel";

function App() {
  return (
    // <Provider store={store}>
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
        <StartOperationsPanel />
        <ExecutionPanel />
        <ReactFlowUI />
      </div>
    </>
    // </Provider>
  );
}

export default App;
