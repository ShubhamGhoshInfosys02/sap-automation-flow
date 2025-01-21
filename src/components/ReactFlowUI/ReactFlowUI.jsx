import React, { useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import CustomButtonNode from "../CustomNode/CustomNode";
import CustomFunctionNode from "../CustomFunctionNode/CustomFunctionNode";

const initialNodes = [
  { id: "1",type: 'customUpdater', position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2",type: 'customFunctionUpdater', position: { x: 0, y: 100 }, data: { label: "2" } },
  { id: "3",type: 'customUpdater', position: { x: 0, y: 200 }, data: { label: "3" } },
];

const nodeTypes = { customUpdater: CustomButtonNode,customFunctionUpdater:CustomFunctionNode };

// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];
const initialEdges = [];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const proOptions = { hideAttribution: true };
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  

  return (
    <div
      style={{
        width: "calc(100vw - 300px)",
        height: "calc(100vh - 5.5rem - 42px)",
        position:"relative"
      }}
    >
      <ReactFlow
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
        {/* <MiniMap zoomable pannable /> */}
        <Background variant="dots" />
      </ReactFlow>
    </div>
  );
}
