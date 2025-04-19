// frontend/src/pages/StrategyBuilder.jsx
// import React from 'react';
// import { Sidebar } from '../components/Sidebar';
// import { Canvas } from '../components/Canvas';

// export default function StrategyBuilder() {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <Canvas />
//     </div>
//   );
// }


// // frontend/src/pages/StrategyBuilder.jsx
// import React from 'react';
// import { Sidebar } from '../components/Sidebar';
// import { Canvas } from '../components/Canvas';

// export default function StrategyBuilder() {
//   return (
//     <div className="flex h-screen">
//       <Sidebar />
//       <Canvas />
//     </div>
//   );
// }

// src/pages/StrategyBuilder.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Sidebar } from '../components/Sidebar';
// import { Canvas } from '../components/Canvas';

// export default function StrategyBuilder() {
//   const [strategyName, setStrategyName] = useState('');
//   const navigate = useNavigate();

//   const handleSave = () => {
//     // In production, you'd gather the node/edge data from Canvas
//     // and send it to an API along with `strategyName`.
//     alert(`Strategy "${strategyName}" saved!`);
//     // Navigate back to dashboard or stay on builder
//     navigate('/');
//   };

//   return (
//     <div className="flex h-screen flex-col bg-gray-50">
//       {/* Top bar */}
//       <header className="bg-white p-4 shadow flex justify-between items-center">
//         <h1 className="text-xl font-bold">AlgoBlocks</h1>
//         <div className="flex items-center space-x-4">
//           {/* Strategy name input */}
//           <input
//             type="text"
//             className="border rounded p-1"
//             placeholder="Enter strategy name"
//             value={strategyName}
//             onChange={(e) => setStrategyName(e.target.value)}
//           />
//           <button
//             onClick={handleSave}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             disabled={!strategyName}
//           >
//             Save
//           </button>
//           <button
//             onClick={() => navigate('/')}
//             className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
//           >
//             Back to Dashboard
//           </button>
//         </div>
//       </header>

//       <div className="flex flex-1">
//         {/* Left sidebar with blocks */}
//         <Sidebar />

//         {/* Main canvas area */}
//         <Canvas />
//       </div>
//     </div>
//   );
// }



// // src/pages/StrategyBuilder.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Sidebar } from '../components/Sidebar';
// import { Canvas } from '../components/Canvas';

// export default function StrategyBuilder({ nodeTypes }) {
//   const [strategyName, setStrategyName] = useState('');
//   const navigate = useNavigate();

//   const handleSave = () => {
//     // TODO: Integrate with backend or localStorage
//     alert(`Strategy "${strategyName}" saved!`);
//     navigate('/');
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       {/* Top Bar */}
//       <header className="bg-white p-4 shadow flex items-center justify-between">
//         <h1 className="text-xl font-bold">AlgoBlocks Strategy Builder</h1>
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             className="border rounded px-2 py-1"
//             placeholder="Enter strategy name"
//             value={strategyName}
//             onChange={(e) => setStrategyName(e.target.value)}
//           />
//           <button
//             className="bg-blue-600 text-white px-4 py-1 rounded disabled:opacity-50"
//             onClick={handleSave}
//             disabled={!strategyName}
//           >
//             Save
//           </button>
//           <button
//             className="bg-gray-300 text-gray-800 px-4 py-1 rounded hover:bg-gray-400"
//             onClick={() => navigate('/')}
//           >
//             Back to Dashboard
//           </button>
//         </div>
//       </header>

//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Canvas Area */}
//         <Canvas nodeTypes={nodeTypes} />
//       </div>
//     </div>
//   );
// }


// src/pages/StrategyBuilder.jsx
import React, { useState } from 'react';
import { BlockSidebar } from '../components/BlockSidebar';
import { Canvas } from '../components/Canvas';




export default function StrategyBuilder({ nodeTypes, onNavigate }) {
  const [strategyName, setStrategyName] = useState('');

  const handleSave = () => {
    alert(`Strategy "${strategyName}" saved!`);
    onNavigate('dashboard');
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <header className="bg-white p-4 shadow flex justify-between items-center">
        <h1 className="text-xl font-bold">Strategy Builder</h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter strategy name"
            value={strategyName}
            onChange={(e) => setStrategyName(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <button
            onClick={handleSave}
            disabled={!strategyName}
            className="bg-blue-600 text-white px-4 py-1 rounded disabled:opacity-100"
          >
            Save
          </button>
          
        </div>
      </header>
      <div className="flex flex-1">
        < BlockSidebar />
        <Canvas nodeTypes={nodeTypes} />
      </div>
    </div>
  );
}
