/* eslint-disable react-hooks/exhaustive-deps */
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
import StopNode from "../Stop/StopNode";
import { updateNodes, updateEdges } from "../../redux/slices/startPanelSlice";
import { useDispatch, useSelector } from "react-redux";

const nodeTypes = {
  customUpdater: CustomButtonNode,
  customFunctionUpdater: CustomFunctionNode,
  customTimeUpdater: TimeScheduler,
  stopComponent: StopNode,
};

export default function App() {
  const dispatch = useDispatch();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const reduxNode = useSelector((state) => state.startPanelSlice.nodes);
  const discard = useSelector((state) => state.startPanelSlice.discard);
  useEffect(() => {
    setNodes(reduxNode);
  }, [reduxNode]);

  const proOptions = { hideAttribution: true };
  useEffect(() => {
    dispatch(updateNodes(nodes));
  }, [nodes]);
  useEffect(() => {
    dispatch(updateEdges(edges));
  }, [edges]);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  useEffect(() => {
    setNodes([]);
    setEdges([]);
  }, [discard]);
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
    let value;
    if (data.componentType == "TimeSecheduler") {
      type = "customTimeUpdater";
      value = { date: "", time: "" };
    } else if (data.componentType == "ServerSelection") {
      type = "customFunctionUpdater";
      value = [];
    } else if (data.componentType == "Start") {
      type = "customUpdater";
      value = "Start";
    } else if (data.componentType == "Stop") {
      type = "stopComponent";
      value = "Stop";
    } else {
      return;
    }
    const newNode = {
      id: `node-${nodes.length + 1}`,
      type,
      position: { x: event.clientX, y: event.clientY },
      data: {
        label: `node-${nodes.length + 1}`,
        value,
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
        zoom={0.5}
      >
        <Controls />
        <Background variant="dots" />
      </ReactFlow>
    </div>
  );
}
