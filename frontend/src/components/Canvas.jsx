// src/components/Canvas.jsx
import React, { useCallback, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

import EditableBlockNode from "./nodes/EditableBlockNode";

export const CanvasInner = ({ nodeTypes: builtInNodeTypes = {} }) => {
  const nodeTypes = {
    rsi: EditableBlockNode,
    movingAverage: EditableBlockNode,
    bollingerBands: EditableBlockNode,
    stopLoss: EditableBlockNode,
    takeProfit: EditableBlockNode,
    buyOrder: EditableBlockNode,
    sellOrder: EditableBlockNode,
    stopOrder: EditableBlockNode,
    customLogic: EditableBlockNode,
    marketData: EditableBlockNode,
  };

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [modalNode, setModalNode] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      let block;
      try {
        block = JSON.parse(e.dataTransfer.getData("application/reactflow"));
      } catch {
        return;
      }
      if (!block?.type) return;

      const bounds = e.currentTarget.getBoundingClientRect();
      const position = {
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      };

      const newNode = {
        id: `${Date.now()}`,
        type: block.type,
        position,
        data: { ...block.data, label: block.label },
      };
      setNodes((nds) => [...nds, newNode]);
    },
    [setNodes]
  );

  const handleDelete = useCallback(
    (id) => {
      setNodes((nds) => nds.filter((n) => n.id !== id));
      setEdges((eds) => eds.filter((e) => e.source !== id && e.target !== id));
    },
    [setNodes, setEdges]
  );

  const handleSaveInput = useCallback(() => {
    if (!modalNode) return;
    setNodes((nds) =>
      nds.map((n) =>
        n.id === modalNode.id ? { ...n, data: { ...n.data, inputValue } } : n
      )
    );
    setModalNode(null);
    setInputValue("");
  }, [modalNode, inputValue, setNodes]);

  return (
    <div className="flex-1 relative" onDrop={onDrop} onDragOver={onDragOver}>
      <ReactFlow
        nodes={nodes.map((n) => ({
          ...n,
          data: {
            ...n.data,
            onEdit: () => setModalNode(n),
            onDelete: () => handleDelete(n.id),
          },
        }))}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(_, node) => {
          setModalNode(node);
          setInputValue(node?.data?.inputValue || "");
        }}
        nodeTypes={Object.fromEntries(
          Object.keys(builtInNodeTypes).map((t) => [t, EditableBlockNode])
        )}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>

      {/* DaisyUI Modal */}
      {modalNode && (
        <dialog id="config_modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-2">
              Configure: {modalNode.data?.label || modalNode.type}
            </h3>
            <input
              type="text"
              placeholder="Enter strategy input (e.g., RSI period)"
              className="input input-bordered w-full mb-4"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="modal-action">
              <button className="btn btn-primary" onClick={handleSaveInput}>
                Save
              </button>
              <button
                className="btn"
                onClick={() => {
                  setModalNode(null);
                  setInputValue("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export const Canvas = ({ nodeTypes }) => (
  <ReactFlowProvider>
    <CanvasInner nodeTypes={nodeTypes} />
  </ReactFlowProvider>
);
