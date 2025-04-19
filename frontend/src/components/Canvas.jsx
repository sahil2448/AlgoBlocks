// import React, { useCallback } from 'react';
// import ReactFlow, {
//   ReactFlowProvider,
//   addEdge,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
// } from 'reactflow';
// import 'reactflow/dist/style.css';

// import { RSIBlock } from './nodes/RSIBlock';
// import { BuyOrderBlock } from './nodes/BuyOrderBlock';

// // Register custom node types
// const nodeTypes = {
//   rsi: RSIBlock,
//   buyOrder: BuyOrderBlock,
// };

// const CanvasInner = () => {
//   // Set up state for nodes and edges using React Flow hooks
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//   // Edge connection handler
//   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

//   // Allow drop event on the canvas
//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   }, []);

//   // Handle drop event: read node type from dataTransfer, create a new node on drop
//   const onDrop = useCallback((event) => {
//     event.preventDefault();

//     // Retrieve the node type from the dataTransfer object
//     const type = event.dataTransfer.getData('application/reactflow');
//     if (!type) return;

//     // Get the drop position relative to the react flow container
//     const reactFlowBounds = event.currentTarget.getBoundingClientRect();
//     const position = {
//       x: event.clientX - reactFlowBounds.left,
//       y: event.clientY - reactFlowBounds.top,
//     };

//     // Create a new node with a unique id
//     const newNode = {
//       id: `${+new Date()}`,
//       type, // e.g. 'rsi' or 'buyOrder'
//       position,
//       data: { label: `${type.toUpperCase()} Node` },
//     };

//     setNodes((nds) => [...nds, newNode]);
//   }, [setNodes]);

//   return (
//     <div className="w-full h-screen" onDrop={onDrop} onDragOver={onDragOver}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         nodeTypes={nodeTypes}
//         fitView
//       >
//         <Background color="#aaa" gap={16} />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// };

// export const Canvas = () => {
//   return (
//     <ReactFlowProvider>
//       <CanvasInner />
//     </ReactFlowProvider>
//   );
// };


// frontend/src/components/Canvas.jsx
// import React, { useCallback } from 'react';
// import ReactFlow, {
//   ReactFlowProvider,
//   addEdge,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
// } from 'reactflow';
// import 'reactflow/dist/style.css';

// import { RSIBlock } from './nodes/RSIBlock';
// import { BuyOrderBlock } from './nodes/BuyOrderBlock';
// // Import additional blocks as needed

// const nodeTypes = {
//   marketData: ({ data }) => <div className="p-4 bg-yellow-200 rounded shadow text-center">Market Data<br/>{data.label}</div>,
//   rsi: RSIBlock,
//   buyOrder: BuyOrderBlock,
// };

// const CanvasInner = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   }, []);

//   const onDrop = useCallback((event) => {
//     event.preventDefault();

//     const type = event.dataTransfer.getData('application/reactflow');
//     if (!type) return;

//     const reactFlowBounds = event.currentTarget.getBoundingClientRect();
//     const position = {
//       x: event.clientX - reactFlowBounds.left,
//       y: event.clientY - reactFlowBounds.top,
//     };

//     const newNode = {
//       id: `${+new Date()}`,
//       type, // 'marketData', 'rsi', or 'buyOrder'
//       position,
//       data: { label: `${type.toUpperCase()}` },
//     };

//     setNodes((nds) => [...nds, newNode]);
//   }, [setNodes]);

//   return (
//     <div className="flex-1 w-full h-screen" onDrop={onDrop} onDragOver={onDragOver}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         nodeTypes={nodeTypes}
//         fitView
//       >
//         <Background color="#aaa" gap={16} />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// };

// export const Canvas = () => {
//   return (
//     <ReactFlowProvider>
//       <CanvasInner />
//     </ReactFlowProvider>
//   );
// };

// src/components/Canvas.jsx
// import React, { useCallback } from 'react';
// import ReactFlow, {
//   ReactFlowProvider,
//   addEdge,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
// } from 'reactflow';
// import 'reactflow/dist/style.css';

// // Example custom nodes
// import { RSIBlock } from './nodes/RSIBlock';
// import { BuyOrderBlock } from './nodes/BuyOrderBlock';

// const nodeTypes = {
//   rsi: RSIBlock,
//   buyOrder: BuyOrderBlock,
//   marketData: ({ data }) => (
//     <div className="p-4 bg-yellow-100 border rounded text-center">
//       {data.label || 'Market Data'}
//     </div>
//   ),
// };

