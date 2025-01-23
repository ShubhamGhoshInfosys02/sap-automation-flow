import { useCallback, useEffect } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomButtonNode from "../CustomNode/CustomNode";
import CustomFunctionNode from "../CustomFunctionNode/CustomFunctionNode";
import TimeScheduler from "../TimeScheduler/TimeScheduler";
import { updateNodes, updateEdges } from "../../redux/slices/startPanelSlice";
import { useDispatch } from "react-redux";
const initialNodes = [];

const nodeTypes = {
  customUpdater: CustomButtonNode,
  customFunctionUpdater: CustomFunctionNode,
  customTimeUpdater: TimeScheduler,
};

export default function App() {
  const dispatch = useDispatch();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const proOptions = { hideAttribution: true };
  useEffect(() => {
    dispatch(updateNodes(nodes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes]);
  useEffect(() => {
    dispatch(updateEdges(edges));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edges]);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const onDrop = (event) => {
    event.preventDefault();
    const data = JSON.parse(
      event.dataTransfer.getData("application/reactflow")
    );
    console.log("dropped data", data.componentType);
    if (!data) {
      console.error("No data found in dataTransfer");
      return;
    }
    let type = "";
    if (data.componentType == "TimeSecheduler") {
      type = "customTimeUpdater";
    } else if (data.componentType == "ServerSelection") {
      type = "customFunctionUpdater";
    } else if (data.componentType == "Start") {
      type = "customUpdater";
    } else {
      return;
    }
    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: type,
      position: { x: event.clientX + 50, y: event.clientY + 50 },
      data: {
        label: `node-${nodes.length + 1}`,
        value: {},
      },
    };

    setNodes((prevNodes) => prevNodes.concat(newNode));
  };

  console.log("nodes", nodes);
  console.log("edges", edges);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  return (
    <div
      style={{
        width: "calc(100vw - 300px)",
        height: "calc(100vh - 5.5rem - 42px)",
        position: "relative",
      }}
    >
      <ReactFlow
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        fitView
      >
        <Controls />
        <Background variant="dots" />
      </ReactFlow>
    </div>
  );
}
