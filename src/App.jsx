import "./App.css";
import ReactFlowUI from "./components/ReactFlowUI/ReactFlowUI";
import OperationsPanel from "./components/OperationsPanel/OperationsPanel";
import Header from "./components/Header/Header";
import TextUpdaterNode from "./components/CustomNode/CustomNode";
import OperationsLeftPanel from "./components/OperationsLeftPanel/OperationsLeftPanel";
import DragPanel from "./components/dragpanel/dragPanel";
import { Provider } from 'react-redux';
import store from "./redux/store";
import { useSelector } from "react-redux";

function App() {

  return (
    <Provider store={store}>
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
        <DragPanel/>
        <ReactFlowUI />
        <OperationsLeftPanel/>

      </div>
     
    </>
     </Provider>
  );
}

export default App;