// export const CanvasInner = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   }, []);

//   const onDrop = useCallback(
//     (event) => {
//       event.preventDefault();
//       const nodeType = event.dataTransfer.getData('application/reactflow');
//       if (!nodeType) return;

//       const reactFlowBounds = event.currentTarget.getBoundingClientRect();
//       const position = {
//         x: event.clientX - reactFlowBounds.left,
//         y: event.clientY - reactFlowBounds.top,
//       };

//       const newNode = {
//         id: `${+new Date()}`,
//         type: nodeType,
//         position,
//         data: { label: nodeType.toUpperCase() },
//       };

//       setNodes((nds) => nds.concat(newNode));
//     },
//     [setNodes]
//   );

//   return (
//     <div className="flex-1 relative" onDrop={onDrop} onDragOver={onDragOver}>
//       <ReactFlow
//         nodeTypes={nodeTypes}
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         fitView
//       >
//         <Background />
//         <Controls showInteractive={false} />
//       </ReactFlow>

//       {/* Optional custom Zoom controls */}
//       <div className="absolute bottom-4 right-4 flex flex-col space-y-2 bg-white p-2 rounded shadow">
//         <button
//           onClick={() => {
//             // Zoom in logic
//           }}
//           className="px-2 py-1 bg-gray-300 rounded"
//         >
//           +
//         </button>
//         <button
//           onClick={() => {
//             // Zoom out logic
//           }}
//           className="px-2 py-1 bg-gray-300 rounded"
//         >
//           -
//         </button>
//       </div>
//     </div>
//   );
// };

// export const Canvas = () => (
//   <ReactFlowProvider>
//     <CanvasInner />
//   </ReactFlowProvider>
// );


// // src/components/Canvas.jsx
// import { Key } from 'lucide-react';
// import React, { useCallback } from 'react';
// import ReactFlow, {
//   ReactFlowProvider,
//   addEdge,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
// } from 'reactflow';
// import 'reactflow/dist/style.css';

// export const CanvasInner = ({ nodeTypes }) => {

//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);



//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   }, []);

//   const onDrop = useCallback(
//     (event) => {
//       event.preventDefault();
//       const type = event.dataTransfer.getData('application/reactflow');
//       const block = JSON.parse(event.dataTransfer.getData('application/reactflow'));

//       if (!type) return;

//       const bounds = event.currentTarget.getBoundingClientRect();
//       const position = {
//         x: event.clientX - bounds.left,
//         y: event.clientY - bounds.top,
//       };

//       // const newNode = {
//       //   id: `${+new Date()}`,
//       //   type,
//       //   position,
//       //   data: { label: type },
//       // };
//       const newNode = {
//         id: `${+new Date()}`,
//         type: block.type,      // use the type for nodeTypes to render
//         position,
//         data: { ...block.data, label: block.label },  // pass label for rendering
//       };

//       setNodes((nds) => nds.concat(newNode));
//     },
//     [setNodes]
//   );

//   return (
//     <div className="flex-1 relative" onDrop={onDrop} onDragOver={onDragOver}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         nodeTypes={nodeTypes}
//         fitView
//       >
//         <Background />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// };

// export const Canvas = ({ nodeTypes }) => (
//   <ReactFlowProvider>
//     <CanvasInner nodeTypes={nodeTypes} />
//   </ReactFlowProvider>
// );


// // src/components/Canvas.jsx
// import React, { useCallback, useState } from 'react';
// import ReactFlow, {
//   ReactFlowProvider,
//   addEdge,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
// } from 'reactflow';
// import 'reactflow/dist/style.css';


// import EditableBlockNode from './nodes/EditableBlockNode';
// import BlockConfigModal from './BlockConfigModal';
// // import { ErrorBoundary } from './ErrorBoundary';


// export const CanvasInner = ({ nodeTypes: builtInNodeTypes = {}}) => {
//   // override every type to use EditableBlockNode
//   const nodeTypes = Object.fromEntries(
//     Object.keys(builtInNodeTypes).map((t) => [t, EditableBlockNode])
//   );

//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//   const [modalNode, setModalNode] = useState(null);

//   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

//   const onDragOver = useCallback((e) => {
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//   }, []);

//   const onDrop = useCallback(
//     (e) => {
//       e.preventDefault();
//       const raw = e.dataTransfer.getData('application/reactflow');
//       if (!raw) return;
//       const block = JSON.parse(raw);
//       const bounds = e.currentTarget.getBoundingClientRect();
//       const pos = { x: e.clientX - bounds.left, y: e.clientY - bounds.top };
//       const newNode = {
//         id: `${+new Date()}`,
//         type: block.type,
//         position: pos,
//         data: { ...block.data, label: block.label },
//       };
//       setNodes((nds) => nds.concat(newNode));
//     },
//     [setNodes]
//   );

//   const onNodeClick = useCallback((_, node) => {
//     setModalNode(node);
//   }, []);

//   const handleSave = (id, newData) => {
//     setNodes((nds) => nds.map((n) => (n.id === id ? { ...n, data: newData } : n)));
//   };

//   const handleDelete = (id) => {
//     setNodes((nds) => nds.filter((n) => n.id !== id));
//     setEdges((eds) => eds.filter((e) => e.source !== id && e.target !== id));
//   };

//   return (
//     <div className="flex-1 relative" onDrop={onDrop} onDragOver={onDragOver}>
//       <ReactFlow
//         nodes={nodes.map((n) => ({
//           ...n,
//           // pass edit/delete handlers and connectable flag
//           data: { ...n.data, onEdit: () => setModalNode(n), onDelete: () => handleDelete(n.id) },
//         }))}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         onNodeClick={onNodeClick}
//         nodeTypes={nodeTypes}
//         fitView
//       >
//         <Background />
//         <Controls />
//       </ReactFlow>

//       {/* Configuration Modal */}
//       <BlockConfigModal
//         node={modalNode}
//         isOpen={!!modalNode}
//         onClose={() => setModalNode(null)}
//         onSave={handleSave}
//       />
//     </div>
//   );
// };

// export const Canvas = ({ nodeTypes }) => (
//   <ReactFlowProvider>
//     <CanvasInner nodeTypes={nodeTypes} />
//   </ReactFlowProvider>
// );


// src/components/Canvas.jsx
import React, { useCallback, useState } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

import EditableBlockNode from './nodes/EditableBlockNode';
import BlockConfigModal from './BlockConfigModal';

export const CanvasInner = ({ nodeTypes: builtInNodeTypes = {} }) => {
  // Now builtInNodeTypes is always an object
  const nodeTypes = Object.fromEntries(
    Object.keys(builtInNodeTypes).map((t) => [t, EditableBlockNode])
  );

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [modalNode, setModalNode] = useState(null);

  const onConnect = useCallback((params) =>
    setEdges((eds) => addEdge(params, eds)), [setEdges]
  );

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    let block;
    try {
      block = JSON.parse(e.dataTransfer.getData('application/reactflow'));
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
  }, [setNodes]);

  const onNodeClick = useCallback((_, node) => {
    setModalNode(node);
  }, []);



  const handleDelete = useCallback((id) => {
    setNodes((nds) => nds.filter((n) => n.id !== id));
    setEdges((eds) => eds.filter((e) => e.source !== id && e.target !== id));
  }, [setNodes, setEdges]);

  const handleSave = useCallback((id, newData) => {
    setNodes((nds) =>
      nds.map((n) => (n.id === id ? { ...n, data: newData } : n))
    );
  }, [setNodes]);




return (
  <div className="flex-1 relative" onDrop={onDrop} onDragOver={onDragOver}>
    <ReactFlow
      nodes={nodes.map((n) => ({
        ...n,
        data: {
          ...n.data,
          // inject edit/delete into each node’s data
          onEdit: () => setModalNode(n),
          onDelete: () => handleDelete(n.id),
        },
      }))}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      // also allow clicking the node body to open the modal
      onNodeClick={(event, node) => setModalNode(node)}
      nodeTypes={Object.fromEntries(
        Object.keys(builtInNodeTypes).map((t) => [t, EditableBlockNode])
      )}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>

    {modalNode && (
      <BlockConfigModal
        node={modalNode}
        isOpen={true}
        onClose={() => setModalNode(null)}
        onSave={handleSave}
      />
    )}
  </div>
);
};
export const Canvas = ({ nodeTypes }) => (
  <ReactFlowProvider>
    <CanvasInner nodeTypes={nodeTypes} />
  </ReactFlowProvider>
);
